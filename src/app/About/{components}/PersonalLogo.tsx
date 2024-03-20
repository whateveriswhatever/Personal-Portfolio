"use client";
import React from "react";
import { useState } from "react";

const PersonalLogo = () => {
  const [linkContent, setLinkContent] = useState("DL");
  return (
    <div className="float-right">
      <div className="">
        <a href="#">{linkContent}</a>
      </div>
    </div>
  );
};

export default PersonalLogo;
