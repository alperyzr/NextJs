import React from "react";
import Skeleton from "@/components/skeleton/index.jsx";
import styles from "./styles.module.css";

function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
      <Skeleton width={128} height={36} />
      <div className={styles.movies}>
        {/* .fill methodu bulunduğu container ı komple kaplaması için kullanılır */}
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export default MoviesSectionLoading;