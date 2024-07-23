import React from "react";
import CategoriesLoading from "@/components/categories/loading.jsx";
import FeatureMovieLoading from "@/components/feature-movie/loading.jsx";
import MovieSectionLoading from "@/components/movie-section/loading.jsx";
import GeneralLoading from "@/components/loading/index.jsx";

function Loading() {
  return (
    <div>
      {/* 
      FeatureLoading ile aslında ynı şey. Test amaçlı koyuldu 
      <GeneralLoading />
      */}
      

      {/* En yukarıda dönen standart loading için kullanılır */}
      <FeatureMovieLoading />

      {/* Kategorilerin yanyana yazıldığı kutular için Loading oluşturur */}
      <CategoriesLoading />

      {/* Filmlerin resimlerinin gözüktüğü yer için Loading Oluşturur */}
      <MovieSectionLoading />
      <MovieSectionLoading />
    </div>
  );
}

export default Loading;
