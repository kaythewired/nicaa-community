import Image from "next/image";

const navigation = [
  ["Our story", "/about"],
  ["Leadership", "/leadership"],
  ["Town unions", "/unions"],
  ["News", "/news"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div className="footer-statement">
          <p className="section-kicker kicker-light">Nigerians in Angola</p>
          <h2>Together, we make<br />a stronger <em>home.</em></h2>
          <a className="button button-light" href="mailto:nigeriancommunityinangola@gmail.com">
            Join the conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="footer-navigation" aria-label="Footer navigation">
          <p>Explore</p>
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="footer-contact">
          <p>Connect</p>
          <a href="tel:+244944322895">+244 944 322 895</a>
          <a href="mailto:nigeriancommunityinangola@gmail.com">nigeriancommunityinangola@gmail.com</a>
          <div className="footer-socials">
            <a href="https://www.instagram.com/nigeriancommunityinangola/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://web.facebook.com/NigeriancommunityinAngola/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com/nica_angola/" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <div className="footer-brand">
          <Image
            src="/media/nicaa-logo.png"
            alt=""
            width={72}
            height={66}
            unoptimized
          />
          <span>Nigerian Community<br />in Angola</span>
        </div>
        <p>Peace · Unity · Progress</p>
        <p>© {new Date().getFullYear()} NICAA</p>
      </div>
    </footer>
  );
}
