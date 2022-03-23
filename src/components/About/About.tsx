
import React, { FC} from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Ellipse from "../Ellipse/Ellipse";
import "./About.scss";

type AboutProps={
  ref:any;
}

const About:FC<AboutProps> = React.forwardRef<HTMLDivElement>((ref,props) => {
  const {t} =useTranslation();
  
  return (
    <div ref={props}   className="about">
      <Fade direction="left" duration={800}>
      <div className="about__leftside">
        <Ellipse
          top="-80%"
          left="-40%"
          bottom="0"
          right="0"
          background="#1d4ed873"
          width={200}
          height={300}
          blurValue={100}
        />
        <Ellipse
          top="100%"
          left="40%"
          bottom="0"
          right="0"
          background="#AF51C5"
          width={120}
          height={80}
          blurValue={150}
        />

        <div className="about__title">
          {t("about.title.0")}
          <br />{t("about.title.1")}
        </div>
        <div className="about__description">
        {t("about.description")}
        </div>
        <div className="about__features">
          <button onClick={() => window.open("https://t.me/RUBA111KA")}>
            {t("about.contact")}
          </button>
        </div>
      </div>
      </Fade>
      <div className="about__rightside">
        <Ellipse
          top="10%"
          left="0"
          bottom="0"
          right="0"
          background="#D946EF"
          width={100}
          height={180}
          blurValue={150}
        />
        <Ellipse
          top="10%"
          left="100%"
          bottom="0"
          right="0"
          background="#5141DA"
          width={100}
          height={180}
          blurValue={150}
        />
    </div>
    </div>
  );
});

export default About;
