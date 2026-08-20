import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2022 NICAA Brochure",
  description:
    "A digital archive entry for the Nigerian Community in Angola 2022 brochure.",
};

const brochureSections = [
  "The NICAA story and community vision",
  "Leadership and town-union representation",
  "Milestones, programmes, and member activity",
  "The shared call for peace, unity, and progress",
] as const;

const brochurePageNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 30,
] as const;

export default function BrochurePage() {
  return (
    <main id="main-content" className="subpage-shell page-archive page-brochure">
      <section className="subpage-hero brochure-hero" aria-labelledby="brochure-title">
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Community publication archive</p>
          <h1 id="brochure-title">The 2022 NICAA brochure.</h1>
          <p className="subpage-lede">
            A preserved marker of the community&apos;s activities, people, and
            aspirations at a pivotal moment in its journey.
          </p>
        </div>
        <figure className="brochure-cover brochure-cover--image">
          {/* The brochure pages are delivered directly from the NICAA archive. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/brochure-page-01.avif"
            alt="Cover of the 2022 Nigerian Community Association Angola brochure"
            width={352}
            height={484}
            fetchPriority="high"
          />
        </figure>
      </section>

      <section className="subpage-section brochure-introduction" aria-labelledby="brochure-introduction-title">
        <div>
          <p className="subpage-kicker">Inside the publication</p>
          <h2 id="brochure-introduction-title">A snapshot of community life and purpose.</h2>
        </div>
        <p>
          The original website presented the 2022 brochure as a visual
          community publication. This archive page makes the publication easy
          to find while preserving the context around it.
        </p>
      </section>

      <section className="subpage-section brochure-pages" aria-labelledby="brochure-pages-title">
        <header className="subpage-section__header">
          <p className="subpage-kicker">Original uploaded pages</p>
          <h2 id="brochure-pages-title">The brochure, preserved in full view.</h2>
          <p>
            These are the 25 brochure images the original NICAA page currently
            makes publicly available.
          </p>
        </header>
        <div className="brochure-pages__grid">
          {brochurePageNumbers.map((pageNumber, index) => (
            <figure
              className={`brochure-page${pageNumber === 2 ? " brochure-page--rotated" : ""}`}
              key={pageNumber}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/media/brochure-page-${String(pageNumber).padStart(2, "0")}.avif`}
                alt={`Page ${pageNumber} from the 2022 NICAA brochure archive`}
                width={704}
                height={969}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <figcaption>
                Archive image {index + 1} of {brochurePageNumbers.length} - page {pageNumber}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="subpage-section brochure-contents" aria-label="Brochure contents">
        {brochureSections.map((section, index) => (
          <article key={section}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{section}</h2>
          </article>
        ))}
      </section>

      <section className="subpage-section brochure-request" aria-labelledby="request-title">
        <div>
          <p className="subpage-kicker">Need a copy?</p>
          <h2 id="request-title">Request the archived publication from the community office.</h2>
          <p>
            Availability depends on the condition of the archive. Please state
            that you are requesting the 2022 NICAA brochure in your message.
          </p>
        </div>
        <a
          className="subpage-button subpage-button--primary"
          href="mailto:nigeriancommunityinangola@gmail.com?subject=Request%20for%202022%20NICAA%20brochure"
        >
          Request the brochure
        </a>
      </section>

      <aside className="subpage-callout" aria-label="Explore NICAA resources">
        <div>
          <p className="subpage-kicker">Keep exploring</p>
          <h2>Find other records, guidance, and community resources.</h2>
        </div>
        <Link className="subpage-button subpage-button--light" href="/resources">
          Open resources
        </Link>
      </aside>
    </main>
  );
}
