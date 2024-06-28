import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const NewsCard = ({ newss }) => {
  const { i18n, t } = useTranslation();
  return (
      <a className="news-card" href={`/news/${newss._id}`}>
        <img
          src={`/api/v1/news/images/${newss._id}?${Math.random() * 10}`}
          alt="image"
          height={200}
        />
        <h2 className="news-title">{i18n.language === "mk"? newss.title_mk : newss.title_en}</h2>
        <p className="news-text">{i18n.language === "mk"? newss.content_mk : newss.title_en}</p>
      </a>
  );
};

export default NewsCard;
