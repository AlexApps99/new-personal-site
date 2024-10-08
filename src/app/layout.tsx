import type { Metadata, Viewport } from "next";
import "./globals.css";
import styles from "./home.module.css";
import {
  BASE_URL,
  EXTERNAL_PAGE_DESCRIPTION,
  GOOGLE_ANALYTICS_ID,
  HEADING_FONT,
  KEYWORDS,
  NAME,
  OPENGRAPH,
  PAGE_TITLE,
  TEXT_FONT,
  TWITTER,
} from "./config";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  // should be overriden by each page
  title: {
    template: `%s - ${PAGE_TITLE}`,
    default: PAGE_TITLE,
  },
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
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      color: "#3676C9",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#1F2937",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`overflow-x-clip !scroll-smooth ${TEXT_FONT.variable} ${HEADING_FONT.variable} ${styles.noiseBackground}`}
    >
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; object-src 'none'; child-src 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.google-analytics.com https://*.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; base-uri 'self'; form-action 'none';"
        />
      </head>
      <body>{children}</body>
      {GOOGLE_ANALYTICS_ID ? (
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      ) : undefined}
    </html>
  );
}
