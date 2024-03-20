"use client";

import React from "react";
import { useState, useEffect } from "react";

const HeaderDetail = () => {
  const [isVisibile, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <div id="hide-text-block" className="relative block overflow-hidden">
      <h2
        className={`text-neutral-50 ${isVisibile ? "animate-come-up" : ""} ${
          isVisibile ? "ease-backtrack" : ""
        } text-[2.222em]`}
        style={{ fontFamily: "Semibold" }}
      >
        About
      </h2>
    </div>
  );
};

export default HeaderDetail;
