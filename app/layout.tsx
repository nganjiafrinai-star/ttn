import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TTN Mission | Empowering Children to Discover Their Purpose",
  description: "Support TTN Mission's goal to empower youth through faith-based discipleship, education, and talent development. Join us in building a future of hope today.",
  keywords: ["Empowering children", "Child sponsorship", "Faith-based charity", "Community discipleship", "Child discovery", "Hope for children"],
  openGraph: {
    title: "TTN Mission | Empowering Children to Discover Their Purpose",
    description: "Raising a generation of purpose-driven young people through intentional discipleship and holistic education.",
    url: "https://ttn-mission.org",
    siteName: "TTN Mission",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TTN Mission | Empowering Children to Discover Their Purpose",
    description: "Support TTN Mission's goal to empower youth through faith-based discipleship, education, and talent development.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "TTN Mission",
  "url": "https://ttn-mission.org",
  "logo": "https://ttn-mission.org/logo.png",
  "description": "A community-based organization committed to raising a generation of purpose-driven young people through discipleship and education.",
  "sameAs": [
    "https://facebook.com/ttnmission",
    "https://instagram.com/ttnmission"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
