"use client";
import React from "react";
import { useState } from "react";

const PersonalLogo = () => {
  const [linkContent, setLinkContent] = useState("DL");
  return (
    <div className="float-right">
      <div className="max767px:top-[5%] max767px:left-[75%] fixed z-[999]">
        <a href="#">{linkContent}</a>
      </div>
    </div>
  );
};

export default PersonalLogo;
