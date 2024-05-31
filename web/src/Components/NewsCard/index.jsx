import React from "react";
import "./styles.css";
import NA from "../../Images/na.webp"

const NewsCard = ({newss}) => {
  return (
    <a className="news-card" href={`/news/${newss._id}`}>
      <img
        src={
          newss.photo
            ? `/api/v1/news/images/${newss._id}?${Math.random() * 10}`
            : NA
        }
        alt="image"
        height={200}
      />
      <h2 className="news-title">{newss.title}</h2>
      <p className="news-text">{newss.content}</p>
    </a>
  );
};

export default NewsCard;
