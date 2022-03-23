
import React, { FC } from "react";
import logo from "../../assets/logo.png";
import burger from "../../assets/burger.png";
import "./Header.scss";
import Ellipse from "../Ellipse/Ellipse";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  handleSmoothTo: (id: number) => void;
};

const Header: FC<HeaderProps> = ({ handleSmoothTo }) => {
  const { t } = useTranslation();
  const [bg, setBg] = React.useState<boolean>(false);
  const navigationItems = [
    { id: 0, title: t("header.navigation.0") },
    { id: 1, title: t("header.navigation.1") },
    { id: 2, title: t("header.navigation.2") },
  ];
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const listenScrollEvent = () => {
    if (window.scrollY > 0) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  const handleClickBurgerNav =(id:number)=>{
    setShowMenu(false);
    handleSmoothTo(id);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <div style={bg ? {} : { background: "none",boxShadow:"none" }} className="header">
      <div className="header__logo">
        <img src={logo} alt="header_logo" />
        <span>{t("header.logo")}</span>
      </div>
      <ul className="header__navigation">
        {navigationItems.map((nav, idx) => (
          <li
            onClick={() => handleSmoothTo(nav.id)}
            key={`${nav.id}:${idx}`}
            className="header__navigation--item"
          >
            {nav.title}
          </li>
        ))}

        <li>
          <button onClick={() => window.open("https://t.me/RUBA111KA")}>
            {t("header.contact")}
          </button>
        </li>
      </ul>
      <div onClick={() => setShowMenu(!showMenu)} className="burger__btn">
        <img src={burger} alt="burger_btn" />
      </div>
      <div className={`burger__menu ${showMenu && "burger__menu--opened"}`}>
        <Ellipse
          top="10%"
          left="80%"
          bottom="0"
          right="0"
          background="#1d4ed873"
          width={50}
          height={100}
          blurValue={30}
        />
        <Ellipse
          top="50%"
          left="0"
          bottom="0"
          right="0"
          background="#D946EF"
          width={80}
          height={120}
          blurValue={50}
        />

        <ul className="burger__navigation">
          {navigationItems.map((nav, idx) => (
            <li onClick={()=>handleClickBurgerNav(nav.id)} key={`${nav.id}:${idx}`} className="burger__navigation--item">
              {nav.title}
            </li>
          ))}
          <li>
            <button onClick={() => window.open("https://t.me/RUBA111KA")}>
              {t("header.contact")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
