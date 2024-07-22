import React from 'react';
import Movies from '@/mocks/movies.json';
import FeaturedMovie from "@/components/feature-movie/index.jsx";

function HomeContainer(){
  return <FeaturedMovie movie={Movies.result[0]}/>;
  }

export default HomeContainer;