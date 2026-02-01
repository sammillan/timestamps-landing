import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time:Stamps - Never Lose a YouTube Moment Again",
  description:
    "Capture timestamps from any YouTube video in one click. Organize, search, and share your video library instantly. Join the waitlist for early access.",
  keywords: [
    "YouTube timestamps",
    "video bookmarks",
    "YouTube notes",
    "Chrome extension",
    "video organization",
    "timestamp tool",
  ],
  authors: [{ name: "Time:Stamps" }],
  openGraph: {
    title: "Time:Stamps - Never Lose a YouTube Moment Again",
    description:
      "Capture timestamps from any YouTube video in one click. Organize, search, and share your video library instantly.",
    type: "website",
    url: "https://time-stamps.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time:Stamps - Never Lose a YouTube Moment Again",
    description:
      "Capture timestamps from any YouTube video in one click. Organize, search, and share your video library instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
