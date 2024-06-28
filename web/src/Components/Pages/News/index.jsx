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
  return (
    <>
      <div className="news-divider">
        {showDelete && <DeleteNews toggleShow={setShowDelete} info={news} />}
        {logged && (
          <>
            {!showDelete && (
              <>
                <button
                  className="delete-btn news-delete-btn"
                  onClick={() => setShowDelete(true)}
                >
                  {t("Delete")}
                </button>
                <br />
                <button className="edit-btn">{t("Edit")}</button>
              </>
            )}
          </>
        )}
        <div className="grid-centerer">
          <img
            src={`/api/v1/news/images/${news._id}?${Math.random() * 10}`}
            alt="img"
          />
          <div>
            <h1>{i18n.language === "mk" ? news.title_mk : news.title_en}</h1>
            <p>{i18n.language === "mk" ? news.content_mk : news.title_en}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
