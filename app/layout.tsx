import ClientLayout from "@/components/ClientLayout";
import type { Metadata, Viewport } from "next";

const siteUrl = "https://nickdstudio.online";
const phoneRaw = "+918209814681";
const phoneDisplay = "+91 8209814681";
const contactEmail = "contact@nickdstudio.online";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nick D Studio - Digital Marketing & Web Development Agency",
    template: "%s | Nick D Studio - Digital Marketing & Web Development Agency",
  },
  description:
    "Grow your business with Nick D Studio’s expert digital marketing, SEO, and web development services for maximum online impact.",
  keywords: [
    "digital marketing company",
    "digital marketing agency",
    "Best digital marketing company",
    "Top digital marketing agency",
    "best digital marketing agency",
    "creative agency",
    "web development",
    "site template",
    "seo",
    "responsive",
    "minimal",
    "saas",
    "HTML Template",
    "startup",
    "marketing",
    "digital marketing agency",
    "web development services",
    "SEO services",
    "Nick D Studio",
    "NDS",
    "online marketing solutions",
    "business growth strategies",
    "professional website development",
    "local seo services",
    "ecommerce marketing",
    "ecommerce seo services",
    phoneDisplay,
    contactEmail,
  ],
  authors: [{ name: "Nick", url: siteUrl }],
  creator: "Nick D Studio",
  publisher: "Nick D Studio",
  formatDetection: { email: true, address: false, telephone: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Nick D Studio - Expert Digital Marketing & Web Development",
    description:
      "Boost your online presence with Nick D Studio’s tailored digital marketing, SEO, and web development services. Contact: +91 8209814681 | contact@nickdstudio.online",
    siteName: "Nick D Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nick D Studio Digital Marketing and Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick D Studio - Digital Marketing & Web Development",
    description:
      "Transform your business with Nick D Studio’s expert digital marketing and web development solutions. Contact: +91 8209814681 | contact@nickdstudio.online",
    images: ["/og-image.jpg"],
    creator: "@nickdstudio",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=LzCGLduViVnltu982UyxEqqTNF03EAh45Thzxsmbrhw",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: { bing: "your-bing-verification-code" },
  },
  category: "Business",
  alternates: {
    canonical: "/", // homepage canonical only
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "schema.org": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nick D Studio",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: contactEmail,
      telephone: phoneRaw,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: phoneRaw,
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
          email: contactEmail,
        },
      ],
      sameAs: [
        "https://x.com/nickdstudio",
        "https://www.linkedin.com/in/nickdstudio",
        "https://www.facebook.com/people/nickdstudio/61579142354563",
        "https://www.instagram.com/nds_digital",
        "https://www.youtube.com/@nickdstudio",
      ],
      hasPart: [
        { "@type": "WebPage", url: `${siteUrl}/contact`, name: "Contact" },
        { "@type": "WebPage", url: `${siteUrl}/services`, name: "Services" },
        { "@type": "WebPage", url: `${siteUrl}/projects`, name: "Projects" },
        { "@type": "WebPage", url: `${siteUrl}/terms-conditions`, name: "Terms & Conditions" },
        { "@type": "WebPage", url: `${siteUrl}/privacy-policy`, name: "Privacy Policy" },
        { "@type": "WebPage", url: `${siteUrl}/coming-soon`, name: "Coming Soon" },
        { "@type": "WebPage", url: `${siteUrl}/sitemap-policy`, name: "Sitemap Policy" },
      ],
    }),
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
