import type { Metadata } from "next";
import { OPENGRAPH, TWITTER } from "../../config";
import Header, { PAGE_LINKS } from "../Header";
import { FRAG_LINKS } from "./post-gen";

const EXTERNAL_PAGE_TITLE = "Alex Brown's Blog";

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    title: EXTERNAL_PAGE_TITLE,
    ...OPENGRAPH,
  },
  twitter: {
    title: EXTERNAL_PAGE_TITLE,
    ...TWITTER,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Header pageLinks={PAGE_LINKS} fragLinks={FRAG_LINKS} />
      <main className="mx-auto max-w-4xl flex-grow space-y-8 p-4 py-8 text-lg lg:py-24">
        {children}
      </main>
    </div>
  );
}
