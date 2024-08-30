import "./cv_globals.css";
import { Metadata, Viewport } from "next";
import { OPENGRAPH, TWITTER } from "../config";

const EXTERNAL_PAGE_TITLE = "Alex Brown's CV";

export const metadata: Metadata = {
  // should be overriden by each page
  title: "CV",
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
  themeColor: "#32CD32",
  colorScheme: "only light",
};

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
