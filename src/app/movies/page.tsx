import React from "react";
import lupa from "../../../public/search.svg";
import rasm from "../../../public/Rectangle.png";
import kino from "../../../public/Shape3.svg";
import style from "./style.module.css";

export default function movius() {
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
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
            <div className={style.card}>
              <img src={rasm.src} alt="" width={280} />
              <div className={style.cardBody}>
                <div>
                  <p className={style.cardLi}>2019</p>
                </div>
                <div className={style.cardMovies}>
                  <img src={kino.src} alt="" />
                  <p className={style.cardLi}>Movies</p>
                </div>
                <div>
                  <p className={style.cardLi}>PG</p>
                </div>
              </div>
              <div className={style.cardTitle}>The Great Lands</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
