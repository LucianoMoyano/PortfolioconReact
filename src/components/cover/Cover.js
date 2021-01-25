import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Luciano Moyano</h1>
      <p>Developer Full Stack </p>
      <h3>Javascript | React | NodeJs | Stack M.E.R.N</h3>
    </div>
  );
};

export default Cover;
