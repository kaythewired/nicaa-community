import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Nigerian Community in Angola for member guidance, town-union connections, and community enquiries.",
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nigeriancommunityinangola/",
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/NigeriancommunityinAngola/",
  },
  { name: "X / Twitter", href: "https://twitter.com/nica_angola/" },
] as const;

type ContactPageProps = {
  searchParams: Promise<{ union?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const unionParam = Array.isArray(params.union) ? params.union[0] : params.union;
  const selectedUnion = unionParam?.trim().slice(0, 160);

  return (
    <main id="main-content" className="subpage-shell page-contact">
      <section
        className="subpage-hero contact-hero"
        aria-labelledby="contact-title"
      >
        <div className="subpage-hero__copy">
          <p className="subpage-eyebrow">The community office</p>
          <h1 id="contact-title">Tell us what you need. We&apos;ll help find the route.</h1>
          <p className="subpage-lede">
            Reach NICAA for community membership, town-union introductions,
            welfare enquiries, verified notices, and general coordination.
          </p>
        </div>
        <figure className="contact-hero__mark">
          <Image
            src="/media/nicaa-mark.avif"
            alt="Nigerian Community in Angola emblem"
            width={640}
            height={640}
            sizes="(max-width: 760px) 54vw, 24vw"
            priority
          />
        </figure>
      </section>

      <section
        className="subpage-section contact-layout"
        aria-labelledby="contact-form-title"
      >
        <div className="contact-details">
          <div>
            <p className="subpage-kicker">Direct contact</p>
            <h2>Connect with NICAA.</h2>
          </div>
          <address className="contact-details__list">
            <div>
              <p>Telephone</p>
              <a href="tel:+244944322895">+244 944 322 895</a>
            </div>
            <div>
              <p>Email</p>
              <a href="mailto:nigeriancommunityinangola@gmail.com">
                nigeriancommunityinangola@gmail.com
              </a>
            </div>
            <div>
              <p>Community base</p>
              <span>Luanda, Republic of Angola</span>
            </div>
          </address>

          <div className="contact-socials">
            <p>Follow community updates</p>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} rel="noreferrer" target="_blank">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:nigeriancommunityinangola@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="contact-form__heading">
            <p className="subpage-kicker">Send an enquiry</p>
            <h2 id="contact-form-title">How can the community help?</h2>
            <p>
              Completing this form prepares a message in your email
              application. Please do not include passports, identity documents,
              or other sensitive personal information.
            </p>
          </div>

          <div className="contact-form__row">
            <label>
              First name
              <input name="firstName" autoComplete="given-name" required />
            </label>
            <label>
              Last name
              <input name="lastName" autoComplete="family-name" required />
            </label>
          </div>

          <label>
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>

          <label>
            What is your enquiry about?
            <select
              name="subject"
              defaultValue={
                selectedUnion ? "Town union connection" : "General community enquiry"
              }
            >
              <option>General community enquiry</option>
              <option>Town union connection</option>
              <option>Member welfare</option>
              <option>Community news submission</option>
              <option>Publication or archive request</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={7}
              defaultValue={
                selectedUnion
                  ? `I would like to connect with ${selectedUnion}.`
                  : undefined
              }
              required
            />
          </label>

          <button className="subpage-button subpage-button--primary" type="submit">
            Prepare email
          </button>
        </form>
      </section>

      <section
        className="subpage-section contact-guidance"
        aria-labelledby="urgent-help-title"
      >
        <div>
          <p className="subpage-kicker">Time-sensitive issue?</p>
          <h2 id="urgent-help-title">Call before sending a long message.</h2>
        </div>
        <p>
          For an urgent community welfare matter, telephone the NICAA office
          directly. For emergencies, contact the appropriate Angolan emergency
          service or Nigerian consular channel.
        </p>
        <a className="subpage-button subpage-button--text" href="tel:+244944322895">
          Call +244 944 322 895
        </a>
      </section>
    </main>
  );
}
