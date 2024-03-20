import PersonalLogo from "./{components}/PersonalLogo";
import HeaderDetail from "./{components}/HeaderDetail";
import PageContents from "./{components}/PageContents";

const About: React.FC = () => {
  return (
    <div className="phone:max-w-[86%] tablet:max-w-[21.5em] laptop:max-w-[21.5em] desktop:max-w-[21.5em] tablet:mt-0 tablet:mb-0 tablet:ml-auto tablet:mr-auto desktop:mt-0 desktop:mb-0 desktop:ml-auto desktop:mr-auto laptop:mt-0 laptop:mb-0 laptop:ml-auto laptop:mr-auto phone:mb-0 phone:mt-0 phone:ml-auto phone:mr-auto">
      <div className="float-right phone:mr-8" id="logo">
        <PersonalLogo />
      </div>

      <div id="top-bottom-margin" className="mb-[8vh] mt-[35vh] ml-0 mr-0">
        <HeaderDetail />
      </div>

      <>
        <PageContents />
      </>
    </div>
  );
};

export default About;
