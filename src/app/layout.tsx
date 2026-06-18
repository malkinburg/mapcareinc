import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Mapcare Inc — Care Staffing for Foster Care & Vulnerable Populations",
    template: "%s | Mapcare Inc",
  },
  description:
    "Ontario's trusted non-medical care staffing provider. We connect compassionate care professionals with foster care homes, residential programs, and vulnerable populations across Ontario.",
  metadataBase: new URL("https://mapcare.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Mapcare Inc",
    title: "Mapcare Inc — Guiding Care, Connecting People",
    description:
      "Ontario's trusted non-medical care staffing provider serving foster care and vulnerable populations.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
