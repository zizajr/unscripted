import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk, Bebas_Neue } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";

/* ── Fonts ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
  const dir = lang === "ar" ? "rtl" : "ltr";
  const dict = await getDictionary(lang as "en" | "fr" | "ar");
  
  return (
    <html lang={lang} dir={dir}>
      <body
        className={`${playfair.variable} ${spaceGrotesk.variable} ${bebasNeue.variable}`}
      >
        <Navigation dict={dict.nav} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
