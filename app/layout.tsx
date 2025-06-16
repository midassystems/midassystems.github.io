import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./ui/top-nav";

export const metadata: Metadata = {
  title: "Midas Website",
  icons: {
    icon: "/white_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
