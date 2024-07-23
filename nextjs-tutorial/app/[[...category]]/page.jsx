//Url yapısında ki linkler için kullanılır. oluşturulan sayfalara tıklandığında yönlenmesi için kullanılır
// import Link from "next/link";

// function Home() {
//   return (
//     <div>
//       <div>Hello NextJS</div>
//       <div className="row">
//         <div className="col-12">
//           <Link href="/hakkimizda">Hakkımızda</Link>
//         </div>
//         <div className="col-12">
//           <Link
//             href={{
//               pathname: "hakkimizda",
//               query: {
//                 //URl üzerinden name ve Surnam parametrelerini gönderir
//                 name: "Alper",
//                 surname: "Yazır",
//               },
//             }}
//           >
//             Hakkımızda Parametrik
//           </Link>
//         </div>
//         <div className="col-12">
//           <Link href="/docs">Döküman</Link>
//         </div>
//         <div className="col-12">
//           <Link href="/docs/parameter1">Döküman</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Home;

import React from "react";
import HomeContainer from "@/containers/home/index.jsx";
import Movies from "@/mocks/movies.json";

async function Delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }) {
  await Delay(2000);

  let selectedCategory;

  //params içerisindeki categoryler 0 dan büyükse herhangi bir kategory seçilmiş demektir.
  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(14, 20) : [],
      }}
    />
  );
}

export default HomePage;
