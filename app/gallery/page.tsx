import type { Metadata } from "next";
import { CommunityGallery } from "../_components/CommunityGallery";

export const metadata: Metadata = {
  title: "Community Gallery",
  description:
    "Explore photographs from NICAA community gatherings and the Secretariat Complex construction at Golf 11 in Luanda.",
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="subpage-shell page-gallery">
      <section className="gallery-hero" aria-labelledby="gallery-title">
        <div>
          <p className="subpage-eyebrow">Community in pictures</p>
          <h1 id="gallery-title">The community’s story, progress, and shared moments.</h1>
          <p className="subpage-lede">
            A photographic record of NICAA in Luanda—from the work taking shape
            at Golf 11 to the gatherings that bring representatives, families,
            guests, and friends together.
          </p>
        </div>
        <dl className="gallery-hero__details">
          <div><dt>Photographs</dt><dd>27</dd></div>
          <div><dt>Location</dt><dd>Luanda</dd></div>
          <div><dt>Collections</dt><dd>2</dd></div>
        </dl>
      </section>

      <section className="subpage-section gallery-collection gallery-collection--construction" aria-labelledby="construction-gallery-title">
        <header className="subpage-section__header gallery-collection__header">
          <p className="subpage-kicker">Building for the future</p>
          <h2 id="construction-gallery-title">Construction work at the Nigerian Community Association’s proposed Secretariat Complex at Golf 11.</h2>
          <p>The photographs document active site work, the approved construction notice, and the architectural vision for the proposed complex.</p>
        </header>
        <CommunityGallery collection="construction" />
      </section>

      <section className="subpage-section gallery-collection gallery-collection--reception" aria-labelledby="reception-gallery-title">
        <header className="subpage-section__header gallery-collection__header">
          <p className="subpage-kicker">Community reception</p>
          <h2 id="reception-gallery-title">Moments from the gathering</h2>
          <p>Select any photograph to view it at full size, then use the arrow keys or controls to move through the collection.</p>
        </header>
        <CommunityGallery collection="reception" />
      </section>
    </main>
  );
}
