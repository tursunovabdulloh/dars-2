import React from "react";
import lupa from "../../../public/search.svg";
import rasm from "../../../public/Rectangle.png";
import kino from "../../../public/Shape3.svg";
import ki from "../../../public/Shape2.svg";
import nuqta from "../../../public/nuqta.svg";
import Post from "../../../public/super.jpg";
import style from "./style.module.css";
import favoriteIcon from "../../../public/favorite.svg";
import { getMovies } from "../queris";
import Image from "next/image";

export default async function movius() {
  const request = await getMovies();
  console.log(request);

  return (
    <section>
      <div className="container">
        <div className={style.lupaDiv}>
          <img src={lupa.src} alt="" />
          <input
            type="text"
            className={style.input}
            placeholder="Search for movies or TV series"
          />
        </div>
        <div>
          <p className="mt-[26px] mb-[28px] text-[#fff] font-outfit text-2xl font-normal leading-tight tracking-tighter">
            Movies
          </p>
          <div className={style.cardWrapper}>
            {request?.docs?.map(
              ({
                id,
                name,
                year,
                description,
                type,
                backdrop,
                poster,
                alternativeName,
              }) => (
                <div key={id} className={style.card}>
                  <img
                    src={favoriteIcon.src}
                    alt=""
                    width={25}
                    height={25}
                    className={style.favorite}
                  />
                  <Image
                    src={poster?.url ?? backdrop?.url ?? Post}
                    alt=""
                    width={280}
                    height={380}
                    className="w-[280px] h-[380px] rounded-lg object-cover"
                  />
                  <div className={style.cardBody}>
                    <div>
                      <p className={style.cardLi}>{year}</p>
                    </div>
                    <div className={style.cardMovies}>
                      <img src={nuqta.src} alt="" />
                      <img src={ki.src} alt="" />
                      <p className={style.cardLi}>Movies</p>
                    </div>
                    <div className="flex gap-1">
                      <img src={nuqta.src} alt="" />
                      <p className={style.cardLi}>{type}</p>
                    </div>
                  </div>
                  <div className={style.cardTitle}>
                    {name ?? alternativeName}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
