import React from "react";
import Button from "../button/Button.component";
import "./Live-stream-shopping-banner.styles.scss";

import { Link } from "react-router-dom";

export default function Live_stream_shopping() {
  return (
    <div className="live-stream-shopping">
      <div className="content">
        <h2 className="title">Black Week</h2>
        <Link to="/live-stream-shopping">
          <Button>
            <span>Watch</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
