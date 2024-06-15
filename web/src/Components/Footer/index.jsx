import React from "react";
import Logo from "../../Images/Logo.webp";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../Slices/CheckTokenSlice";
import { useTranslation } from "react-i18next";
import { setURL } from "../../Slices/URLslice";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let logged = useSelector((state) => state.auth.value);
  const { i18n, t } = useTranslation();

  const logInOut = async () => {
    if (logged) {
      await fetch("/api/v1/auth", {
        method: "DELETE",
      })
        .then(() => dispatch(checkToken()))
        .catch((err) => console.log(err));
    } else {
      console.log(window.location.pathname);
      dispatch(setURL(window.location.pathname))
      navigate("/login");
    }
  };
  return (
    <footer>
      <div id="footer-divider">
        <p
          id="hiddenLogin"
          onClick={() => {
            logInOut();
          }}
        >
          {logged ? "Logout" : "Login"}
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370.72585082428384!2d21.43874289249767!3d41.982957514033686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415779ec4f561%3A0xe1b411a7d97bbebd!2z0JDQstGC0L7QutC70YPRh9Cw0YAg0J3QldCd0J4!5e0!3m2!1smk!2smk!4v1714179222845!5m2!1smk!2smk"
          width="100%"
          height="300"
          title="map"
          id="map"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <img id="footer-logo" src={Logo} alt="Logo" />
        <div id="contact-info">
          <h3>{t("ContactTitle")}:</h3>
          <ul>
            <li>
              Email: <br />{" "}
              <a href="mailto:nenoas1011@gmail.com">nenoas1011@gmail.com</a>
            </li>
            <li>
              {t("EmergencyNum")}: <br />{" "}
              <a href="tel:+38978339071">+389 78/339-071</a>
            </li>
            <li>
              {t("WorkshopNum")}: <br />{" "}
              <a href="tel:+38978339072">+389 78/339-072</a>
            </li>
            <li>
              {t("WarehouseNum")}: <br />{" "}
              <a href="tel:+38976442791">+389 76/442-791</a>{" "}
            </li>
          </ul>
        </div>
        <div id="working-hours-container">
          <h3>{t("WorkingHours")}:</h3>
          <ul>
            <li>
              {t("MonFri")}: <br /> 08:00 - 20:00
            </li>
            <li>
              {t("Sat")}: <br /> 08:00 - 16:00
            </li>
            <li>
              {t("Sun")}: <br /> {t("Closed")}
            </li>
          </ul>
        </div>
      </div>
      <p id="copyright-label">
        &#169; {t("Copyright")}{" "}
        <a href="https://www.instagram.com/stojanov.97/" target="__blank">
          Stojanov
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
