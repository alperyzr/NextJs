import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "../feature-movie/style.module.css";

//İsCompact true ise filmin açıklaması uzun demektir ve anasayfada metnin belli bir yerinden sonra üç nokta olarak şekilde gösterir.
function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
       {/* Sayfa üzerinde ki arka plan resmi için kullanıldı. Fiil methodu ise bütün bir sayfaya yayılmasını sağlar */}
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };