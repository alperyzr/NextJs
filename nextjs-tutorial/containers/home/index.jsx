import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/feature-movie/index.jsx";
import Categories from "@/components/Categories/index.jsx";
import MovieSection from "@/components/movie-section/index.jsx";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MovieSection title="Popular Films" movies={Movies.results.slice(1,7)}/>
      <MovieSection title="Your Favorites" movies={Movies.results.slice(7,14)}/>
    </div>
  );
}

export default HomeContainer;
