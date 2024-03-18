"use client";

import React from "react";
import { useState } from "react";

type ContentsParam = {
  prevParams: string;
  nextParams: string;
  prevContent: string;
  nextContent: string;
  customColor: string;
};

const Details = () => {
  return (
    <div className="absolute h-full flex items-center">
      <h1>
        <Content
          prevParams=""
          nextParams="/about"
          prevContent="Hey."
          nextContent="About"
          customColor=""
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
  return (
    <div className="relative block overflow-hidden">
      <a
        className="no-underline cursor-pointer text-slate-100"
        href={isHovered ? nextParams : prevParams}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* {isHovered ? nextContent : prevContent} */}
        <div
          className="text-neutral-50 custome-animation-for-sections text-8xl transition duration-300 ease-in-out font-semibold"
          style={{ marginLeft: isHovered ? "2.4rem" : "0", color: customColor }}
        >
          {isHovered ? nextContent : prevContent}
        </div>
      </a>
    </div>
  );
};
