"use client";
import React, { useEffect, useState } from "react";
import lupa from "../../../public/search.svg";
import style from "./style.module.css";
import MovieItem from "@/components/Item";
import { getMovies } from "../queris";
import Image from "next/image";
import { Movie } from "@/types";

export default function bookmarked() {
  const [request, setRequest] = useState<Movie[]>([]);
  const [refresh, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourites") as string) ?? [];
    setRequest(data);
  }, [refresh]);
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
            Bookmarked
          </p>
          <div className={style.cardWrapper}>
            {request?.map((movie: Movie) => (
              <MovieItem
                data={{ ...movie, setUpdate: setUpdate }}
                key={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
