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
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Header pageLinks={PAGE_LINKS} fragLinks={FRAG_LINKS} />
      <main className="p-4 space-y-8 flex-grow max-w-4xl py-8 lg:py-24 mx-auto text-lg">
        {children}
      </main>
    </div>
  );
}
