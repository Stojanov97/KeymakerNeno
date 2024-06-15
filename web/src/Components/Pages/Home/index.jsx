import React, { useEffect, useState } from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DoorKeys from "../../../Images/Services/door-keys.webp";
import CarKeys from "../../../Images/Services/car-keys.webp";
import IseoLogo from "../../../Images/Services/iseo-logo.webp";
import Launch from "../../../Images/Services/launch.webp";
import About from "../../../Images/about.webp";
import NewsCard from "../../NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [news, setNews] = useState(false);
  const dispatch = useDispatch();
  let logged = useSelector((state) => state.auth.value);
  const {i18n, t} = useTranslation();
  const chunk = (array, size) => {
    return array.reduce((chunks, current, index) => {
      if (index % size === 0) {
        chunks.push([current]);
      } else {
        chunks[chunks.length - 1].push(current);
      }
      return chunks;
    }, []);
  };
  useEffect(() => {
    (async () => {
      try {
        return await fetch("/api/v1/news")
          .then((res) => res.json())
          .then((data) => setNews(data))
          .catch((err) => console.log(err));
      } catch (err) {
        return console.log(err);
      }
    })();
  }, []);
  console.log(news);
  return (
    <div id="home">
      <div id="landing-img-div" loading="lazy">
        <h1>{t("BusinessName")}</h1>
        <p>
          {t("BusinessSlogan")}
        </p>
      </div>
      <div id="services-container">
        <h2>{t("ServicesTitle")}</h2>
        <div id="service-container">
          <div className="service-card">
            <img src={DoorKeys} alt="DoorKeys" />
            <p>{t("HomeKeys")}</p>
          </div>
          <div className="service-card">
            <img src={CarKeys} alt="CarKeys" />
            <p>
              {t("CarKeys")}
            </p>
          </div>
          <div className="service-card">
            <img src={IseoLogo} alt="ISEO" />
            <p>{t("ISEO")}</p>
          </div>
          <div className="service-card">
            <img src={Launch} alt="Launch " />
            <p>{t("Diag")}</p>
          </div>
        </div>
      </div>
      <div id="about-container">
        <h2>{t("AboutTitle")}</h2>
        <div id="about-info-container">
          <img src={About} alt="about img" />
          <div>
            {t("AboutBio")}
          </div>
        </div>
      </div>
      {news && (
        <div id="news-container">
          {logged && (<div id="editNews"><p>{t("Add")}</p></div>)}
          <h2>{t("News")}</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
            {chunk(news, 3).map((newsList, index) => (
              <div className="carousel-slide" key={index}>
                {newsList.map((newss) => (
                  <NewsCard key={newss._id} newss={newss} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Home;
