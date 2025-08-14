
import ClientLayout from "@/components/ClientLayout";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nickdstudio.online"),
  title: {
    // absolute: "Nick D Studio - Digital Marketing & Web Development Agency",
    default: "Nick D Studio - Digital Marketing & Web Development Agency",
    template: "%s | Nick D Studio",
  
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
    "ecommerce seo services"
  ],
  authors: [{ name: "Nick", url: "https://nickdstudio.online" }],
  creator: "Nick D Studio",
  publisher: "Nick D Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nickdstudio.online",
    title: "Nick D Studio - Expert Digital Marketing & Web Development",
    description:
      "Boost your online presence with Nick D Studio’s tailored digital marketing, SEO, and web development services.",
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
      "Transform your business with Nick D Studio’s expert digital marketing and web development solutions.",
    images: ["/og-image.jpg"],
    creator: "@nickdstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  category: "Business",
  alternates: {
    canonical: "https://nickdstudio.online",
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
      url: "https://nickdstudio.online",
      logo: "https://nickdstudio.online/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "Customer Service",
        contactOption: "TollFree",
        areaServed: "US",
        availableLanguage: "English",
      },
      sameAs: [
        "https://twitter.com/nickdstudio",
        "https://www.linkedin.com/company/nickdstudio",
        "https://www.facebook.com/nickdstudio",
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
      <body
      cz-shortcut-listen="true">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}


