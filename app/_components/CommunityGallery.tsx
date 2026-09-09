"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  featured?: boolean;
};

const galleryImages: GalleryImage[] = [
  { src: "/media/gallery/community-reception-01.webp", alt: "Community representatives welcoming a guest in purple attire at a reception in Luanda", caption: "A warm welcome at the reception", width: 1124, height: 750, featured: true },
  { src: "/media/gallery/community-reception-02.webp", alt: "Two guests waving during their arrival at the community reception", caption: "Greetings on arrival", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-03.webp", alt: "Community members presenting commemorative artwork to a guest", caption: "A presentation of commemorative artwork", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-04.webp", alt: "Families and community representatives gathered for a large group portrait", caption: "Together for a community portrait", width: 1124, height: 750, featured: true },
  { src: "/media/gallery/community-reception-05.webp", alt: "A young community member presenting flowers during the reception", caption: "Flowers and appreciation", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-06.webp", alt: "Community leaders exchanging a patterned cultural gift", caption: "Sharing a cultural gift", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-07.webp", alt: "Guest holding a sculptural artwork decorated with pale leaves", caption: "A closer look at the presentation piece", width: 750, height: 1124 },
  { src: "/media/gallery/community-reception-08.webp", alt: "Community representatives gathered around a gift presentation", caption: "Leaders mark the presentation", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-09.webp", alt: "Guest in purple speaking into a microphone beside community representatives", caption: "Remarks from the guest table", width: 1124, height: 750, featured: true },
  { src: "/media/gallery/community-reception-10.webp", alt: "Community members seated together during the programme", caption: "Members follow the programme", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-11.webp", alt: "Community representative in blue addressing guests from the floor", caption: "An address from the floor", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-12.webp", alt: "Rows of community members listening during the gathering", caption: "A shared moment of attention", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-13.webp", alt: "Community representative speaking into a microphone at a lectern", caption: "A community representative speaks", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-14.webp", alt: "Speaker addressing the gathering beside the HCTA Hotels lectern", caption: "Remarks at the Luanda venue", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-15.webp", alt: "Community leaders and guests seated in the front row", caption: "Leaders and guests during the session", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-16.webp", alt: "Families and community members seated in the meeting room", caption: "Families gathered for the occasion", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-17.webp", alt: "A young girl presenting a bouquet to the visiting guest", caption: "A bouquet from the community", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-18.webp", alt: "Visiting guest and a young community member posing with flowers", caption: "A portrait after the presentation", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-19.webp", alt: "Women and community members posing together in a hotel lounge", caption: "Community members share a portrait", width: 1124, height: 750, featured: true },
  { src: "/media/gallery/community-reception-20.webp", alt: "Three community members in conversation after the formal programme", caption: "Conversation after the programme", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-21.webp", alt: "Two guests sharing a light moment in the hotel lobby", caption: "Connecting beyond the programme", width: 1124, height: 750 },
  { src: "/media/gallery/community-reception-22.webp", alt: "Three community members speaking together in the hotel lobby", caption: "A light moment among members", width: 1124, height: 750, featured: true },
  { src: "/media/gallery/community-reception-23.webp", alt: "Two community representatives standing for a full-length lobby portrait", caption: "A portrait between attendees", width: 750, height: 1124 },
  { src: "/media/gallery/community-reception-24.webp", alt: "Community representatives in white traditional attire posing together", caption: "Tradition, unity, and community", width: 1124, height: 750 },
];

export function CommunityGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const closeGallery = () => {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    if (previousIndex !== null) {
      requestAnimationFrame(() => triggerRefs.current[previousIndex]?.focus());
    }
  };

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current + direction + galleryImages.length) % galleryImages.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="community-gallery-grid">
        {galleryImages.map((image, index) => (
          <figure
            className={`community-gallery-card${image.featured ? " community-gallery-card--featured" : ""}${image.height > image.width ? " community-gallery-card--portrait" : ""}`}
            key={image.src}
          >
            <button
              ref={(element) => { triggerRefs.current[index] = element; }}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photograph ${index + 1}: ${image.caption}`}
            >
              <span className="community-gallery-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 34vw"
                />
              </span>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{image.caption}</strong>
                <span aria-hidden="true">View ↗</span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {activeImage && activeIndex !== null ? (
        <div
          className="community-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph ${activeIndex + 1} of ${galleryImages.length}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <button
            ref={closeButtonRef}
            className="community-gallery-close"
            type="button"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <button
            className="community-gallery-nav community-gallery-nav--previous"
            type="button"
            onClick={() => move(-1)}
            aria-label="Show previous photograph"
          >
            ←
          </button>
          <figure className="community-gallery-lightbox__figure">
            <div className="community-gallery-lightbox__image">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                unoptimized
                priority
                sizes="95vw"
              />
            </div>
            <figcaption>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {galleryImages.length}</span>
              <strong>{activeImage.caption}</strong>
            </figcaption>
          </figure>
          <button
            className="community-gallery-nav community-gallery-nav--next"
            type="button"
            onClick={() => move(1)}
            aria-label="Show next photograph"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}
