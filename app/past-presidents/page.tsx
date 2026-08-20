import type { Metadata } from "next";
import Link from "next/link";
import { pastPresidents } from "../_data/community";

export const metadata: Metadata = {
  title: "Past Presidents",
  description:
    "Remember the presidents and caretaker leaders who served the Nigerian Community in Angola from 1995 to 2021.",
};

export default function PastPresidentsPage() {
  return (
    <main id="main-content" className="subpage-shell page-archive page-past-presidents">
      <section className="subpage-hero archive-hero" aria-labelledby="past-presidents-title">
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">NICAA archive</p>
          <h1 id="past-presidents-title">Past presidents. A shared legacy.</h1>
          <p className="subpage-lede">
            The people who carried the responsibility of keeping Nigerians in
            Angola connected, represented, and moving forward together.
          </p>
        </div>
        <div className="archive-hero__stamp" aria-label="Archive dates">
          <span>1995</span>
          <i aria-hidden="true">/</i>
          <span>2021</span>
          <p>Years of recorded service</p>
        </div>
      </section>

      <section className="subpage-section archive-introduction" aria-labelledby="legacy-title">
        <p className="subpage-section-number" aria-hidden="true">01</p>
        <div>
          <p className="subpage-kicker">A record of service</p>
          <h2 id="legacy-title">Leadership changes. The community remains.</h2>
        </div>
        <p>
          This page preserves the leadership list published on NICAA&apos;s
          previous website. It is an institutional record, offered with respect
          to everyone who served during the community&apos;s formative years.
        </p>
      </section>

      <section className="subpage-section president-ledger" aria-label="Past president ledger">
        <ol>
          {pastPresidents.map((president, index) => (
            <li key={president.name}>
              <span className="president-ledger__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <figure className="president-ledger__portrait">
                {/* The archive portraits are served directly to keep every image reliable. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={president.image}
                  alt={`Portrait of ${president.name}`}
                  width={538}
                  height={646}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </figure>
              <div>
                <p>{president.tenure}</p>
                <h2>{president.name}</h2>
              </div>
              <p className="president-ledger__note">{president.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="subpage-callout" aria-label="Read NICAA history">
        <div>
          <p className="subpage-kicker">Continue the story</p>
          <h2>See how the community grew from 1995 onward.</h2>
        </div>
        <Link className="subpage-button subpage-button--light" href="/history">
          Read NICAA history
        </Link>
      </aside>
    </main>
  );
}
