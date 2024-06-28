import React from "react";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";

const DeleteNews = ({ toggleShow }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <h1>Are you sure you want to delete this news?</h1>
        <div className="pop-up-options-container">
          <button
            className="pop-up-delete-btn"
            onClick={() => {
              fetch(`/api/v1/news/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(()=>{navigate("/")});
            }}
          >
            Delete
          </button>
          <button
            className="pop-up-cancel-btn"
            onClick={() => {
              toggleShow(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNews;
