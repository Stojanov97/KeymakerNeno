import React, { useEffect, useState } from "react";
import Logo from "../Images/Logo.svg";
import instaLogo from "../Images/InstaLogo.webp";
import { ClockIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    (async () => {
      let data = await new Date();
      let day = await data.getDay();
      let hour = await data.getHours();
      setTime(hour);
      setToday(day);
    })();
  }, []);
  const [time, setTime] = useState(0);
  const [today, setToday] = useState(0);
  return (
    <nav className="flex flex-col justify-between w-[100vw] h-17 items-center md:fixed z-10 border-bottom-blue">
      <div className="bg-[#1E1E2A] h-10 text-white w-full flex justify-center items-center py-2">
        <div className="flex w-[45%] md:w-[50%] justify-center items-center gap-x-[10px]">
          <a
            href="https://maps.app.goo.gl/7LT1SrLxd8a4XGe68"
            target="_blank"
            rel="noreferrer"
          >
            <MapPinIcon className="w-6 h-6 text-[#eee]" />
          </a>
          <a
            href="https://www.instagram.com/keymaker.neno/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-7 h-7" src={instaLogo} alt="zk" />
          </a>
          <a href="mailto:nenoas1011@gmail.com">
            <AtSymbolIcon className="w-6 h-6 text-[#eee] " />
          </a>
          <a href="tel:0038978339071">
            <PhoneIcon className="w-6 h-6 text-[#eee]" />
          </a>
        </div>
        <div className="flex justify-center w-[55%] md:w-[50%] items-center gap-1 border-l-2 text-sm font-bold">
          <ClockIcon className="w-6 h-6" />
          {today === 0
            ? "Opens Monday 08:00"
            : time < 8
            ? "Opens at 08:00"
            : today === 6
            ? days[today] + " 08:00 - 16:00"
            : days[today] + " 08:00 - 20:00"}
        </div>
      </div>
      <div className="bg-[#dedede] h-16 flex items-center gap-3 px-2 w-full">
        <img src={Logo} alt="logo" className="h-[90%]" />
        <div className="h-[100%] w-[90%] flex gap-4 overflow-x-scroll sm:overflow-hidden justify-start items-center text-lg font-extrabold fancy-scroll">
          <p className="shrink-0 cursor-pointer">Home</p>
          <p className="shrink-0 cursor-pointer">ISEO</p>
          <p className="shrink-0 cursor-pointer">Services</p>
          <p className="shrink-0 cursor-pointer">About us</p>
          <p className="shrink-0 cursor-pointer">Language</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
