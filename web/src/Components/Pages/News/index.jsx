import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import DeleteNews from "../../PopUps/DeleteNews";

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(false);
  const { i18n, t } = useTranslation();
  const [showDelete, setShowDelete] = useState(false);
  let logged = useSelector((state) => state.auth.value);
  useEffect(() => {
    (async () => {
      try {
        return await fetch(`/api/v1/news/${id}`)
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
    <>
      <div className="news-divider">
    {showDelete && <DeleteNews />}
        {logged && (
          <>
            <button className="delete-btn news-delete-btn" onClick={()=>setShowDelete(true)} >
              {t("Delete")}
            </button>
            <br />
            <button className="edit-btn">{t("Edit")}</button>
          </>
        )}
        <div className="grid-centerer">
          <img
            src={`/api/v1/news/images/${news._id}?${Math.random() * 10}`}
            alt="img"
          />
          <div>
            <h1>{news.title}</h1>
            <p>{news.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
