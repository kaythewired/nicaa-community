import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ambassador Archive",
  description:
    "An archival profile of Professor Mrs. Monique Ekpong from the former NICAA website.",
};

export default function AmbassadorPage() {
  return (
    <main id="main-content" className="subpage-shell page-archive page-ambassador">
      <section className="subpage-hero ambassador-hero" aria-labelledby="ambassador-title">
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">Diplomatic relations archive</p>
          <h1 id="ambassador-title">An archived ambassador profile.</h1>
          <p className="subpage-lede">
            This page preserves a profile that appeared on the former NICAA
            website, recognising an important chapter in Nigeria-Angola
            community relations.
          </p>
        </div>
        <figure className="subpage-hero__media ambassador-hero__portrait">
          <Image
            src="/media/ambassador-archive.avif"
            unoptimized
            alt="Archival portrait of Professor Mrs. Monique Ekpong"
            width={900}
            height={1100}
            sizes="(max-width: 760px) 100vw, 42vw"
            priority
          />
          <figcaption>NICAA diplomatic relations archive</figcaption>
        </figure>
      </section>

      <section className="subpage-section ambassador-notice" aria-labelledby="archive-notice-title">
        <p className="subpage-kicker">Please note</p>
        <h2 id="archive-notice-title">This is a historical record, not a current appointment directory.</h2>
        <p>
          Diplomatic appointments change. For current Nigerian Mission or
          consular information, please contact the appropriate official
          government channel or ask NICAA to point you in the right direction.
        </p>
      </section>

      <section className="subpage-section ambassador-profile" aria-labelledby="profile-title">
        <div>
          <p className="subpage-kicker">Profile published in the former site</p>
          <h2 id="profile-title">Professor Mrs. Monique Ekpong</h2>
          <p className="ambassador-profile__role">Ambassador of the Federal Republic of Nigeria to Angola, as recorded in the archive</p>
        </div>
        <div className="ambassador-profile__body">
          <p>
            Professor Mrs. Monique Ekpong is an academic and public servant
            from Idum, Mbube in Ogoja Local Government Area of Cross River
            State. The former NICAA website described her as a Professor of
            English with public-service experience beginning at the grassroots.
          </p>
          <p>
            The profile records that she served as the first female
            commissioner in the Cross River State Teaching Service Commission,
            later served on the Ogoja Local Government Council Caretaker
            Committee, and held senior academic posts including Dean of
            Communication Arts at Cross River University of Technology.
          </p>
          <p>
            It also notes her work with the Cross River Think Tank and Veritas
            University, Abuja, before her appointment as Nigerian Ambassador
            to Angola. The account is preserved here as it appeared in NICAA&apos;s
            historical materials.
          </p>
        </div>
      </section>

      <aside className="subpage-callout" aria-label="Contact NICAA for guidance">
        <div>
          <p className="subpage-kicker">Need current official guidance?</p>
          <h2>Start with a verified contact point.</h2>
        </div>
        <Link className="subpage-button subpage-button--light" href="/contact">
          Contact NICAA
        </Link>
      </aside>
    </main>
  );
}
