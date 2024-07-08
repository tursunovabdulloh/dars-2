import React, { useEffect } from "react";
import lupa from "../../public/search.svg";
import { Movie } from "@/types";
import { getTr } from "../app/trqueries";
import MovieItem from "@/components/Item";
export default async function Home() {
  const request = await getTr();
  return (
    <section>
      <div className="container">
        <div className="flex gap-[24px]">
          <img src={lupa.src} alt="" />
          <input
            type="text"
            className="bg-inherit"
            placeholder="Search for movies or TV series"
          />
        </div>
        <div>
          <p className="mt-[26px] mb-[28px] text-[#fff] font-outfit text-2xl font-normal leading-tight tracking-tighter">
            Trending
          </p>
          <div className="grid gap-5 mt-2.5 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {request?.docs?.map((movie: Movie) => (
              <MovieItem data={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
