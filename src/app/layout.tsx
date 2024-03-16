import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import config from "../../tailwind.config";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Conducted by Duy La",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="h-screen max-h-screen website-background-black"
          style={{ backgroundColor: "#0c0c0c" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
