// "use client";
// import React, { useState } from "react";
// import path from "../../public/Path.svg";
// import Shape from "../../public/Shape.svg";
// import shape2 from "../../public/Shape-2.svg";
// import tv from "../../public/tv.svg";
// import bookmark from "../../public/Bookmark.svg";
// import oval from "../../public/Oval.png";
// import shapeActive from "../../public/shapeActive.svg";
// import shape2Active from "../../public/shape2Active.svg";
// import tvActive from "../../public/tvActive.svg";
// import bookmarkActive from "../../public/bookmarkActive.svg";
// import Link from "next/link";
// import style from "style.module.css";

// export default function Navbar() {
//   const [activePage, setActivePage] = useState<string>("/");

//   const handleLinkClick = (page: string) => {
//     setActivePage(page);
//   };

//   return (
//     <section className="">
//       <div className={style.cardWrapper}>
//         <div className={style.flapper}>
//           <div>
//             <img src={path.src} alt="Path" className="navbar-logo" />
//           </div>
//           <div className={style.midWrapper}>
//             <Link
//               href="/"
//               onClick={() => handleLinkClick("/")}
//               className={`navbar-link ${activePage === "/" ? "active" : ""}`}
//             >
//               <img
//                 src={activePage === "/" ? shapeActive.src : Shape.src}
//                 alt="Home"
//                 className={`navbar-icon ${activePage === "/" ? "active" : ""}`}
//               />
//             </Link>
//             <Link
//               href="/movies"
//               onClick={() => handleLinkClick("/movies")}
//               className={`navbar-link ${
//                 activePage === "/movies" ? "active" : ""
//               }`}
//             >
//               <img
//                 src={activePage === "/movies" ? shape2Active.src : shape2.src}
//                 alt="Movies"
//                 className={`navbar-icon ${
//                   activePage === "/movies" ? "active" : ""
//                 }`}
//               />
//             </Link>
//             <Link
//               href="/tvseries"
//               onClick={() => handleLinkClick("/tvseries")}
//               className={`navbar-link ${
//                 activePage === "/tvseries" ? "active" : ""
//               }`}
//             >
//               <img
//                 src={activePage === "/tvseries" ? tvActive.src : tv.src}
//                 alt="TV Series"
//                 className={`navbar-icon ${
//                   activePage === "/tvseries" ? "active" : ""
//                 }`}
//               />
//             </Link>
//             <Link
//               href="/bookmarked"
//               onClick={() => handleLinkClick("/bookmarked")}
//               className={`navbar-link ${
//                 activePage === "/bookmarked" ? "active" : ""
//               }`}
//             >
//               <img
//                 src={
//                   activePage === "/bookmarked"
//                     ? bookmarkActive.src
//                     : bookmark.src
//                 }
//                 alt="Bookmarked"
//                 className={`navbar-icon ${
//                   activePage === "/bookmarked" ? "active" : ""
//                 }`}
//               />
//             </Link>
//           </div>
//           <div className={style.oval}>
//             <img src={oval.src} alt="Oval" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";
import path from "../../public/Path.svg";
import Shape from "../../public/Shape.svg";
import shape2 from "../../public/Shape-2.svg";
import tv from "../../public/tv.svg";
import bookmark from "../../public/Bookmark.svg";
import oval from "../../public/Oval.png";
import shapeActive from "../../public/shapeActive.svg";
import shape2Active from "../../public/shape2Active.svg";
import tvActive from "../../public/tvActive.svg";
import bookmarkActive from "../../public/bookmarkActive.svg";
import Link from "next/link";
import style from "./style.module.css"; // CSS modulini import qilyapmiz

export default function Navbar() {
  const [activePage, setActivePage] = useState<string>("/");

  const handleLinkClick = (page: string) => {
    setActivePage(page);
  };

  return (
    <section className="">
      <div className={style.wrapper}>
        <div className={style.flapper}>
          <div>
            <img src={path.src} alt="Path" className={style.svg1} />
          </div>
          <div className={style.midWrapper}>
            <Link href="/" onClick={() => handleLinkClick("/")}>
              <img
                src={activePage === "/" ? shapeActive.src : Shape.src}
                alt="Home"
                className={`${style.svg} ${
                  activePage === "/" ? style.active : ""
                }`}
              />
            </Link>
            <Link href="/movies" onClick={() => handleLinkClick("/movies")}>
              <img
                src={activePage === "/movies" ? shape2Active.src : shape2.src}
                alt="Movies"
                className={`${style.svg} ${
                  activePage === "/movies" ? style.active : ""
                }`}
              />
            </Link>
            <Link href="/tvseries" onClick={() => handleLinkClick("/tvseries")}>
              <img
                src={activePage === "/tvseries" ? tvActive.src : tv.src}
                alt="TV Series"
              />
            </Link>
            <Link
              href="/bookmarked"
              onClick={() => handleLinkClick("/bookmarked")}
            >
              <img
                src={
                  activePage === "/bookmarked"
                    ? bookmarkActive.src
                    : bookmark.src
                }
                alt="Bookmarked"
              />
            </Link>
          </div>
          <div className={style.oval}>
            <img src={oval.src} alt="Oval" />
          </div>
        </div>
      </div>
    </section>
  );
}
