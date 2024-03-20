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
        <Paragraph context="As a sophomore student at Vietnam National University, specializing in Informatics and Computer Engineering, I am deeply passionate about computer science, particularly in the field of software development. With a keen interest in web development, I have dedicated myself to mastering various technologies and frameworks over the past year." />
        <Paragraph context="I am a dedicated and driven learner, constantly seeking to expand my knowledge and skill set in web development. Through self-directed study, coursework, and hands-on projects, I have cultivated a strong foundation in front-end and back-end development, as well as proficiency in popular web development tools and technologies." />
        <Paragraph context="Creative Problem Solver: With a natural aptitude for problem-solving and a creative mindset, I thrive in tackling challenges and finding innovative solutions. Whether it's crafting intuitive user interfaces, optimizing website performance, or debugging complex issues, I approach every problem with curiosity and determination." />

        <Paragraph context="Collaborative Team Player: I value collaboration and teamwork, recognizing the importance of effective communication and cooperation in achieving shared goals. I enjoy working collaboratively with colleagues and peers, contributing my skills and insights while also learning from others' perspectives and experiences." />
        <Paragraph context="Continuous Improvement Advocate: Committed to personal and professional growth, I embrace a growth mindset and actively seek feedback to further refine my skills and abilities. I am constantly exploring new technologies, attending workshops and seminars, and engaging in online communities to stay updated on the latest trends and best practices in web development." />
        <Paragraph context="Future-Focused Professional: As I progress in my academic and professional journey, I am excited to continue honing my expertise in web development and pursuing opportunities to make meaningful contributions to the field. With a solid foundation in computer science principles and a passion for creating impactful digital experiences, I am poised to thrive in the ever-evolving landscape of software development." />

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
