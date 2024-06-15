import React from "react";
import "./styles.css";
import NA from "../../Images/na.webp";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NewsCard = ({ newss }) => {
  let logged = useSelector((state) => state.auth.value);
  const { i18n, t } = useTranslation();
  return (
    <a className="news-card" href={`/news/${newss._id}`}>
      {logged && (
        <>
          <button className="delete-btn">{t("Delete")}</button>
          <br />
          <button className="edit-btn">{t("Edit")}</button>
        </>
      )}
      <img
        src={`/api/v1/news/images/${newss._id}?${Math.random() * 10}`}
        alt="image"
        height={200}
      />
      <h2 className="news-title">{newss.title}</h2>
      <p className="news-text">{newss.content}</p>
    </a>
  );
};

export default NewsCard;
