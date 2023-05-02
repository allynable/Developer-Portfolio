import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";
import "../assets/styles/preloader.css";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Create.</span>
        <span>Curate.</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
};

export default PreLoader;
