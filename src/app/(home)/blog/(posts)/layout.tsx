import type { Metadata } from "next";
import { OPENGRAPH, TWITTER } from "../../../config";

const EXTERNAL_PAGE_TITLE = "Alex Brown's Blog";

export const metadata: Metadata = {
  // should be overriden by each page
  title: "Blog",
  openGraph: {
    title: EXTERNAL_PAGE_TITLE,
    ...OPENGRAPH,
  },
  twitter: {
    // should be overriden by each page
    title: EXTERNAL_PAGE_TITLE,
    ...TWITTER,
  },
};

export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:!font-bold prose-headings:[text-shadow:0_0_4px_rgba(255,255,255,0.5)]">
      {children}
    </article>
  );
}
