import React from "react";

type ParagraphContext = {
  context: string;
};

const PageContents = () => {
  return (
    <div
      id="max-width-left-70 text-color-white animate delay02"
      className="tablet:max-w-[75%] phone:max-w-full inline"
    >
      <>
        <H5 />
      </>

      <>
        <Paragraph context="lorem isump" />
        <Paragraph context="lorem isump" />
        <Paragraph context="lorem isump" />

        <Paragraph context="lorem isump" />
        <Paragraph context="lorem isump" />
        <Paragraph context="lorem isump" />

        <ResumeLink />
      </>
    </div>
  );
};

export default PageContents;

const H5: React.FC = () => {
  return (
    <>
      <h5
        className="leading-[140%] text-[30px] mt-[12vh] ml-0 mb-[3vh] mr-0 font-medium"
        style={{ fontFamily: "Medium" }}
      >
        Hey, I'm Duy, an honor Informatics and Computer Engineering student at
        Vietnam National University from Vietnam. With only 1 year of
        self-learning and working with my own personal projects, I've delved
        into software development field, especially in Web Development
        technologies for instances: React, Next.js, jQuery, JS/TS, Node.js,
        Express and more. Recently, I'm into OOP techniques, DSA, technology
        patterns as a view to concerete my base knowledge not is only on
        software development but they're also in Computer Science.
      </h5>
    </>
  );
};

const Paragraph: React.FC<ParagraphContext> = ({ context }) => {
  return (
    <>
      <p
        className="leading-[170%] text-[18px] mb-[3vh]"
        style={{ fontFamily: "Regular" }}
      >
        {context}
      </p>
    </>
  );
};

const ResumeLink: React.FC = () => {
  return (
    <>
      <p
        className="leading-[170%] text-[18px] mb-[3vh]"
        style={{ fontFamily: "Regular" }}
      >
        <a className="text-rose-600">View resume</a>
      </p>
    </>
  );
};
