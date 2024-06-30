"use client";
import React from "react";
import style from "./style.module.css";
import path from "../../../public/Path.svg";
import shape from "../../../public/Shape.svg";
import shape2 from "../../../public/Shape-2.svg";
import tv from "../../../public/tv.svg";
import bookmark from "../../../public/Bookmark.svg";
import oval from "../../../public/Oval.png";

export default function Header() {
  return (
    <>
      <section className="container">
        <div className={style.wrapper}>
          <div className={style.flapper}>
            <div>
              <img src={path.src} alt="tv" className={style.svg1} />
            </div>
            <div className={style.midWrapper}>
              <img src={shape.src} alt="tv" className={style.svg} />
              <img src={shape2.src} alt="tv" className={style.svg} />
              <img src={tv.src} alt="tv" className={style.svg} />
              <img src={bookmark.src} alt="tv" className={style.svg} />
            </div>
            <div className={style.oval}>
              <img src={oval.src} alt="oval" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
