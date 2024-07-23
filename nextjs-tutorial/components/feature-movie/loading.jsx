import React from "react";
import { Loading } from "@/components/loading/index.jsx";

import styles from "@/components/feature-movie/style.module.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export default FeatureMovieLoading ;