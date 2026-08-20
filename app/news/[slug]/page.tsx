import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "../../_data/community";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const articleCopy: Record<string, readonly string[]> = {
  "laying-of-nicaa-building-foundation": [
    "On 23 March 2024, NICAA members and leaders gathered for the laying of the community building foundation. The occasion marked a practical step toward a permanent place for meetings, member support, and collective activity.",
    "The project reflects a long-term commitment to give the Nigerian Community in Angola a visible and durable home. Further project information should be confirmed through the community office.",
  ],
  "nica-welcomes-senate-president-godswill-akpabio": [
    "NICAA recorded the visit of the Nigerian delegation led by Senate President Godswill Akpabio as a moment of connection between the community in Angola and national representatives from Nigeria.",
    "The community continues to value respectful engagement with official visitors and institutions that support the Nigeria-Angola relationship.",
  ],
  "kilamba-kiaxi-municipal-command": [
    "Community representatives met the Kilamba Kiaxi Municipal Command as part of NICAA's civic-engagement work. The meeting focused on cooperation, understanding, and safer community relations.",
    "This archive entry records the engagement as published by NICAA. For current local guidance, please use verified official channels.",
  ],
  "community-dialogue-with-local-administrators": [
    "NICAA documented a dialogue with local administrators around shared civic priorities. These conversations help the community maintain constructive links with the institutions and people of Angola.",
    "A healthy community is strengthened when accurate information, respectful communication, and practical cooperation travel in both directions.",
  ],
  "nigerian-naval-delegation-in-luanda": [
    "This archival entry remembers a community reception for a Nigerian naval delegation in Luanda. It reflects the ties of service, friendship, and national connection that link Nigerians living abroad with home.",
    "The item is preserved as a community record and should not be read as a current operational notice.",
  ],
  "english-anglican-community-confirmed-as-parish": [
    "NICAA recorded the confirmation of the English Anglican Community in Luanda as St. Bartholomew Anglican Church, a significant moment for members of that faith community.",
    "The entry is retained as part of the wider record of religious and cultural life within the Nigerian community in Angola.",
  ],
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((story) => story.slug === slug);
  return item
    ? { title: item.title, description: item.excerpt }
    : { title: "News update" };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const story = newsItems.find((item) => item.slug === slug);

  if (!story) notFound();

  const copy = articleCopy[story.slug] ?? [story.excerpt];

  return (
    <main id="main-content" className="subpage-shell page-news-article">
      <article>
        <section className="news-article-hero" aria-labelledby="article-title">
          <div className="news-article-hero__copy">
            <Link className="news-article-back" href="/news">Back to all news</Link>
            <div className="news-meta">
              <span>{story.category}</span>
              <time>{story.date}</time>
            </div>
            <h1 id="article-title">{story.title}</h1>
            <p>{story.excerpt}</p>
          </div>
          <figure>
            <Image
              src={story.image}
              alt=""
              width={1400}
              height={1050}
              sizes="(max-width: 760px) 100vw, 52vw"
              priority
            />
          </figure>
        </section>

        <section className="news-article-body" aria-label="Article content">
          <p className="subpage-kicker">Community archive</p>
          {copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <aside>
            <p>Archive note</p>
            <span>
              NICAA preserves these selected updates as a record of community
              activity. Contact the community office for verified, current information.
            </span>
          </aside>
        </section>
      </article>
    </main>
  );
}
