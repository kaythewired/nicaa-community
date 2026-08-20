import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { leaders } from "../_data/community";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the executive officers serving the Nigerian Community in Angola and explore the community's leadership history.",
};

const pastPresidents = [
  { name: "Hon. Chidebe Nze", tenure: "1995 – February 2003" },
  { name: "Late Engr. Austin Odigie", tenure: "February – June 2003" },
  { name: "Hon. Ifeanyi Nworah", tenure: "June 2003 – April 2004" },
  { name: "Late Mr. John Ogebulue", tenure: "Caretaker, 2004 – 2007" },
  { name: "Hon. Basil Ngige", tenure: "2007 – 2011" },
  { name: "Hon. Benjamin Okeke (OKB)", tenure: "2011 – May 2015" },
  { name: "Hon. Sampson Ebigbo", tenure: "2015 – 2018" },
  {
    name: "Hon. Chukwuemeka George Onyemeforo",
    tenure: "Interim President, 2019 – 2021",
  },
] as const;

export default function LeadershipPage() {
  const [featuredLeader, ...executiveTeam] = leaders;

  return (
    <main id="main-content" className="subpage-shell page-leadership">
      <section
        className="subpage-hero leadership-hero"
        aria-labelledby="leadership-title"
      >
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Leadership in service</p>
          <h1 id="leadership-title">The office belongs to the community.</h1>
          <p className="subpage-lede">
            NICAA&apos;s executive officers coordinate member welfare,
            communication, representation, and the everyday work of keeping a
            diverse community moving in one direction.
          </p>
        </div>
        <div className="leadership-hero__note">
          <span aria-hidden="true">11</span>
          <p>executive portfolios working toward peace, unity, and progress.</p>
        </div>
      </section>

      {featuredLeader ? (
        <section
          className="subpage-section leadership-feature"
          aria-labelledby="president-title"
        >
          <figure className="leadership-feature__portrait">
            <Image
              src={featuredLeader.image}
              alt={"Portrait of " + featuredLeader.name + ", " + featuredLeader.role}
              width={900}
              height={1100}
              sizes="(max-width: 760px) 100vw, 44vw"
              priority
            />
          </figure>
          <div className="leadership-feature__copy">
            <p className="subpage-kicker">Community president</p>
            <h2 id="president-title">{featuredLeader.name}</h2>
            <p className="leadership-feature__role">{featuredLeader.role}</p>
            <p>
              The presidency convenes the executive, town-union leadership,
              community elders, and partners around the practical needs and
              long-term aspirations of Nigerians in Angola.
            </p>
            {featuredLeader.summary ? <p>{featuredLeader.summary}</p> : null}
          </div>
        </section>
      ) : null}

      <section
        className="subpage-section leadership-team"
        aria-labelledby="executive-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">The executive council</p>
          <h2 id="executive-title">Different responsibilities. One mandate.</h2>
          <p>
            Each portfolio supports a specific part of NICAA&apos;s work, from
            administration and finance to public communication and member
            coordination.
          </p>
        </header>

        <div className="leadership-grid">
          {executiveTeam.map((leader, index) => (
            <article className="leadership-card" key={leader.name}>
              <div className="leadership-card__index" aria-hidden="true">
                {String(index + 2).padStart(2, "0")}
              </div>
              <figure className="leadership-card__portrait">
                <Image
                  src={leader.image}
                  alt={"Portrait of " + leader.name + ", " + leader.role}
                  width={700}
                  height={840}
                  sizes="(max-width: 620px) 88vw, (max-width: 1020px) 42vw, 27vw"
                />
              </figure>
              <div className="leadership-card__body">
                <p>{leader.role}</p>
                <h3>{leader.name}</h3>
                {leader.summary ? <p>{leader.summary}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="subpage-section leadership-legacy"
        aria-labelledby="legacy-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">Institutional memory</p>
          <h2 id="legacy-title">A line of service stretching back to 1995.</h2>
        </header>
        <ol className="leadership-legacy__timeline">
          {pastPresidents.map((leader) => (
            <li key={leader.name}>
              <p>{leader.tenure}</p>
              <h3>{leader.name}</h3>
            </li>
          ))}
        </ol>
        <Link className="subpage-button subpage-button--text" href="/about#history">
          Read the community history
        </Link>
      </section>

      <aside className="subpage-callout leadership-callout" aria-label="Contact the executive">
        <div>
          <p className="subpage-kicker">Need to reach the executive?</p>
          <h2>Start with the community office.</h2>
        </div>
        <Link className="subpage-button subpage-button--light" href="/contact">
          Contact NICAA
        </Link>
      </aside>
    </main>
  );
}
