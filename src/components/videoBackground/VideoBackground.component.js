import React from "react";
import "./videobg.styles.scss";

export default function VideoBackground({ videoSrc, children }) {
  const videoSource =
    videoSrc ||
    "https://media.twistshake.com/2020/10/31182108/low-head-banner_1.mp4";
  return (
    <div className="videobg-container">
      <video autoPlay="autoplay" loop="loop" muted className="bgVideo">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">{children}</div>
    </div>
  );
}
