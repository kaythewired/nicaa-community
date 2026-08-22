import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Find NICAA community documents, historical material, member guidance, and useful routes to support.",
};

const resourceCards = [
  {
    label: "Community archive",
    title: "2022 NICAA brochure",
    description:
      "A preserved snapshot of community programmes, leadership, and milestones from the original NICAA website.",
    href: "/brochure",
    action: "Open brochure archive",
  },
  {
    label: "History and governance",
    title: "How the community grew",
    description:
      "Follow the story from the first organised community leadership in 1995 through later governance and institution-building milestones.",
    href: "/history",
    action: "Read the full history",
  },
  {
    label: "Member network",
    title: "Town union directory",
    description:
      "Search the public list of town unions and associations represented within the wider Nigerian Community in Angola.",
    href: "/unions",
    action: "Browse the directory",
  },
  {
    label: "Community desk",
    title: "News and notices",
    description:
      "Review project updates, official engagements, community events, and other selected reports from NICAA.",
    href: "/news",
    action: "Read the updates",
  },
  {
    label: "Leadership archive",
    title: "Past presidents",
    description:
      "Remember the presidents and caretaker leaders who served the community from 1995 to 2021.",
    href: "/past-presidents",
    action: "View the legacy record",
  },
  {
    label: "Diplomatic archive",
    title: "Ambassador profile",
    description:
      "Read the archived profile from NICAA's former website, clearly marked as historical information.",
    href: "/ambassador",
    action: "Open the archive",
  },
] as const;

export default function ResourcesPage() {
  return (
    <main id="main-content" className="subpage-shell page-resources">
      <section
        className="subpage-hero resource-hero"
        aria-labelledby="resources-title"
      >
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Documents · Guidance · Archives</p>
          <h1 id="resources-title">Useful information, kept within reach.</h1>
          <p className="subpage-lede">
            Start here for community history, publications, member routes, and
            the right place to ask for verified guidance.
          </p>
        </div>
        <div className="resource-hero__mark" aria-hidden="true">
          <span>N</span>
          <span>A</span>
          <p>Connected across the Atlantic</p>
        </div>
      </section>

      <section
        className="subpage-section resource-library"
        aria-labelledby="library-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">Community library</p>
          <h2 id="library-title">Begin with the resource that matches your need.</h2>
        </header>
        <div className="resource-grid">
          {resourceCards.map((resource, index) => (
            <article className="resource-card" key={resource.title}>
              <p className="resource-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="resource-card__label">{resource.label}</p>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              {resource.href.startsWith("/") ? (
                <Link className="resource-card__link" href={resource.href}>
                  {resource.action}
                </Link>
              ) : (
                <a className="resource-card__link" href={resource.href}>
                  {resource.action}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        className="subpage-section resource-archive"
        aria-labelledby="archive-title"
      >
        <figure className="resource-archive__image">
          <Image
            src="/media/ambassador-archive.avif"
            unoptimized
            alt="Archival portrait from NICAA's record of Nigeria–Angola diplomatic engagement"
            width={900}
            height={1100}
            sizes="(max-width: 760px) 100vw, 42vw"
          />
          <figcaption>From the NICAA diplomatic relations archive</figcaption>
        </figure>
        <div className="resource-archive__copy">
          <p className="subpage-kicker">An archive, not a live directory</p>
          <h2 id="archive-title">Preserving institutional memory responsibly.</h2>
          <p>
            The previous community website documented former diplomatic
            leadership and major engagements between Nigerian representatives
            and NICAA. These records remain valuable history, but current
            officeholders and consular guidance should always be confirmed
            through official channels.
          </p>
          <Link className="subpage-button subpage-button--primary" href="/contact">
            Ask for current guidance
          </Link>
        </div>
      </section>

      <section
        className="subpage-section resource-faq"
        aria-labelledby="faq-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">Before you get in touch</p>
          <h2 id="faq-title">Common starting points</h2>
        </header>
        <div className="resource-faq__list">
          <details>
            <summary>How do I identify my town union?</summary>
            <p>
              Search the public directory by town or association name. If you
              cannot find a match, the community office can route your enquiry.
            </p>
          </details>
          <details>
            <summary>Where can I obtain an older NICAA publication?</summary>
            <p>
              Email the community office with the publication name and year.
              Availability depends on the condition of the archive.
            </p>
          </details>
          <details>
            <summary>Is this an official consular service?</summary>
            <p>
              No. NICAA supports community coordination and can help identify
              the right channel, but passports, visas, and formal consular
              matters remain the responsibility of the Nigerian Mission.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
