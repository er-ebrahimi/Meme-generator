import * as React from "react";
import path from "../image/TrollFace.png";

export default function Header() {
  return (
    <header className="header section">
      <nav className="nav container">
        <div className="nav--logo">
          <img src={path} className="nav--logo_img" />
          <h2 className="nav--title">Mem generator</h2>
        </div>
        <div>
          <p>Project3</p>
        </div>
      </nav>
    </header>
  );
}
