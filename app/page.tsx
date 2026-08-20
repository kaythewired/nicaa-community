import type { Metadata } from "next";
import Image from "next/image";
import { historyTimeline, leaders, newsItems, objectives, townUnions } from "./_data/community";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover the Nigerian Community in Angola—our mission, leadership, town unions, news and member resources.",
};

export default function Home() {
  const featuredLeaders = leaders.slice(0, 4);
  const featuredNews = newsItems.slice(0, 3);
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero">
        <div className="hero-thread" aria-hidden="true"><span /><span /><span /></div>
        <div className="site-shell hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="section-kicker kicker-light"><span>NICAA</span> · Luanda, Angola</p>
            <h1><span>One community.</span><span>Two nations.</span><em>Shared progress.</em></h1>
            <p className="hero-intro">A vibrant home for Nigerians living in Angola—built to connect our people, protect our shared interests and celebrate every place we come from.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="/unions">Find your union <span aria-hidden="true">↗</span></a>
              <a className="text-link text-link-light" href="/about">Discover our story <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-art" data-reveal>
            <figure className="hero-art-main">
              <Image
                src="/media/community-hero.avif"
                alt="The flags of Angola and Nigeria standing side by side"
                width={1500}
                height={1000}
                sizes="(max-width: 900px) 94vw, 50vw"
                priority
              />
            </figure>
            <figure className="hero-art-card">
              <Image
                src="/media/news-foundation.avif"
                alt="Community members at the NICAA building foundation ceremony"
                width={900}
                height={680}
                sizes="(max-width: 640px) 48vw, 24vw"
              />
              <figcaption>Building our future<br /><strong>Luanda · 2024</strong></figcaption>
            </figure>
            <div className="hero-orbit" aria-hidden="true"><span>Peace · Unity · Progress · </span></div>
            <p className="hero-art-label">Nigeria <b>×</b> Angola</p>
          </div>
        </div>
        <div className="site-shell hero-quicklinks" aria-label="Quick links">
          <a href="tel:+244944322895"><span>01</span> Call the community <b>↗</b></a>
          <a href="mailto:nigeriancommunityinangola@gmail.com"><span>02</span> Send an email <b>↗</b></a>
          <a href="/resources"><span>03</span> Member resources <b>↗</b></a>
        </div>
      </section>

      <section className="intro-section page-section">
        <div className="site-shell intro-grid">
          <div className="section-index" data-reveal><span>01</span><p>Our purpose</p></div>
          <div className="intro-copy" data-reveal>
            <p className="section-kicker">A community with purpose</p>
            <h2>Many stories.<br />One <em>shared home.</em></h2>
          </div>
          <div className="intro-note" data-reveal>
            <p>We unite, promote and protect the interests of registered Nigerians in Angola while building meaningful bridges with our Angolan neighbours.</p>
            <a className="text-link" href="/about">How we got here <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="purpose-section page-section">
        <div className="site-shell">
          <div className="section-heading" data-reveal>
            <div><p className="section-kicker kicker-light">What we stand for</p><h2>Community in<br /><em>active motion.</em></h2></div>
            <p>We turn belonging into practical support, informed representation and stronger relationships across both nations.</p>
          </div>
          <div className="purpose-grid">
            {objectives.slice(0, 6).map((objective) => (
              <article className="purpose-card" data-reveal key={objective.number}>
                <span>{objective.number}</span><h3>{objective.title}</h3><p>{objective.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section page-section">
        <div className="site-shell story-grid">
          <div className="story-heading" data-reveal>
            <p className="section-kicker">From roots to recognition</p>
            <h2>A story still<br /><em>being written.</em></h2>
            <a className="text-link" href="/about">Explore the full story <span aria-hidden="true">→</span></a>
          </div>
          <div className="timeline-preview">
            {historyTimeline.slice(0, 4).map((item, index) => (
              <article data-reveal key={`${item.year}-${item.title}`}>
                <span>{item.year}</span><div><p>Chapter {String(index + 1).padStart(2, "0")}</p><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="union-preview page-section">
        <div className="site-shell union-preview-heading" data-reveal>
          <div><p className="section-kicker kicker-light">81 communities, one network</p><h2>Find your people.<br /><em>Feel at home.</em></h2></div>
          <a className="button button-light" href="/unions">Open union directory <span aria-hidden="true">↗</span></a>
        </div>
        <div className="union-ribbons" aria-label="A sample of registered town unions">
          {[townUnions.slice(0, 12), townUnions.slice(24, 36), townUnions.slice(48, 60)].map((row, index) => (
            <div className={`union-ribbon ribbon-${index + 1}`} key={index}>
              {[...row, ...row].map((union, itemIndex) => <span key={`${union.name}-${itemIndex}`}>{union.name}<i aria-hidden="true">✦</i></span>)}
            </div>
          ))}
        </div>
        <div className="site-shell union-preview-foot"><p><strong>{townUnions.length}</strong> town unions represented across Angola</p><p>Search by name · Browse A–Z · Connect faster</p></div>
      </section>

      <section className="leadership-preview page-section">
        <div className="site-shell">
          <div className="section-heading section-heading-dark" data-reveal>
            <div><p className="section-kicker">People who serve</p><h2>Leadership with<br /><em>community at heart.</em></h2></div>
            <a className="text-link" href="/leadership">Meet the full EXCO <span aria-hidden="true">→</span></a>
          </div>
          <div className="leader-preview-grid">
            {featuredLeaders.map((leader, index) => (
              <article className={`leader-preview-card leader-preview-${index + 1}`} data-reveal key={leader.name}>
                <figure>
                  <Image
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    width={700}
                    height={840}
                    sizes="(max-width: 640px) 50vw, (max-width: 900px) 42vw, 25vw"
                  />
                </figure>
                <div><span>{String(index + 1).padStart(2, "0")}</span><p>{leader.role}</p><h3>{leader.name}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-preview page-section">
        <div className="site-shell">
          <div className="news-preview-heading" data-reveal>
            <div><p className="section-kicker kicker-light">Community dispatch</p><h2>What’s happening<br /><em>across our network.</em></h2></div>
            <a className="text-link text-link-light" href="/news">View all news <span aria-hidden="true">→</span></a>
          </div>
          <div className="news-preview-grid">
            {featuredNews.map((item, index) => (
              <a className={`news-preview-card news-preview-${index + 1}`} href="/news" data-reveal key={item.slug}>
                <figure>
                  <Image
                    src={item.image}
                    alt=""
                    width={900}
                    height={680}
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 58vw, 34vw"
                  />
                </figure>
                <div><p><span>{item.category}</span><time>{item.date}</time></p><h3>{item.title}</h3><span className="news-arrow" aria-hidden="true">↗</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact">
        <div className="site-shell home-contact-inner" data-reveal>
          <p className="section-kicker">Your community is here</p>
          <h2>Let’s move<br /><em>forward together.</em></h2>
          <p>Need guidance, want to register a union, or simply want to connect? We would love to hear from you.</p>
          <a className="button button-ink" href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
