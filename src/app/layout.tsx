import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Noto_Serif_TC } from "next/font/google";
import { ScrollRouteNavigator } from "@/components/ScrollRouteNavigator";
import "./globals.css";

const sans = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const serif = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serifTc = Noto_Serif_TC({
  variable: "--font-serif-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio Prototype",
  description: "A quiet Japanese editorial portfolio visual prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${serifTc.variable} antialiased`}
    >
      <body>
        <ScrollRouteNavigator />
        {children}
      </body>
    </html>
  );
}
