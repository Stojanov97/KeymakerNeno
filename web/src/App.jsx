import { useDispatch, useSelector } from "react-redux";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Login from "./Components/Login";
import "./app.css";
import { useEffect, useState } from "react";
import { setAuth } from "./Slices/AuthSlice";
import { Routes, Route } from "react-router-dom";
import Iseo from "./Components/Pages/Iseo"

const themes = {
  light: `${__dirname}../light.css`,
  dark: `${__dirname}../dark.css`,
};

function App() {
  const [logged, setLogged] = useState(false);
  const dispatch = useDispatch();
  let check = useSelector((state) => state.checkToken.value)
  useEffect(() => {
    fetch("/api/v1/auth/refreshToken", {
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
  }, [check]);
  useEffect(() => {
    dispatch(setAuth(logged));
  }, [logged]);
  return (
    <ThemeSwitcherProvider
      defaultTheme={useSelector((state) =>
        state.theme.value ? "light" : "dark"
      )}
      themeMap={themes}
    >
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/iseo" element={<Iseo/>} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </ThemeSwitcherProvider>
  );
}

export default App;
