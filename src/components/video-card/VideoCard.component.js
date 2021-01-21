import React from "react";
import "./video-card.styles.scss";
import { MdPlayCircleOutline } from "react-icons/md";

export default function VideoCard({ bgSrc }) {
  return (
    <div className="video-card">
      <div
        className="container"
        style={{ backgroundImage: "url(" + bgSrc + ")" }}
      >
        <div className="video-btn">
          <MdPlayCircleOutline className="play-icon" />
        </div>
      </div>
    </div>
  );
}
