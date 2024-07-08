import React, { useEffect } from "react";
import lupa from "../../../public/search.svg";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types";
import { getTv } from "../tvqueries";
import MovieItem from "@/components/Item";

export default async function Tvseries() {
  const request = await getTv();
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
