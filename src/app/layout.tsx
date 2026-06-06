import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Aidan Andrew Daniel",
  description: "Cloud Infrastructure Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${garamond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
