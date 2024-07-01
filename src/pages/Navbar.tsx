import React from "react";
import path from "../../public/Path.svg";
import shape from "../../public/Shape.svg";
import shape2 from "../../public/Shape-2.svg";
import tv from "../../public/tv.svg";
import bookmark from "../../public/Bookmark.svg";
import oval from "../../public/Oval.png";
import Link from "next/link";
import style from "./style.module.css";
export default function Navbar() {
  return (
    <section className="">
      <div className={style.wrapper}>
        <div className={style.flapper}>
          <div>
            <img src={path.src} alt="tv" className={style.svg1} />
          </div>
          <div className={style.midWrapper}>
            <Link href="/trending">
              <img src={shape.src} alt="tv" className={style.svg} />
            </Link>
            <Link href="/movies">
              <img src={shape2.src} alt="tv" className={style.svg} />
            </Link>
            <Link href="/tvseries">
              <img src={tv.src} alt="tv" className={style.svg} />
            </Link>
            <Link href="/bookmarked">
              <img src={bookmark.src} alt="tv" className={style.svg} />
            </Link>
          </div>
          <div className={style.oval}>
            <img src={oval.src} alt="oval" />
          </div>
        </div>
      </div>
    </section>
  );
}
