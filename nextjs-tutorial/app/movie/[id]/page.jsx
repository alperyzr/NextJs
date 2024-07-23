import React from "react";
import Movie from "@/mocks/movies.json";
import MovieContainer from "@/containers/movie/index.jsx";
import { notFound } from "next/navigation";


//Loader ekranının gözükmesi için 2sn delay methodu yazdık
async function Delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params, searchParams }) {
  
  //sayfa render olurken loader gözükmesi için delay methodunu çağırdık
  await Delay(2000);

  //lampda expression ile movie Json listesindeki resultlarda find methodu ile arama yapıyoruz
  const movieDetail = Movie.results.find(
    (movie) => movie.id.toString() === params.id
  );

  //İlgili movie bulunamazsa notFound sayfasına yönlendirirlir
  if (!movieDetail) {
    notFound();
  }

  //SearchParameters(url parametresi) üzerinden error true gönderilirse Error sayfasına yönlendirirlir
  if (searchParams.error === "true") {
    throw new Error("Error Happend");
  }

  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
}

export default MoviePage;
