"use client";
import React from "react";
import PersonalLogo from "../about/{components}/PersonalLogo";
import ProofOfWork from "./{components}/ProofOfWork";

export default function Work() {
  return (
    <div className="phone:max-w-[86%] tablet:max-w-[21.5em] laptop:max-w-[21.5em] desktop:max-w-[21.5em] tablet:mt-0 tablet:mb-0 tablet:ml-auto tablet:mr-auto desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto laptop:mt-0 laptop:mb-0 laptop:ml-auto laptop:mr-auto phone:mb-0 phone:mt-0 phone:ml-auto phone:mr-auto">
      <div
        id="logo"
        className="float-right phone:mr-[2rem] tablet:mr-[-2.4rem]"
        style={{
          float: "right",
        }}
      >
        <PersonalLogo />
      </div>

      <div
        id="top-bottom-margin"
        className="mb-[8vh] mt-[35vh] ml-0 mr-0"
        style={{
          animationFillMode: "backwards",
          animationDelay: "0s",
          animationDirection: "normal",
          animationDuration: "0.6s",
          animationIterationCount: "1",
          animationName: "animate",
          animationPlayState: "running",
          animationRangeEnd: "normal",
          animationRangeStart: "normal",
          animationTimeline: "auto",
          animationTimingFunction: "cubic-bezier(0.2, 0.6, 0.2, 1)",
        }}
      >
        <ProofOfWork
          href="/blankpage"
          headerText="Copied Blank Page"
          subDetail="Web Writing App"
        />

        <ProofOfWork
          href="/to-do-list"
          headerText="To-do List"
          subDetail="Work Planing App"
        />
      </div>
    </div>
  );
}
