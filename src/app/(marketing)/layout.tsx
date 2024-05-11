import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "News App",
  description: "Stay up-to-date with the latest news",
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
