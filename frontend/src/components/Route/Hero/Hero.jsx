import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://c4.wallpaperflare.com/wallpaper/414/915/652/macro-chess-figure-wallpaper-preview.jpg)",
          backgroundSize: "100% auto"
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          style={{color:"white"}}
        >
          The tournament
          <br /> begins here
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]" style={{color: "white "}}>
          Embark on your journey to Chess mastery! <br />With our state-of-the-art
          pairing system, every move brings you closer to your next victory. <br />
          Step into the arena of intellect, strategy, and skill. Your chessboard
          awaits!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Join Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
