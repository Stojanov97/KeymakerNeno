import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LocksmithCyilinder from "../Images/LocksmithCylinder.webp";
import ChipTuning from "../Images/ChipTuning.webp";
import Silca from "../Images/Silca.webp";
import {KeyIcon} from "@heroicons/react/24/solid";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Locksmith Neno";
  });
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        emulateTouch
        infiniteLoop
        autoPlay
        interval={8000}
        stopOnHover
        className="border-bottom-blue"
      >
        <div className="relative">
          <div className="absolute z-10 w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
            <h1 className="sm:my-4 text-[30px] md:text-[40px] lg:text[70px] w-full font-extrabold text-center">
              Locksmith Neno
            </h1>
            <p className="text-center w-full text-md sm:font-semibold sm:text-lg">
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <img
            src={LocksmithCyilinder}
            className="brightness-50"
            alt="cylinder"
          />
        </div>
        <div className="relative">
          <div className="absolute z-10 w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
            <h1 className="sm:my-4 text-[30px] md:text-[40px] lg:text[70px] w-full font-extrabold text-center">
              Locksmith Neno
            </h1>
            <p className="text-center w-full text-md sm:font-semibold sm:text-lg">
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <img src={Silca} alt="silca" className="brightness-50" />
        </div>
        <div className="relative">
          <div className="absolute z-10 w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
            <h1 className="sm:my-4 text-[30px] md:text-[40px] lg:text[70px] w-full font-extrabold text-center">
              Locksmith Neno
            </h1>
            <p className="text-center w-full text-md sm:font-semibold sm:text-lg">
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <img src={ChipTuning} alt="ecu" className="brightness-50" />
        </div>
      </Carousel>
      <div className="flex items-center w-full justify-center gap-4 flex-col sm:flex-row sm:gap-0 sm:p-0 p-3 sm:justify-start">
        <div className="bg-[#454545] relative w-[90%] rounded h-80 sm:w-[33.333%] sm:rounded-none p-3 text-white text-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          illo dolores, corporis amet veritatis at voluptatem laudantium
          laboriosam cupiditate aperiam. Qui saepe eligendi et aliquid enim,
          explicabo sed velit quidem.
            </p>
            <KeyIcon className="w-14 h-14 absolute bottom-4 right-4"/>
        </div>
        <div className="bg-[#656565] w-[90%] rounded h-80 sm:w-[33.333%] sm:rounded-none p-3 text-white text-md">
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          porro minima, quaerat harum quas, corporis possimus voluptas
          consequuntur repudiandae cumque, provident doloribus velit quis nemo!
          Ab nisi quaerat aliquam sit.
          </p>
        </div>
        <div className="bg-[#343434] w-[90%] rounded h-80 sm:w-[33.333%] sm:rounded-none p-3 text-white text-md">
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          porro minima, quaerat harum quas, corporis possimus voluptas
          consequuntur repudiandae cumque, provident doloribus velit quis nemo!
          Ab nisi quaerat aliquam sit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
