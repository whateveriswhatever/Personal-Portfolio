"use client";
import React from "react";
import { useState } from "react";

type TypeForProofOfWork = {
  href: string;
  headerText: string;
  subDetail: string;
};

type Context = {
  context: string;
};

const ProofOfWork: React.FC<TypeForProofOfWork> = ({
  href,
  headerText,
  subDetail,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <a
        href={href}
        className="no-underline cursor-pointer text-black relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="mt-[8vh] mr-0 mb-[8vh] ml-0 hover:ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] hover:duration-[0.4s] hover:delay-0"
          //   onMouseEnter={() => setIsHovered(true)}
          //   onMouseLeave={() => setIsHovered(false)}
          style={{
            transitionBehavior: isHovered ? "normal" : "",
            transitionDuration: isHovered ? "0.4s" : "",
            transitionTimingFunction: isHovered
              ? "cubic-bezier(0.2, 0.6, 0.2, 1)"
              : "",
            transitionDelay: isHovered ? "0s" : "",
            transitionProperty: isHovered ? "all" : "",
          }}
        >
          <h2 className="text-neutral-50 font-['Semibold'] leading-[120%] text-[2.222rem]">
            {headerText}
          </h2>

          <CustomPTag context={subDetail} />
        </div>
      </a>
    </>
  );
};

export default ProofOfWork;

const CustomPTag: React.FC<Context> = ({ context }) => {
  return (
    <>
      <p
        className="phone:text-[16px] phone:font-['Medium'] tablet:text-[18px] tablet:font-['Medium'] phone:mb-0 tablet:mb-0 mb-0 text-rose-color"
        style={{ color: "rgb(255, 29, 72)" }}
      >
        {context}
      </p>
    </>
  );
};
