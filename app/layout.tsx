import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { ScrollMotion } from "./_components/ScrollMotion";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin),
    title: {
      default: "Nigerian Community in Angola | Peace, Unity, Progress",
      template: "%s | Nigerian Community in Angola",
    },
    description: "The official home of the Nigerian Community in Angola—connecting members, town unions, leaders, news and community resources.",
    applicationName: "NICAA",
    keywords: ["Nigerian Community in Angola", "NICAA", "Nigerians in Angola", "Luanda community", "town unions Angola"],
    icons: { icon: "/media/nicaa-logo.png", apple: "/media/nicaa-logo.png" },
    openGraph: {
      title: "One community. Two nations. Shared progress.",
      description: "Peace, unity and progress for Nigerians living in Angola.",
      url: origin,
      siteName: "Nigerian Community in Angola",
      locale: "en_NG",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Nigerian Community in Angola" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nigerian Community in Angola",
      description: "One community. Two nations. Shared progress.",
      images: [`${origin}/og.png`],
    },
  };
}

export const viewport: Viewport = { themeColor: "#008751", colorScheme: "light" };

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nigerian Community in Angola",
  alternateName: "NICAA",
  email: "nigeriancommunityinangola@gmail.com",
  telephone: "+244944322895",
  areaServed: { "@type": "Country", name: "Angola" },
  sameAs: [
    "https://www.instagram.com/nigeriancommunityinangola/",
    "https://web.facebook.com/NigeriancommunityinAngola/",
    "https://twitter.com/nica_angola/",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <script type="application/ld+json">{JSON.stringify(communitySchema)}</script>
        <ScrollMotion />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
