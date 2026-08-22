import type { Metadata } from "next";
import Link from "next/link";
import { HistoryTimeline } from "../_components/HistoryTimeline";

export const metadata: Metadata = {
  title: "History of NICAA",
  description:
    "Read the archival history of the Nigerian Community in Angola, from its organising roots in 1995 to the 2021 transition.",
};

const chapters = [
  {
    year: "1995",
    title: "A community forms around collective protection",
    copy: "The original NICAA history traces the community's organisation to 1995, when members came together after the death of Mr. Linus Nweke. The first meeting in Maianga brought together community conveners including Hon. Basil Ngige, Hon. Chidebe Nze, Mr. Christian Ozumba, Mr. Dampson Nnaji, Mr. I. K. Ntinulu, Mr. Leonard Agbor, and Mr. Simeon Nwalieji. The Nigerian Mission in Luanda recognised the emerging association.",
  },
  {
    year: "1995-2007",
    title: "Early leadership lays the foundation",
    copy: "Hon. Chidebe Nze served as the first interim president, followed by Austin Odigie and Hon. Ifeanyi Nworah. After the 2004 caretaker period led by Mr. John Ogebulue, the community held its first general election. Hon. Basil Ngige became the first elected president in 2007 and established a community secretariat in Luanda.",
  },
  {
    year: "2011",
    title: "Town unions become a stronger organising structure",
    copy: "Under Hon. Benjamin Okeke, the community developed a representative structure through family and town unions. This improved registration, information sharing, and regular representation across a growing Nigerian population in Angola.",
  },
  {
    year: "2015-2019",
    title: "Representation and reconciliation continue",
    copy: "Hon. Sampson Ebigbo continued the community's welfare and engagement work. Following a period of political disagreement, an interim executive committee headed by Hon. Chukwuemeka George Onyemeforo was appointed in 2019 to help restore normalcy and prepare a governance blueprint.",
  },
  {
    year: "2021-2022",
    title: "A renewed mandate and a digital future",
    copy: "The archive records the October 2021 election and inauguration of Hon. Anthony Obinna Ogbuka. The administration focused on reconciling members, working with the Nigerian Mission, strengthening community governance, and advancing plans for a permanent secretariat building.",
  },
] as const;

export default function HistoryPage() {
  return (
    <main id="main-content" className="subpage-shell page-archive page-history">
      <section className="subpage-hero archive-hero" aria-labelledby="history-title">
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Institutional memory</p>
          <h1 id="history-title">History of the Nigerian Community in Angola.</h1>
          <p className="subpage-lede">
            A record of solidarity, representation, and the steady work of
            building a community far from home.
          </p>
        </div>
        <div className="archive-hero__stamp" aria-label="History dates">
          <span>1995</span>
          <i aria-hidden="true">-</i>
          <span>Today</span>
          <p>One continuing story</p>
        </div>
      </section>

      <section className="subpage-section history-prologue" aria-labelledby="prologue-title">
        <p className="subpage-kicker">From the original NICAA record</p>
        <h2 id="prologue-title">A union of Nigerians living, working, and building in Angola.</h2>
        <p>
          NICAA brings together associations of Nigerians domiciled in the
          Republic of Angola. Its long-standing purpose is to unite members,
          promote their welfare, and protect their shared interests while
          contributing positively to Angolan society.
        </p>
        <p className="history-prologue__note">
          This is an edited, readable presentation of the historical account
          published on the former NICAA website. It is an archive, not a source
          for current officeholder or consular information.
        </p>
      </section>

      <HistoryTimeline chapters={chapters} />

      <aside className="subpage-callout" aria-label="Past presidents">
        <div>
          <p className="subpage-kicker">The people behind the chapters</p>
          <h2>Meet the presidents and caretaker leaders in the record.</h2>
        </div>
        <Link className="subpage-button subpage-button--light" href="/past-presidents">
          View past presidents
        </Link>
      </aside>
    </main>
  );
}
