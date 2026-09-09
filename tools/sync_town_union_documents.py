from __future__ import annotations

import json
import re
import shutil
import sys
import unicodedata
from pathlib import Path

from docx import Document


SOURCE_DIR = Path(r"C:\Users\Baylord\Desktop\Bro Onyeka Documents - 29 Aug onwards")
PROJECT_DIR = Path(__file__).resolve().parents[1]
ROSTERS_PATH = PROJECT_DIR / "app" / "_data" / "town-union-rosters.json"
DOCUMENTS_PATH = PROJECT_DIR / "app" / "_data" / "town-union-documents.json"
PUBLIC_DIR = PROJECT_DIR / "public" / "documents" / "town-unions"


TITLE_OVERRIDES = {
    "AGBOBU DEVELOPMEANT UNION.docx": "AGBOBU DEVELOPMENT UNION",
    "NAWFIJA PROGRESIVE UNION.docx": "NAWFIJA PROGRESSIVE UNION",
    "NPKOR UNION.docx": "NKPOR UNION",
    "OKIGWE SENETORIAL  ZONE.docx": "OKIGWE SENATORIAL ZONE",
    "UMUNZE MEMBERS TOWN UNION.docx": "UMUNZE MEMBERS TOWN UNION",
}


def clean_line(value: str) -> str:
    value = value.replace("\u00a0", " ").replace("\ufffd", "'")
    value = re.sub(r"\{\d+\}$", "", value)
    return re.sub(r"\s+", " ", value).strip()


def slugify(value: str) -> str:
    ascii_value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-z0-9]+", "-", ascii_value.lower()).strip("-")


def main() -> int:
    if not SOURCE_DIR.is_dir():
        print(f"Source folder not found: {SOURCE_DIR}", file=sys.stderr)
        return 1

    source_files = sorted(SOURCE_DIR.glob("*.docx"), key=lambda path: path.name.casefold())
    if len(source_files) != 93:
        print(f"Expected 93 DOCX files, found {len(source_files)}", file=sys.stderr)
        return 1

    existing_rosters = json.loads(ROSTERS_PATH.read_text(encoding="utf-8"))
    rosters: dict[str, str] = {}
    documents: dict[str, dict[str, str]] = {}
    used_slugs: set[str] = set()

    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    for source_file in source_files:
        document = Document(source_file)
        lines = [clean_line(paragraph.text) for paragraph in document.paragraphs]
        lines = [line for line in lines if line]
        if not lines:
            raise ValueError(f"No readable text found in {source_file.name}")

        source_title = clean_line(lines[0])
        title = TITLE_OVERRIDES.get(source_file.name, source_title)
        if title in rosters:
            raise ValueError(f"Duplicate town-union title: {title}")

        slug = slugify(title)
        if slug in used_slugs:
            raise ValueError(f"Duplicate document slug: {slug}")
        used_slugs.add(slug)

        # This source file is named for UMUNZE but contains the ORUMBA roster.
        # Keep the already-published UMUNZE roster until a corrected file arrives.
        if source_file.name == "UMUNZE MEMBERS TOWN UNION.docx" and title in existing_rosters:
            roster = existing_rosters[title]
        else:
            roster = "\n\n".join(lines[1:])

        public_name = f"{slug}.docx"
        shutil.copy2(source_file, PUBLIC_DIR / public_name)
        rosters[title] = roster
        documents[title] = {
            "url": f"/documents/town-unions/{public_name}",
            "name": source_file.name,
        }

    sorted_rosters = dict(sorted(rosters.items(), key=lambda item: item[0].casefold()))
    sorted_documents = dict(sorted(documents.items(), key=lambda item: item[0].casefold()))
    ROSTERS_PATH.write_text(json.dumps(sorted_rosters, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    DOCUMENTS_PATH.write_text(json.dumps(sorted_documents, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Synced {len(sorted_rosters)} rosters and {len(sorted_documents)} documents.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
