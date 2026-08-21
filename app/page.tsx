/* eslint-disable @next/next/no-img-element -- Portrait AVIFs are served directly to preserve reliable hosting behaviour. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WelcomeCarousel } from "./_components/WelcomeCarousel";
import { historyTimeline, leaders, newsItems, objectives, townUnions } from "./_data/community";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Nigerian Community in Angola Association: connecting, supporting and representing Nigerians across Angola.",
};

export default function Home() {
  const featuredLeaders = leaders.slice(0, 3);
  const featuredNews = newsItems.slice(0, 3);

  return (
    <main id="main-content" className="nicaa-home">
      <section className="nicaa-home__hero">
        <div className="site-shell nicaa-home__hero-layout">
          <div className="nicaa-home__hero-copy">
            <p className="nicaa-home__eyebrow">Nigerian Community in Angola Association</p>
            <p className="nicaa-home__location">Luanda, Angola</p>
            <h1>A home for Nigerians in Angola.</h1>
            <p className="nicaa-home__intro">
              NICAA brings our community together to support members, represent shared interests and build respectful ties with our Angolan neighbours.
            </p>
            <div className="nicaa-home__hero-actions">
              <Link className="nicaa-home__button nicaa-home__button--gold" href="/unions">
                Find your town union <span aria-hidden="true">→</span>
              </Link>
              <Link className="nicaa-home__button nicaa-home__button--outline" href="/about">
                Learn about NICAA
              </Link>
            </div>
          </div>

          <WelcomeCarousel />
        </div>
      </section>

      <section className="nicaa-home__welcome">
        <div className="site-shell nicaa-home__welcome-grid">
          <p className="nicaa-home__section-label">Welcome to NICAA</p>
          <h2>Community begins with knowing where to turn.</h2>
          <p>
            Whether you are newly arrived, looking for your town union, or seeking a way to participate, this is your starting point for the Nigerian community in Angola.
          </p>
        </div>
        <div className="site-shell nicaa-home__action-grid">
          <Link href="/unions">
            <span>01</span>
            <strong>Town union directory</strong>
            <small>Browse all {townUnions.length} registered town unions and their public rosters.</small>
            <b aria-hidden="true">→</b>
          </Link>
          <Link href="/leadership">
            <span>02</span>
            <strong>Meet the EXCO</strong>
            <small>Get to know the elected leaders serving the community.</small>
            <b aria-hidden="true">→</b>
          </Link>
          <Link href="/contact">
            <span>03</span>
            <strong>Contact NICAA</strong>
            <small>Reach the association for guidance, enquiries, or support.</small>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>

      <section className="nicaa-home__purpose">
        <div className="site-shell nicaa-home__purpose-layout">
          <div>
            <p className="nicaa-home__section-label nicaa-home__section-label--light">What we do</p>
            <h2>Practical support for a connected community.</h2>
            <p>
              Our work is centred on the everyday needs of Nigerians in Angola: belonging, information, representation and peaceful integration.
            </p>
            <Link className="nicaa-home__text-link" href="/about">Read our full objectives <span aria-hidden="true">→</span></Link>
          </div>
          <div className="nicaa-home__purpose-list">
            {objectives.slice(0, 4).map((objective) => (
              <article key={objective.number}>
                <span>{objective.number}</span>
                <div>
                  <h3>{objective.title}</h3>
                  <p>{objective.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nicaa-home__story">
        <div className="site-shell nicaa-home__story-layout">
          <div className="nicaa-home__story-copy">
            <p className="nicaa-home__section-label">Our community</p>
            <h2>Built by members. Guided by shared responsibility.</h2>
            <p>
              NICAA preserves a proud community history while creating pathways for members to contribute to the present and future of Angola.
            </p>
            <Link className="nicaa-home__button nicaa-home__button--green" href="/history">Explore our history</Link>
          </div>
          <div className="nicaa-home__milestones" aria-label="Community milestones">
            {historyTimeline.slice(0, 4).map((item) => (
              <article key={`${item.year}-${item.title}`}>
                <time>{item.year}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nicaa-home__unions">
        <div className="site-shell nicaa-home__unions-layout">
          <div>
            <p className="nicaa-home__section-label nicaa-home__section-label--light">Town unions</p>
            <h2>Find the people from home.</h2>
            <p>Our town unions are the local heart of NICAA. Find yours by name, browse A–Z, and view the public contacts available for each union.</p>
            <Link className="nicaa-home__button nicaa-home__button--gold" href="/unions">Open the union directory <span aria-hidden="true">→</span></Link>
          </div>
          <div className="nicaa-home__union-names" aria-label="Examples of registered town unions">
            {townUnions.slice(0, 12).map((union) => <span key={union.name}>{union.name}</span>)}
          </div>
        </div>
      </section>

      <section className="nicaa-home__leadership">
        <div className="site-shell">
          <div className="nicaa-home__section-heading">
            <div>
              <p className="nicaa-home__section-label">Leadership</p>
              <h2>Serving the community.</h2>
            </div>
            <Link className="nicaa-home__text-link nicaa-home__text-link--dark" href="/leadership">Meet all EXCO members <span aria-hidden="true">→</span></Link>
          </div>
          <div className="nicaa-home__leaders-grid">
            {featuredLeaders.map((leader) => (
              <article key={leader.name}>
                <img src={leader.image} alt={`Portrait of ${leader.name}`} />
                <div>
                  <p>{leader.role}</p>
                  <h3>{leader.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nicaa-home__news">
        <div className="site-shell nicaa-home__news-layout">
          <div className="nicaa-home__news-heading">
            <p className="nicaa-home__section-label">News & updates</p>
            <h2>From the community.</h2>
            <Link className="nicaa-home__text-link nicaa-home__text-link--dark" href="/news">See all updates <span aria-hidden="true">→</span></Link>
          </div>
          <div className="nicaa-home__news-list">
            {featuredNews.map((item) => (
              <Link href={`/news/${item.slug}`} key={item.slug}>
                <Image src={item.image} alt="" width={280} height={190} sizes="(max-width: 640px) 110px, 180px" />
                <div>
                  <p><span>{item.category}</span><time>{item.date}</time></p>
                  <h3>{item.title}</h3>
                  <small>{item.excerpt}</small>
                </div>
                <b aria-hidden="true">→</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="nicaa-home__contact">
        <div className="site-shell nicaa-home__contact-layout">
          <div>
            <p className="nicaa-home__section-label">Keep in touch</p>
            <h2>Your community is within reach.</h2>
          </div>
          <div>
            <p>For membership guidance, community enquiries or information about your town union, the NICAA team is ready to hear from you.</p>
            <Link className="nicaa-home__button nicaa-home__button--green" href="/contact">Contact NICAA <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
