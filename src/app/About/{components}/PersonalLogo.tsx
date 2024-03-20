"use client";
import React from "react";
import { useState, useEffect } from "react";

const PersonalLogo = () => {
  const [linkContent, setLinkContent] = useState("DL");
  const [isHovered, setIsHovered] = useState(false);
  const [isReloaded, setIsReloaded] = useState(false);

  useEffect(() => {
    setIsReloaded(true);
  }, []);

  return (
    <div className="z-[999] fixed top-[10%]">
      <a
        href="/work"
        className={`text-neutral-50 cursor-pointer no-underline hover:animate-[slow-move] hover:duration-[0.4s] ${
          isReloaded ? "animate-come-up" : ""
        } ${isReloaded ? "ease-backtrack" : ""}`}
        // className="text-neutral-50 hover:animate-slow-move hover:duration-[0.4s]"
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
          marginLeft: isHovered ? "1.5rem" : "0",
          marginTop: isReloaded ? "-1.2rem" : "1.2rem",
        }}
      >
        <div
          className="phone:mr-4 text-[1.4rem] font-semibold"
          style={{
            opacity: isHovered ? "999" : "1",
            marginLeft: isHovered ? "1.5rem" : "0",
            marginTop: isReloaded ? "-1.2rem" : "1.2rem",
          }}
        >
          {linkContent}
        </div>
      </a>
    </div>
  );
};

export default PersonalLogo;
