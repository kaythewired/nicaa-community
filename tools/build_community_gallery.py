from pathlib import Path

from PIL import Image


SOURCE_DIR = Path(r"C:\Users\Baylord\AppData\Local\Temp")
OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "media" / "gallery"

SOURCE_FILES = [
    "codex-clipboard-3b0deaee-627b-4c75-9c99-d274f143b2b1.png",
    "codex-clipboard-342529c4-a399-484a-bc3f-aa68d49c34cc.png",
    "codex-clipboard-96754b75-7877-48c9-8741-6186bd10030f.jpg",
    "codex-clipboard-a45a6079-afbf-40d7-af2b-cb5e82f232cc.png",
    "codex-clipboard-494d8e01-189a-4f34-93c1-bbd2ea514a5c.jpg",
    "codex-clipboard-482c9d0c-6f2a-479c-ac3a-5853885f6f20.png",
    "codex-clipboard-ff345004-2652-475d-9b69-f771902a379c.jpg",
    "codex-clipboard-d3ec0c47-2906-4c85-b5c0-e35284f9aaad.jpg",
    "codex-clipboard-a63e45b5-dd5b-4225-8361-c636e587bed1.jpg",
    "codex-clipboard-d4547671-fb18-4dcd-b367-607800879a58.jpg",
    "codex-clipboard-2308d03a-40d5-4900-b128-699323dcf266.jpg",
    "codex-clipboard-5924ed88-a1ac-44d3-aabc-52b0bd20a9ba.jpg",
    "codex-clipboard-835ecfc2-a908-41c0-8a76-946c7b30da4a.jpg",
    "codex-clipboard-3659389a-284c-4b78-8ba8-721e3d29d06c.jpg",
    "codex-clipboard-5900b02a-46a4-4707-bc82-06650a5f2fe9.jpg",
    "codex-clipboard-8686db93-cfd0-40de-80fd-cca6f333e193.jpg",
    "codex-clipboard-9fa24340-57d9-4c05-b82e-49e8f8792e5f.jpg",
    "codex-clipboard-7e40e5bc-0205-4dfc-aedc-f3ec1af269d4.jpg",
    "codex-clipboard-896d372e-79ff-417f-a826-a398c349a1fb.jpg",
    "codex-clipboard-4fc52752-b426-4593-b6c5-6a2d79444742.jpg",
    "codex-clipboard-ba5318b8-6b3c-4e0e-bb4a-f7d12f4ccced.jpg",
    "codex-clipboard-b42ee787-ec3e-446e-b1c2-6f0a43f36111.jpg",
    "codex-clipboard-3fba22ae-7d44-4ef2-bbcb-1eb0387816e0.jpg",
    "codex-clipboard-fc270717-aa4f-40b1-bfb9-c1d108f1829f.jpg",
]


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for index, source_name in enumerate(SOURCE_FILES, start=1):
        source_path = SOURCE_DIR / source_name
        if not source_path.is_file():
            raise FileNotFoundError(source_path)

        output_path = OUTPUT_DIR / f"community-reception-{index:02d}.webp"
        with Image.open(source_path) as image:
            image = image.convert("RGB")
            image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
            image.save(output_path, "WEBP", quality=86, method=6)
            print(f"{output_path.name}: {image.width}x{image.height}")


if __name__ == "__main__":
    main()
