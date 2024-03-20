"use client";

import React from "react";
import { useState, useEffect } from "react";

type ContentsParam = {
  prevParams: string;
  nextParams: string;
  prevContent: string;
  nextContent: string;
  customColor: string;
};

const Details = () => {
  return (
    <div
      className="absolute h-full flex items-center"
      style={{
        position: "absolute",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1
        className="font-semibold fixed leading-h1LineHeight tracking-negative2px text-h1FontSize"
        style={{
          fontFamily: "Semibold",
          position: "fixed",
          lineHeight: "110%",
          letterSpacing: "-2px",
          fontSize: "18vmin",
        }}
      >
        <Content
          prevParams=""
          nextParams="/about"
          prevContent="Hey."
          nextContent="About"
          customColor="#fff"
        />

        <Content
          prevParams=""
          nextParams="/work"
          prevContent="I'm"
          nextContent="Work"
          customColor="rgb(255, 29, 72)"
        />

        <Content
          prevParams=""
          nextParams="/contact"
          prevContent="Duy"
          nextContent="Contact"
          customColor="rgb(255, 29, 72)"
        />
      </h1>
    </div>
  );
};

export default Details;

const Content: React.FC<ContentsParam> = ({
  prevParams,
  nextParams,
  prevContent,
  nextContent,
  customColor,
}) => {
  const [modifiedContext, setModifiedContext] = useState(prevContent);
  const [isHovered, setIsHovered] = useState(false);
  const [isReloaded, setIsReloaded] = useState(false);

  useEffect(() => {
    setIsReloaded(true);
  }, []);

  return (
    <div className="relative block overflow-hidden">
      <a
        className="no-underline cursor-pointer text-slate-100"
        href={isHovered ? nextParams : prevParams}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          textDecorationLine: "none",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        {/* {isHovered ? nextContent : prevContent} */}
        <div
          className="text-neutral-50 hover:animate-[slow-move] hover:duration-[0.6s]"
          style={{
            marginLeft: isHovered ? "2.4rem" : "0",
            color: customColor,
            fontSize: "calc(1em + 1vw)",
            fontFamily: "Semibold",
            transform: isReloaded ? "translateY(0%)" : "translate(30vh)",
            animationDelay: isReloaded ? "1.2s" : "0",
            transitionDuration: isHovered ? "0.6s" : "0",
            animation: isHovered ? "slow-move" : "",
            opacity: isReloaded ? "1" : "0",
          }}
        >
          {isHovered ? nextContent : prevContent}
        </div>
      </a>
    </div>
  );
};
