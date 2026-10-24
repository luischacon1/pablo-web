import "./globals.css";

export const metadata = {
  title: "Pablo Fernández Chacón",
  description:
    "Esta web es un chat conmigo. Pregúntame lo que quieras y te cuento.",
  openGraph: {
    title: "Pablo Fernández Chacón",
    description: "Esta web es un chat conmigo. Pregúntame lo que quieras y te cuento.",
    images: [{ url: "/media/pablo-avatar.webp", width: 1200, height: 1200 }],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="es" suppressHydrationWarning>
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
