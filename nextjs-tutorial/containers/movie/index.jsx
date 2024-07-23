import React from "react";
import FeaturedMovie from "@/components/feature-movie/index.jsx";

function MovieContainer({movie}) {   
    
  return (
    <div> 
      {/* Best Practices olarak her sayfanın bir container ı olması gerekir
      Bu container içerisinde MoviePage sayfasının içerisinde göstereceğimiz kısımları yerleştiriyoruz.
      Bu örnekte MovieContainer Filmin detay ekranını göstermektedir*/}
      <FeaturedMovie movie={movie} isCompact="false" />
    </div>
  );
}

export default MovieContainer;
