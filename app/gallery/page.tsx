import type { Metadata } from "next";
import { CommunityGallery } from "../_components/CommunityGallery";

export const metadata: Metadata = {
  title: "Community Gallery",
  description:
    "Explore photographs from a Nigerian Community in Angola reception and gathering in Luanda.",
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="subpage-shell page-gallery">
      <section className="gallery-hero" aria-labelledby="gallery-title">
        <div>
          <p className="subpage-eyebrow">Community in pictures</p>
          <h1 id="gallery-title">A gathering shaped by welcome, culture, and connection.</h1>
          <p className="subpage-lede">
            A photographic record of a community reception in Luanda, bringing
            together NICAA representatives, families, guests, and friends.
          </p>
        </div>
        <dl className="gallery-hero__details">
          <div><dt>Photographs</dt><dd>24</dd></div>
          <div><dt>Location</dt><dd>Luanda</dd></div>
          <div><dt>Collection</dt><dd>Community reception</dd></div>
        </dl>
      </section>

      <section className="subpage-section gallery-collection" aria-labelledby="gallery-collection-title">
        <header className="subpage-section__header gallery-collection__header">
          <p className="subpage-kicker">The full collection</p>
          <h2 id="gallery-collection-title">Moments from the gathering</h2>
          <p>Select any photograph to view it at full size, then use the arrow keys or controls to move through the collection.</p>
        </header>
        <CommunityGallery />
      </section>
    </main>
  );
}
