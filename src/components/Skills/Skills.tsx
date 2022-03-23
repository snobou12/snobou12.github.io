
import React, { FC } from "react";

import {
  DiReact,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiGit,
  DiPhotoshop,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiRedux,
  SiFigma,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { GrRobot } from "react-icons/gr";
import rightArrow from "../../assets/arrow_right.png";
import { Flip } from "react-awesome-reveal";

import "./Skills.scss";
import Ellipse from "../Ellipse/Ellipse";
import { useTranslation } from "react-i18next";
type SkillsProps={
  ref:any;
}

const Skills: FC<SkillsProps> = React.forwardRef<HTMLDivElement>((ref,props)=> {
  const {t} = useTranslation();
  const skills = [
    {
      id: 0,
      icons: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />],
      icons_class: "html_css_js",
      title: "HTML / (S)CSS / JS",
      description:t("skills.skills_description.0"),
      buttonText: t("skills.skills_button_text"),
      pathes: [
        "https://developer.mozilla.org/ru/docs/Web/HTML",
        "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics",
        "https://developer.mozilla.org/ru/docs/Web/JavaScript",
      ],
    },
    {
      id: 1,
      icons: [<DiGit />],
      icons_class: "git",
      title: "GIT",
      description:t("skills.skills_description.1"),
      buttonText: t("skills.skills_button_text"),
      pathes: ["https://git-scm.com/"],
    },
    {
      id: 2,
      icons: [<DiReact />, <SiNextdotjs />],
      icons_class: "react_next",
      title: "ReactJS / NextJS",
      description:t("skills.skills_description.2"),
      buttonText: t("skills.skills_button_text"),
      pathes: ["https://ru.reactjs.org/", "https://nextjs.org/"],
    },
    {
      id: 3,
      icons: [<SiRedux />],
      icons_class: "redux",
      title: "Redux / Redux Toolkit",
      description:t("skills.skills_description.3"),
      buttonText: t("skills.skills_button_text"),
      pathes: ["https://redux.js.org/", "https://redux-toolkit.js.org/"],
    },
    {
      id: 4,
      icons: [<SiTypescript />],
      icons_class: "ts",
      title: "TypeScript",
      description:t("skills.skills_description.4"),
      buttonText: t("skills.skills_button_text"),
      pathes: ["https://www.typescriptlang.org/"],
    },
    {
      id: 5,
      icons: [<DiNodejsSmall />, <SiExpress />, <SiMongodb />],
      icons_class: "nodejs_express_mongodb",
      title: "NodeJS / Express MongoDB",
      description:t("skills.skills_description.5"),
      buttonText: t("skills.skills_button_text"),
      pathes: [
        "https://nodejs.org/en/",
        "https://expressjs.com/ru/",
        "https://www.mongodb.com/",
      ],
    },
    {
      id: 6,
      icons: [<SiFigma />, <DiPhotoshop />],
      icons_class: "figma_ps",
      title: "Figma / Adobe Photoshop",
      description:t("skills.skills_description.6"),
      buttonText: t("skills.skills_button_text"),
      pathes: [
        "https://www.figma.com",
        "https://www.adobe.com/ru/products/photoshop.html",
      ],
    },

    {
      id: 7,
      icons: [<GrRobot />],
      icons_class: "bots",
      title: "Telegram боты",
      description:t("skills.skills_description.7"),
      buttonText: t("skills.skills_button_text"),
      pathes: ["https://core.telegram.org/bots"],
    },
  ];
  const handleClickMore = (pathes: string[]) => {
    pathes.forEach((path) => {
      window.open(path);
    });
  };
  return (
    <div ref={props} className="skills">
      <div className="skills__title">{t("skills.title")}</div>
      <div className="skills__description">
      {t("skills.description")}
      </div>
      
      <div className="skills__content">
      <Ellipse
          top="10%"
          left="-23%"
          bottom="0"
          right="0"
          background="#D946EF"
          width={200}
          height={180}
          blurValue={200}
        />
        <Ellipse
          top="30%"
          left="20%"
          bottom="0"
          right="0"
          background="#D946EF"
          width={200}
          height={180}
          blurValue={250}
        />
        <Ellipse
          top="80%"
          left="0"
          bottom="1px"
          right="0"
          background="#1946EF"
          width={200}
          height={180}
          blurValue={200}
        />
        {skills.map((skill, idx) => (
          <Flip key={`${skill.id}:${idx}`} direction={"horizontal"} delay={10}  >
          <div className="skills__block">
            <div className="skills__block_icon">
              {skill.icons.map((icon, idx) => (
                <div key={`${idx}`} className={skill.icons_class}>
                  {icon}
                </div>
              ))}
            </div>
            <div className="skills__block_title">{skill.title}</div>
            <div className="skills__block_description">{skill.description}</div>
            <div onClick={() => handleClickMore(skill.pathes)} className="skills__block_features">
                <span>{skill.buttonText}
                </span>
                <img src={rightArrow} alt="arrow_right" />
            </div>
          </div>
          </Flip>
        ))}
      </div>
    </div>
  );
});

export default Skills;
