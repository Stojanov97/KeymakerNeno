import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {checkToken} from '../../Slices/CheckTokenSlice'
import "./styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const fetchFromApi = async (e) => {
    e.preventDefault();
    if (email.length < 3) {
      setError("Email is not valid");
      return;
    } else if (password.length < 8) {
      setError("Password is must be 8 characters long");
      return;
    } else {
      setError(false);
      await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.success === true) {
            setError(false);
            dispatch(checkToken());
            navigate("/");
          } else {
            setError(data.err);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <XMarkIcon id="close-icon" onClick={()=>navigate("/")} />
      <div id="login-container">
        <h1>Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={(e) => fetchFromApi(e)}>
            Login
          </button>
        </form>
        {error && (
          <p style={{ color: "#000280", textAlign: "center" }}>{error}</p>
        )}
      </div>
    </>
  );
};

export default Login;
