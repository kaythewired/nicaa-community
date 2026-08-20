import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "../_data/community";

export const metadata: Metadata = {
  title: "Community News",
  description:
    "Read community updates, project milestones, official visits, and stories from Nigerians in Angola.",
};

export default function NewsPage() {
  const [featuredStory, ...moreStories] = newsItems;

  return (
    <main id="main-content" className="subpage-shell page-news">
      <section
        className="subpage-hero news-hero"
        aria-labelledby="news-title"
      >
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Dispatches from the community</p>
          <h1 id="news-title">The work, milestones, and people moving us forward.</h1>
          <p className="subpage-lede">
            Follow NICAA projects, public engagements, cultural moments, and
            notices that matter to Nigerians living and working in Angola.
          </p>
        </div>
        <div className="news-hero__edition" aria-label="News desk details">
          <p>Community desk</p>
          <p>Luanda, Angola</p>
          <p>{newsItems.length} selected reports</p>
        </div>
      </section>

      {featuredStory ? (
        <section
          className="subpage-section news-feature"
          id={featuredStory.slug}
          aria-labelledby="featured-news-title"
        >
          <figure className="news-feature__image">
            <Image
              src={featuredStory.image}
              alt=""
              width={1500}
              height={1000}
              sizes="(max-width: 760px) 100vw, 58vw"
              priority
            />
          </figure>
          <article className="news-feature__body">
            <div className="news-meta">
              <span>{featuredStory.category}</span>
              <time>{featuredStory.date}</time>
            </div>
            <h2 id="featured-news-title">{featuredStory.title}</h2>
            <p>{featuredStory.excerpt}</p>
            <Link className="news-read-link" href={`/news/${featuredStory.slug}`}>
              Read the full update
            </Link>
          </article>
        </section>
      ) : null}

      <section
        className="subpage-section news-archive"
        aria-labelledby="news-archive-title"
      >
        <header className="subpage-section__header">
          <p className="subpage-kicker">More from NICAA</p>
          <h2 id="news-archive-title">Community notebook</h2>
        </header>

        <div className="news-grid">
          {moreStories.map((story) => (
            <article className="news-card" id={story.slug} key={story.slug}>
              <figure className="news-card__image">
                <Image
                  src={story.image}
                  alt=""
                  width={900}
                  height={680}
                  sizes="(max-width: 620px) 92vw, (max-width: 1020px) 44vw, 30vw"
                />
              </figure>
              <div className="news-card__body">
                <div className="news-meta">
                  <span>{story.category}</span>
                  <time>{story.date}</time>
                </div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <Link className="news-read-link news-read-link--dark" href={`/news/${story.slug}`}>
                  Read the full update
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="subpage-callout news-callout" aria-label="Submit a community update">
        <div>
          <p className="subpage-kicker">Have a verified community update?</p>
          <h2>Help the news desk tell the full story.</h2>
          <p>
            Send the date, location, a short description, and original
            photographs to the NICAA office for review.
          </p>
        </div>
        <Link className="subpage-button subpage-button--light" href="/contact">
          Submit an update
        </Link>
      </aside>
    </main>
  );
}
