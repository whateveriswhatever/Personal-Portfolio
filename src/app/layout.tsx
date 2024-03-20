import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import config from "../../tailwind.config";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duy La",
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
          className="h-screen max-h-screen website-background-black text-white p-0 m-0"
          style={{ backgroundColor: "#0c0c0c", fontSize: "calc(1em + 1vw)" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
