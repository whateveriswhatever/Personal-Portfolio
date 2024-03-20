import React, { Children } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import config from "../../../tailwind.config";

config.autoAddCss = false;

export default function AboutPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // return <div className="w-full overflow-hidden">{children}</div>;
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full overflow-hidden bg-[website-background-black]"></div>
      </body>
    </html>
  );
}

// export default AboutPageLayout;
