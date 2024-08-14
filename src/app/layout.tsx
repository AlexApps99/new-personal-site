import type { Metadata, Viewport } from "next";
import "./globals.css";
import styles from "./home.module.css";
import { BASE_URL, EXTERNAL_PAGE_DESCRIPTION, KEYWORDS, NAME, OPENGRAPH, PAGE_TITLE, TEXT_FONT, TWITTER } from "./config";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  // should be overriden by each page
  title: PAGE_TITLE,
  description: EXTERNAL_PAGE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: NAME }],
  metadataBase: new URL(BASE_URL),
  openGraph: OPENGRAPH,
  twitter: TWITTER,
  alternates: {
    canonical: "./",
    types: {
      // TODO RSS
      //'application/rss+xml': '/atom.xml',
      //'application/atom+xml': '/atom.xml',
    }
  }
};

export const viewport: Viewport = {
  themeColor: [
    {
      color: '#3676C9',
      media: '(prefers-color-scheme: light)'
    },
    {
      color: '#1F2937',
      media: '(prefers-color-scheme: dark)'
    }
  ],
  colorScheme: 'dark'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`scroll-smooth ${TEXT_FONT.className} ${styles.noiseBackground}`}>
      <body>{children}</body>
    </html>
  );
}
