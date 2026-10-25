import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.pablofernandezchacon.com"),
  title: "Pablo Fernández Chacón · Sales & Marketing",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "UKJH8EIlhdr7vjmimY89tewVUGUQFBfuk7Q2D8ufWWI" },
  description:
    "Pablo Fernández Chacón, Sales Team Lead at ICON Music Business School and marketing student in Seville, now in Rotterdam. A chat-style page built for my Google application: ask me anything.",
  openGraph: {
    title: "Pablo Fernández Chacón · Sales & Marketing",
    url: "/",
    siteName: "Pablo Fernández Chacón",
    description: "Pablo Fernández Chacón, Sales Team Lead at ICON Music Business School and marketing student in Seville, now in Rotterdam. A chat-style page built for my Google application: ask me anything.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Fernández Chacón · Sales & Marketing",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/pablo-favicon.png",
    apple: "/pablo-favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pablo Fernández Chacón",
              url: "https://www.pablofernandezchacon.com",
              image: "https://www.pablofernandezchacon.com/media/pablo-avatar.webp",
              jobTitle: "Sales Team Lead",
              worksFor: { "@type": "Organization", name: "ICON Music Business School", url: "https://iconmbs.com" },
              alumniOf: [{ "@type": "CollegeOrUniversity", name: "Universidad de Sevilla" }],
              email: "mailto:fernandezchaconpablo@gmail.com",
              sameAs: ["https://www.linkedin.com/in/pablo-fern%C3%A1ndez-chac%C3%B3n-aa6792259/"],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("pablo-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
