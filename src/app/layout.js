import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.pablofernandezchacon.com"),
  title: "Pablo Fernández Chacón",
  description:
    "A chat with me, built for my Google application. Ask me anything.",
  openGraph: {
    title: "Pablo Fernández Chacón",
    description: "A chat with me, built for my Google application. Ask me anything.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
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
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("pablo-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
