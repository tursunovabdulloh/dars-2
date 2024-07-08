"use client";
import React, { Dispatch, useEffect, useState } from "react";
import lupa from "../../../public/search.svg";
import rasm from "../../../public/Rectangle.png";
import kino from "../../../public/Shape3.svg";
import ki from "../../../public/Shape2.svg";
import nuqta from "../../../public/nuqta.svg";
import Post from "../../../public/super.jpg";
import style from "./style.module.css";
import favoriteIcon from "../../../public/favorite.svg";
import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";

import { message } from "antd";

import "antd/dist/reset.css";

export default function Item({ data }: { data: Movie }) {
  const [fav, setFav] = useState<Movie[] | []>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites") as string) ?? [];
    setFav(favs);
  }, [refresh]);

  const {
    id,
    name,
    year,
    description,
    type,
    backdrop,
    poster,
    alternativeName,
  } = data;

  function addToBook() {
    const status = fav.findIndex((item) => item.id === id);

    if (status === -1) {
      const newFavs = [
        ...(JSON.parse(localStorage.getItem("favourites") as string) ?? []),
        data,
      ];
      localStorage.setItem("favourites", JSON.stringify(newFavs));
      message.success(`${type} has been bookmarked!`);
    } else {
      const newFavs = fav.filter((item) => item.id !== fav[status].id);
      localStorage.setItem("favourites", JSON.stringify(newFavs));
      message.info(`${type} has been removed from bookmarks.`);
      if (data?.setUpdate) {
        data?.setUpdate((prev) => !prev);
      }
    }
    setRefresh((prev) => !prev);
  }

  return (
    <>
      <div key={id} className={style.card}>
        <svg
          width="32"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={addToBook}
          className="inline-bolck  absolute top-2 right-2 w-8 h-8 cursor-pointer stroke-current z-10 hover:fill-[#ea8585] transition-transform duration-500 ease-in-out transform scale-110 hover:scale-120"
          style={
            fav.findIndex((item: Movie) => item.id === id) != -1
              ? { fill: "#fff" }
              : {}
          }
        >
          <circle opacity=".501" cx="16" cy="16" r="16" fill="#000" />
          <path
            d="m20.711 9.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.047.15.282.282 0 0 1-.138.106l-.008.004-.008.003a.29.29 0 0 1-.107.014c-.1 0-.17-.027-.24-.091l-4.012-3.915-.524-.512-.524.512-4.011 3.916a.327.327 0 0 1-.24.099.244.244 0 0 1-.102-.021l-.01-.005-.011-.004a.281.281 0 0 1-.139-.107.243.243 0 0 1-.046-.15V10.037c0-.058.014-.101.046-.15a.281.281 0 0 1 .139-.106l.01-.005.01-.004a.245.245 0 0 1 .102-.021h9.552c.038 0 .07.007.102.021Z"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>

        <Image
          src={poster?.url ?? backdrop?.url ?? Post}
          alt=""
          width={280}
          height={380}
          className="w-[280px] h-[380px] rounded-lg object-cover"
        />
        <div className={style.overlay}>
          <Link target="blank" href={`https://www.kinopoisk.ru/film/${id}`}>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.playIcon}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
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
        <div className={style.cardTitle}>{name ?? alternativeName}</div>
      </div>
    </>
  );
}
