import "./cv_globals.css";
import { Metadata, Viewport } from "next";
import { OPENGRAPH, TWITTER } from "../config";

const PAGE_TITLE = "Alex Brown - CV";
const EXTERNAL_PAGE_TITLE = "Alex Brown - CV";

export const metadata: Metadata = {
  // should be overriden by each page
  title: PAGE_TITLE,
  openGraph: {
    title: EXTERNAL_PAGE_TITLE,
    ...OPENGRAPH,
  },
  twitter: {
    // should be overriden by each page
    title: EXTERNAL_PAGE_TITLE,
    ...TWITTER,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      color: "#32CD32",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#228B22",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  colorScheme: "dark",
};

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
