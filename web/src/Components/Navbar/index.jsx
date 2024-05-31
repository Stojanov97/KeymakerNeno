import React, { useEffect, useState } from "react";
import "./styles.css";
import Logo from "../../Images/Logo.webp";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import MkFlag from "../../Images/mkFlag.webp";
import GbFlag from "../../Images/gbFlag.webp";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../Slices/LangSlice";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  let lang = useSelector((state) => state.lang.value);
  useEffect(()=>{
    i18n.changeLanguage(lang);
  },[])
  return (
    <>
      <div id="nav-container">
        <div id="drawer-nav" className={showDrawer ? "show-drawer" : " "}>
          <a href="/#top">{t("Home")}</a>
          <a href="/#services-container">{t("Services")}</a>
          <a href="/iseo">ISEO</a>
          <a href="/#about-container">{t("About")}</a>
          <a href="#contact-info">{t("Contact")}</a>
          <div className="lang-holder">
            <img
              src={MkFlag}
              alt="mk"
              onClick={() => {
                i18n.changeLanguage("mk");
                dispatch(setLang("mk"));
              }}
            />
            <img
              src={GbFlag}
              alt="gb"
              onClick={() => {
                i18n.changeLanguage("en");
                dispatch(setLang("en"));
              }}
            />
          </div>
        </div>
        <nav id="navbar">
          <a href="/#top">{t("Home")}</a>
          <a href="/#services-container">{t("Services")}</a>
          <a href="/iseo">ISEO</a>
          <div id="logo-img">
            <img src={Logo} alt="Logo" />
          </div>
          <a href="/#about-container">{t("About")}</a>
          <a href="#contact-info">{t("Contact")}</a>
          <div className="lang-holder">
            <img
              src={MkFlag}
              alt="mk"
              onClick={() => {
                i18n.changeLanguage("mk");
                dispatch(setLang("mk"));
              }}
            />
            <img
              src={GbFlag}
              alt="gb"
              onClick={() => {
                i18n.changeLanguage("en");
                dispatch(setLang("en"));
              }}
            />
          </div>
          <Bars3BottomRightIcon
            id="burger-nav"
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
