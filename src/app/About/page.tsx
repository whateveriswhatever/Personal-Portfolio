import PersonalLogo from "./{components}/PersonalLogo";

const About: React.FC = () => {
  return (
    <div className="phone:max-w-[86%] tablet:max-w-[21.5em] laptop:max-w-[21.5em] desktop:max-w-[21.5em] tablet:mt-0 tablet:mb-0 tablet:ml-auto tablet:mr-auto desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto laptop:mt-0 laptop:mb-0 laptop:ml-auto laptop:mr-auto">
      <div className="float-right" id="logo">
        <PersonalLogo />
      </div>
    </div>
  );
};

export default About;
