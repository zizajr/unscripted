import type { Metadata } from "next";
import { Playfair_Display, Outfit, Bebas_Neue } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";
import { Analytics } from "@vercel/analytics/react";

/* ── Fonts ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

/* ── Root metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://theunscripted.xyz"),
  title: {
    default: "Unscripted — We Defy Reason. Branding & Communications Agency",
    template: "%s | Unscripted",
  },
  description:
    "Africa's dark horse branding, marketing, and communications agency. We craft narratives, design experiences, and forge brand-changing connections.",
  keywords: [
    "branding agency Africa",
    "marketing agency East Africa",
    "communications agency Middle East",
    "branding Rwanda",
    "marketing Kigali",
    "PR agency Africa",
  ],
  openGraph: {
    siteName: "Unscripted",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unscripted — We Defy Reason.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unscriptedxyz",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }, { lang: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const resolvedLang = lang || "en";
  const dir = resolvedLang === "ar" ? "rtl" : "ltr";
  const dict = await getDictionary(resolvedLang as "en" | "fr" | "ar");
  
  return (
    <html lang={resolvedLang} dir={dir}>
      <body
        className={`${playfair.variable} ${outfit.variable} ${bebasNeue.variable}`}
      >
        <Navigation dict={dict.nav} lang={resolvedLang} />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer dict={dict.footer} lang={resolvedLang} />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unscripted",
              url: "https://theunscripted.xyz",
              logo: "https://theunscripted.xyz/og-image.png",
              description: "Africa's dark horse branding, marketing, and communications agency. We craft narratives, design experiences, and forge brand-changing connections.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kigali",
                addressCountry: "RW"
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "defy@theunscripted.xyz",
                contactType: "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
