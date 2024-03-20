import React from "react";

import "../globals.css";

export default function AboutPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full" style={{ overflowX: "hidden" }}>
      {children}
    </div>
  );
}
