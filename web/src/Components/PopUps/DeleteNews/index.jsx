import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../Slices/AuthSlice";
import { useTranslation } from "react-i18next";

const DeleteNews = ({ toggleShow , info }) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [logged, setLogged] = useState(useSelector((state) => state.auth.value));
  const dispatch = useDispatch();
  const remove = async () => {
    try {
      await fetch("/api/v1/auth/refreshToken", {
        method: "POST",
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.success === true) {
            setLogged(true);
          } else {
            setLogged(false);
          }
        })
        .catch((err) => console.log(err));
      await fetch(`/api/v1/news/${info._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        navigate("/");
      }).catch((err) => alert(err));
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    dispatch(setAuth(logged));
  }, [logged]);
  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <h1>{t("DeleteNews")} - {i18n.language === "mk"? info.title_mk : info.title_en}</h1>
        <div className="pop-up-options-container">
          <button
            className="pop-up-delete-btn"
            onClick={()=>{remove()}}
          >
            {t("Delete")}
          </button>
          <button
            className="pop-up-cancel-btn"
            onClick={() => {
              toggleShow(false);
            }}
          >
            {t("Cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNews;
