import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Mohamad Qanass | AI Builder & Web Developer",
  description: "Personal portfolio of Mohamad Qanass - AI Builder, Web Developer, and Entrepreneur specializing in AI automation solutions for the MENA market.",
  keywords: ["AI Builder", "Web Developer", "Frontend", "Portfolio", "MENA", "Automation"],
  authors: [{ name: "Mohamad Qanass" }],
  openGraph: {
    title: "Mohamad Qanass | AI Builder & Web Developer",
    description: "Building AI-powered solutions for the MENA market",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
