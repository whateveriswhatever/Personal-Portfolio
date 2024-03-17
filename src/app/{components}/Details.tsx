"use client";

import React from "react";
import { useState } from "react";

type ContentsParam = {
  prevParams: string;
  nextParams: string;
  prevContent: string;
  nextContent: string;
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
        />

        <Content
          prevParams=""
          nextParams="/work"
          prevContent="I'm"
          nextContent="Work"
        />

        <Content
          prevParams=""
          nextParams="/contact"
          prevContent="Duy"
          nextContent="Contact"
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
        <div className="text-neutral-50">
          {isHovered ? nextContent : prevContent}
        </div>
      </a>
    </div>
  );
};
