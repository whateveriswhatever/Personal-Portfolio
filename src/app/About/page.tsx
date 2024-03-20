import PersonalLogo from "./{components}/PersonalLogo";

const About: React.FC = () => {
  return (
    <div>
      <div className="w-full max767px:w-[86%] max1280px:w-[21.5em]" id="logo">
        <PersonalLogo />
      </div>
    </div>
  );
};

export default About;
