import React from "react";
import lupa from "../../../public/search.svg";
import style from "./style.module.css";
import MovieItem from "@/components/Item";
import { getMovies } from "../queris";
import Image from "next/image";
import { Movie } from "@/types";

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
            {request?.docs?.map((movie: Movie) => (
              <MovieItem data={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
