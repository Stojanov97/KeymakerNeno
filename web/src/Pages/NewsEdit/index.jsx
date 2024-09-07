import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../Slices/CheckTokenSlice";
import { useNavigate, useParams } from "react-router-dom";

const NewsEdit = () => {
  const [mkTitle, setMkTitle] = useState("");
  const [enTitle, setEnTitle] = useState("");
  const [mkContent, setMkContent] = useState("");
  const [enContent, setEnContent] = useState("");
  const [image, setImage] = useState(false);
  const [file, setFile] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [logged, setLogged] = useState(
    useSelector((state) => state.auth.value)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!logged) return navigate("/login");
    window.scrollBy(0, -1000);
    dispatch(checkToken());
    (async () => {
      if (id === undefined) {
        return;
      } else {
        try {
          await fetch(`/api/v1/news/${id}`)
            .then((res) => res.json())
            .then((data) => {
              setEnContent(data.content_en);
              setMkContent(data.content_mk);
              setEnTitle(data.title_en);
              setMkTitle(data.title_mk);
              setImage(`/api/v1/news/images/${id}`);
            })
            .catch((err) => console.log(err));
        } catch (err) {
          return console.log(err);
        }
      }
    })();
  }, []);

  const addNews = async () => {
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
      if (!logged) return;
      let data = new FormData();
      data.append("title_mk", mkTitle);
      data.append("content_mk", mkContent);
      data.append("title_en", enTitle);
      data.append("content_en", enContent);
      if (file) data.append("photo", file);
      await fetch("/api/v1/news", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success === true) {
            return navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      return console.log(err);
    }
  };

  const editNews = async () => {
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
      if (!logged) return;
      let data = new FormData();
      data.append("title_mk", mkTitle);
      data.append("content_mk", mkContent);
      data.append("title_en", enTitle);
      data.append("content_en", enContent);
      if (file) data.append("photo", file);
      await fetch(`/api/v1/news/${id}`, {
        method: "PUT",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success === true) {
            return navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    if (file.size > 2097152) {
      setError("File exceeds 2MB");
      setImage(false);
      setFile(false);
    } else if (file.size < 2097152) {
      setError(false);
    }
  }, [file]);

  return (
    <div id="news-edit-page">
      <form>
        <label htmlFor="title-mk">MK title</label>
        <input
          type="text"
          name="title-mk"
          id="title-mk"
          minLength={"5"}
          value={mkTitle}
          onChange={(e) => {
            setMkTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="title-en">EN title</label>
        <input
          type="text"
          name="title-en"
          id="title-en"
          minLength={"5"}
          value={enTitle}
          onChange={(e) => {
            setEnTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="content-mk">MK content</label>
        <textarea
          rows={"5"}
          type="text"
          name="content-mk"
          id="content-mk"
          value={mkContent}
          onChange={(e) => {
            setMkContent(e.target.value);
          }}
          required
        />
        <label htmlFor="content-en">EN content</label>
        <textarea
          rows={"5"}
          type="text"
          name="content-en"
          id="content-en"
          value={enContent}
          onChange={(e) => {
            setEnContent(e.target.value);
          }}
          required
        />
        <label htmlFor="image">Thumbnail</label>
        {id!==undefined && <img src={image} alt="img" />}
        <input
          type="file"
          name="image"
          id="image"
          accept=".jpg, .jpeg"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname === "/news/add") {
              return addNews();
            }else{
              return editNews();
         }}}
        >
          Upload
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewsEdit;
