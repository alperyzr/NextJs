import React from "react";
import { Loading } from "@/components/loading.jsx";

import styles from "../feature-movie/style.module.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export { FeatureMovieLoading };