import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/feature-movie/index.jsx";
import Categories from "@/components/Categories/index.jsx";
import MovieSection from "@/components/movie-section/index.jsx";

function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
     
     {/* Category seçilmişse bu bloğa girecek ve seçilen kategorye göre filmleri listeleyecek */}
      {selectedCategory.movies.length > 0 && (
        
         <MovieSection title={Genres.genres.find(
          (genre) => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies} />
      )}

      <MovieSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
      <MovieSection title="Your Favorites" movies={Movies.results.slice(7, 14)}/>
    </div>
  );
}

export default HomeContainer;
