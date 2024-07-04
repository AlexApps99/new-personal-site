import type { Metadata } from "next";
import "./globals.css";
import { TEXT_FONT } from "./config";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: "Alex Brown",
  description: "Alex Brown's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={TEXT_FONT.className}>{children}</body>
    </html>
  );
}
