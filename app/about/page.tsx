import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { historyTimeline, objectives } from "../_data/community";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the history, purpose, and community commitments of the Nigerian Community in Angola.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="subpage-shell page-about">
      <section
        className="subpage-hero page-about__hero"
        aria-labelledby="about-title"
      >
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Our story · Rooted in solidarity</p>
          <h1 id="about-title">One community, built to stand together.</h1>
          <p className="subpage-lede">
            The Nigerian Community in Angola brings Nigerians together to
            protect member interests, encourage responsible participation in
            Angolan society, and strengthen the friendship between both
            nations.
          </p>
          <div className="subpage-actions">
            <Link className="subpage-button subpage-button--primary" href="/unions">
              Find your town union
            </Link>
            <Link className="subpage-button subpage-button--text" href="/contact">
              Speak with the community
            </Link>
          </div>
        </div>

        <figure className="subpage-hero__media page-about__portrait">
          <Image
            src="/media/news-foundation.avif"
            alt="Members of the Nigerian community gathered together in Angola"
            width={1400}
            height={1050}
            sizes="(max-width: 760px) 100vw, 48vw"
            priority
          />
          <figcaption>
            Peace <span aria-hidden="true">•</span> Unity{" "}
            <span aria-hidden="true">•</span> Progress
          </figcaption>
        </figure>
      </section>

      <section className="page-about__statement" aria-labelledby="purpose-title">
        <p className="subpage-section-number" aria-hidden="true">
          01
        </p>
        <div>
          <p className="subpage-kicker">Why NICAA exists</p>
          <h2 id="purpose-title">
            To unite, promote, and protect Nigerians who call Angola home.
          </h2>
        </div>
        <p>
          NICAA helps members understand and respect the laws of the Republic
          of Angola, creates channels for reliable information, encourages
          peaceful integration with host communities, and works alongside the
          Nigerian Mission to support healthy bilateral relations.
        </p>
      </section>

      <section
        className="subpage-section page-about__history"
        id="history"
        aria-labelledby="history-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">A living history</p>
          <h2 id="history-title">From a moment of solidarity to an institution.</h2>
          <p>
            The community traces its organised roots to 1995. Its history is
            one of members repeatedly choosing collective care, accountable
            leadership, and constructive partnership.
          </p>
        </header>

        <ol className="page-about__timeline">
          {historyTimeline.map((item) => (
            <li className="page-about__timeline-item" key={item.year + item.title}>
              <p className="page-about__timeline-year">{item.year}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="subpage-section page-about__objectives"
        aria-labelledby="objectives-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">Our commitments</p>
          <h2 id="objectives-title">What community looks like in practice.</h2>
        </header>

        <div className="page-about__objective-grid">
          {objectives.map((objective) => (
            <article className="page-about__objective" key={objective.number}>
              <p className="page-about__objective-number" aria-hidden="true">
                {objective.number}
              </p>
              <h3>{objective.title}</h3>
              <p>{objective.description}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="subpage-callout page-about__callout" aria-label="Community invitation">
        <div>
          <p className="subpage-kicker">There is a place for you here</p>
          <h2>Connect with the people who understand the journey.</h2>
        </div>
        <Link className="subpage-button subpage-button--light" href="/contact">
          Start a conversation
        </Link>
      </aside>
    </main>
  );
}
