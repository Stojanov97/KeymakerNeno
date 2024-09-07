import React, { useEffect, useState } from "react";
import "./styles.css";
import Logo from "../../Images/Logo.webp";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import MkFlag from "../../Images/mkFlag.webp";
import GbFlag from "../../Images/gbFlag.webp";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../Slices/LangSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);

  const handleScroll = async (element, device) => {
    try {
      let offset = 0;
      if (device === "mobile") {
        offset = 100;
      } else {
        offset = 130;
      }
      if (element !== "contact-info") {
        await navigate("/");
      }
      const cont = document.getElementById(element);
      const pos = cont.getBoundingClientRect().top;
      return window.scrollBy(0, pos - offset);
    } catch (err) {
      return console.log(err);
    }
  };

  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  let lang = useSelector((state) => state.lang.value);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, []);

  return (
    <>
      <div id="nav-container">
        {/* drawer nav start */}
        <div id="drawer-nav" className={showDrawer ? "show-drawer" : " "}>
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowDrawer(false);
              if (window.location.pathname === "/") {
                return window.scrollTo(0, 0);
              } else {
                window.scrollTo(0, 0);
                return navigate("/");
              }
            }}
          >
            {t("Home")}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowDrawer(false);
              return handleScroll("services-container", "mobile");
            }}
          >
            {t("Services")}
          </a>
          <a href="/iseo">ISEO</a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowDrawer(false);
              return handleScroll("about-container", "mobile");
            }}
          >
            {t("About")}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setShowDrawer(false);
              return handleScroll("contact-info", "mobile");
            }}
          >
            {t("Contact")}
          </a>
          <div className="lang-holder">
            <img
              src={MkFlag}
              alt="mk"
              onClick={() => {
                setShowDrawer(false);
                i18n.changeLanguage("mk");
                return dispatch(setLang("mk"));
              }}
            />
            <img
              src={GbFlag}
              alt="gb"
              onClick={() => {
                setShowDrawer(false);
                i18n.changeLanguage("en");
                return dispatch(setLang("en"));
              }}
            />
          </div>
        </div>
        {/* drawer nav end */}

        {/* desktop nav start */}
        <nav id="navbar">
          <a
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === "/") {
                return window.scrollTo(0, 0);
              } else {
                window.scrollTo(0, 0);
                return navigate("/");
              }
            }}
          >
            {t("Home")}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              return handleScroll("services-container");
            }}
          >
            {t("Services")}
          </a>
          <a href="/iseo">ISEO</a>
          <div id="logo-img">
            <img src={Logo} alt="Logo" />
          </div>
          <a
            onClick={(e) => {
              e.preventDefault();
              return handleScroll("about-container");
            }}
          >
            {t("About")}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              return handleScroll("contact-info");
            }}
          >
            {t("Contact")}
          </a>
          <div className="lang-holder">
            <img
              src={MkFlag}
              alt="mk"
              onClick={() => {
                i18n.changeLanguage("mk");
                return dispatch(setLang("mk"));
              }}
            />
            <img
              src={GbFlag}
              alt="gb"
              onClick={() => {
                i18n.changeLanguage("en");
                return dispatch(setLang("en"));
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
        {/* desktop nav end */}
      </div>
    </>
  );
};

export default Navbar;
