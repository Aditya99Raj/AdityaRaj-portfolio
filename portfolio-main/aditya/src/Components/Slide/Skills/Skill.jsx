import React, { useState} from "react";
// import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./Skill.css";
import { MainHeadingWrapper} from "../../Elements/Elements";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;

  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  // const ResumeHeading = (props) => {
  //   return (
  //     <div className="resume-heading">
  //       <div className="resume-main-heading">
  //         <div className="heading-bullet"></div>
  //         <span>{props.heading ? props.heading : ""}</span>
  //         {props.fromDate && props.toDate ? (
  //           <div className="heading-date">
  //             {props.fromDate + "-" + props.toDate}
  //           </div>
  //         ) : (
  //           <div></div>
  //         )}
  //       </div>
  //       <div className="resume-sub-heading">
  //         <span>{props.subHeading ? props.subHeading : ""}</span>
  //       </div>
  //       <div className="resume-heading-description">
  //         <span>{props.description ? props.description : ""}</span>
  //       </div>
  //     </div>
  //   );
  // };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Front End", logoSrc: "programming-skills.svg" },
    { label: "Back End", logoSrc: "programming-skills.svg" },
    // { label: "Work History", logoSrc: "work-history.svg" },

    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Database", logoSrc: "programming-skills.svg" },
    { label: "Languages", logoSrc: "programming-skills.svg" },
    { label: "Tools & Technology", logoSrc: "programming-skills.svg" },
  ];

  //here we have
  // const programmingSkillsDetails = [
  //   // { skill: "JavaScript", ratingPercentage: 85 },
  //   // { skill: "React JS", ratingPercentage: 85 },
  //   // { skill: "React Native", ratingPercentage: 85 },
  //   { skill: "Express JS", ratingPercentage: 80 },
  //   { skill: "Node JS", ratingPercentage: 70 },
  //   { skill: "Mongo DB", ratingPercentage: 85 },
  //   // { skill: "Core Java", ratingPercentage: 80 },
  //   { skill: "HTML", ratingPercentage: 80 },
  //   { skill: "CSS", ratingPercentage: 80 }
  // ];

  const frontEndSkills = [
    { skill: "HTML", logoURL: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
    { skill: "CSS", logoURL: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
    { skill: "Bootstrap", logoURL: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" },
    { skill: "React JS", logoURL: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
    { skill: "Redux", logoURL: "https://profilinator.rishav.dev/skills-assets/redux-original.svg" },
  ];

  const backEndSkills = [
    { skill: "Node JS", logoURL: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
    { skill: "Express JS", logoURL: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
    // { skill: "Django", logoURL: "https://profilinator.rishav.dev/skills-assets/django-original.svg" },
  ];

  const databaseSkills = [
    { skill: "MongoDB", logoURL: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
    // { skill: "MySQL", logoURL: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
    { skill: "Redis", logoURL: "https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg" },
  ];

  const languageSkills = [
    { skill: "JavaScript", logoURL: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
    // { skill: "Python", logoURL: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
  ];

  const toolsSkills = [
    { skill: "Git", logoURL: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
    { skill: "Postman", logoURL: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { skill: "GitHub", logoURL: "https://img.icons8.com/fluency/96/000000/github.png" },
    // <img src="https://img.icons8.com/fluency/96/000000/github.png"/>
  ];

  //   const projectsDetails = [
  //     {
  //       title: "Personal Portfolio Website",
  //       duration: { fromDate: "2020", toDate: "2021" },
  //       description:
  //         "A Personal Portfolio website to showcase all my details and projects at one place.",
  //       subHeading: "Technologies Used: React JS, Bootsrap",
  //     },
  //     {
  //       title: "Mobile E-shop ",
  //       duration: { fromDate: "2020", toDate: "2021" },
  //       description:
  //         "An ecommerce application designed to sell products online wth payment system integration",
  //       subHeading:
  //         "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  //     },
  //     {
  //       title: "Ecommerce Website ",
  //       duration: { fromDate: "2020", toDate: "2021" },
  //       description:
  //         "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
  //       subHeading:
  //         "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
  //     },
  //   ];

  const resumeDetails = [

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills1"
    >
      {frontEndSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          {/* <div className="heading-bullet"></div> */}
          <span>{skill.skill}</span>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
          {/* <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" />  */}
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills2"
    >
      {backEndSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          {/* <div className="heading-bullet"></div> */}
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills3"
    >
      {databaseSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          {/* <div className="heading-bullet"></div> */}
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills4"
    >
      {languageSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          {/* <div className="heading-bullet"></div> */}
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
          {/* <div className="skill-percentage">
      <div
        style={{ width: skill.ratingPercentage + "%" }}
        className="active-percentage-bar"
      ></div>
    </div> */}
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills4"
    >
      {toolsSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          {/* <div className="heading-bullet"></div> */}
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
          {/* <div className="skill-percentage">
<div
  style={{ width: skill.ratingPercentage + "%" }}
  className="active-percentage-bar"
></div>
</div> */}
        </div>
      ))}
    </div>,


    // <div className="resume-screen-container" key="education">
    //   <ResumeHeading
    //     heading={"Masai School, Bangalore"}
    //     subHeading={"Full Stack Web Development (MERN Stacks)"}
    //     fromDate={"2021"}
    //     toDate={"2022"}
    //   />

    //   <ResumeHeading
    //     heading={"Terna Engineering College, Navi Mumbai"}
    //     subHeading={"Bachelor of Electronics and Telecommunication Engineering"}
    //     fromDate={"2018"}
    //     toDate={"2021"}
    //   />
    //   <ResumeHeading
    //     heading={"High School "}
    //     subHeading={"Command Secondary School Mbiri"}
    //     fromDate={"2007"}
    //     toDate={"2012"}
    //   />
    // </div>,

    /* WORK EXPERIENCE */
    // <div className="resume-screen-container" key="work-experience">
    //   <div className="experience-container">
    //     <ResumeHeading
    //       heading={"Ehizeex Technoloy"}
    //       subHeading={"FULL STACK DEVELOPER INTERN"}
    //       fromDate={"2021"}
    //       toDate={"Present"}
    //     />
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         Currently working as MERN stack web and mobile developer and also an
    //         online instructor on udemy.
    //       </span>
    //     </div>
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         - Developed an ecommerce website for client with the dashboard for
    //         managing the products, managing reviews, users, payment etc. .
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - Integrated the web app with backend services to create new user
    //         onboarding application with dynamic form content.{" "}
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - I stretch my mental capacity to develope UI as per the given
    //         designs.
    //       </span>
    //       <br />
    //     </div>
    //   </div>
    // </div>,


    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    // <div className="resume-screen-container" key="interests">
    //   <ResumeHeading
    //     heading="Stock Trading and Investment"
    //     description="Apart from being a tech enthusiast and a code writer, I also love to trade in a stock market. I analyze companies and try to find out some good companies for long term investments."
    //   />
    //   <ResumeHeading
    //     heading="Music"
    //     description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
    //   />
    //   <ResumeHeading
    //     heading="Competitive Gaming"
    //     description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
    //   />
    // </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`./img/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

//   useEffect(() => {
//     return () => {
//       /* UNSUBSCRIBE THE SUBSCRIPTIONS */
//       fadeInSubscription.unsubscribe();
//     };
//   }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
        {/* <ScreenHeading title={"Skills"} subHeading={"Overview of My Skill"} /> */}
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;


// src={require(`../../assets/Resume/${bullet.logoSrc}`).default}