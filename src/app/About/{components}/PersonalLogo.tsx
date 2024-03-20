"use client";
import React from "react";
import { useState } from "react";

const PersonalLogo = () => {
  const [linkContent, setLinkContent] = useState("DL");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="z-[999] fixed top-[10%]">
      <a
        href="/work"
        className="text-neutral-50 cursor-pointer no-underline hover:animate-[slow-move] hover:duration-[0.4s]"
        onMouseEnter={() => {
          setLinkContent("DL's works");
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setLinkContent("DL");
          setIsHovered(false);
        }}
        // style={{ marginLeft: isHovered ? "-1.2rem" : "0" }}
        style={{
          opacity: isHovered ? "999" : "1",
          transform: isHovered ? "translateY(10vh)" : "translateY(0vh)",
          marginLeft: isHovered ? "-1.2rem" : "0",
        }}
      >
        {linkContent}
      </a>
    </div>
  );
};

export default PersonalLogo;
