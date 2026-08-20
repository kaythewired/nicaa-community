import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UnionDirectory } from "../_components/UnionDirectory";
import { townUnions } from "../_data/community";

export const metadata: Metadata = {
  title: "Town Unions",
  description:
    "Search the network of Nigerian town unions and community associations represented within NICAA.",
};

export default function UnionsPage() {
  return (
    <main id="main-content" className="subpage-shell page-unions">
      <section
        className="subpage-hero page-unions__hero"
        aria-labelledby="unions-title"
      >
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">The network inside the community</p>
          <h1 id="unions-title">Find the union that feels like home.</h1>
          <p className="subpage-lede">
            Town unions are the community&apos;s closest point of connection:
            a familiar network for welfare, communication, cultural belonging,
            and practical support.
          </p>
          <dl className="page-unions__stats">
            <div>
              <dt>Associations listed</dt>
              <dd>{townUnions.length}</dd>
            </div>
            <div>
              <dt>One shared purpose</dt>
              <dd>NICAA</dd>
            </div>
          </dl>
        </div>
        <figure className="subpage-hero__media page-unions__image">
          <Image
            src="/media/community-hero.avif"
            alt="A gathering of Nigerian community members in Angola"
            width={1500}
            height={1000}
            sizes="(max-width: 760px) 100vw, 48vw"
            priority
          />
          <figcaption>Community becomes stronger when every voice can find its place.</figcaption>
        </figure>
      </section>

      <section
        className="subpage-section page-unions__directory"
        aria-labelledby="directory-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">Community directory</p>
          <h2 id="directory-title">Search by union name or browse alphabetically.</h2>
          <p>
            This public directory lists association names only. Member rosters
            and personal contact details are handled through the community
            office to protect privacy.
          </p>
        </header>
        <UnionDirectory unions={townUnions} />
      </section>

      <section
        className="subpage-section page-unions__guidance"
        aria-labelledby="union-help-title"
      >
        <div>
          <p className="subpage-kicker">Not sure where you belong?</p>
          <h2 id="union-help-title">We can help make the introduction.</h2>
        </div>
        <p>
          Share your town, local government area, or state of origin with the
          NICAA office. The team will guide you to the most relevant
          association or the appropriate community representative.
        </p>
        <Link className="subpage-button subpage-button--primary" href="/contact">
          Ask the community office
        </Link>
      </section>

      <aside className="page-unions__privacy" aria-label="Directory privacy note">
        <p className="subpage-kicker">Privacy by design</p>
        <p>
          Leadership telephone numbers and member lists are not published in
          this directory. Verified requests can be routed through NICAA at{" "}
          <a href="mailto:nigeriancommunityinangola@gmail.com">
            nigeriancommunityinangola@gmail.com
          </a>
          .
        </p>
      </aside>
    </main>
  );
}
