import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {setLogged} from './Slices/LoggedSlice'
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await fetch("/api/v1/auth/refreshToken", {method: "POST", credentials: "include"})
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLogged(data.success))
      }).catch(err=>console.log(err));
    })();
  });
  return (
    <div className="App bg-[#eee]">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
