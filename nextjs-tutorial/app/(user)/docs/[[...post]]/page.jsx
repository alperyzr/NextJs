import react from "react";

//Dinamik routing için kullanılır.
/*
Url'e herhangi bir şey yazdığımızda direkt olarak [blok] klasörü altındaki page çalışır.
Ekran çıktısı ise blog Sayfası : UrlText olarak çıkar.
method parametresi olarak belirttiğimiz params dinamik olduğu anlamına gelir.
Blok sayfası : params.blog kısmı ise köşeli parantez içerisinde nasıl belirttiysek öyle yazmamız gerekir. örneğin bu örnekte [...post] olarak belirttiğimiz için küçük harflerle post yazmamız gerekir
*/

/*
Ancak bir ağaç yapııs gibi örneğin docs/blog/günlükblog/1 gibi bir url ile gelirsek blog klasörünü docs klasörü altına taşımamız gerekir.
bununla birlikte yazımını ise [[...blog]] olarak değiştirmemiz gerekir. böylece url e docs yazsak da sayfa gelir. docs/blog yazsakda sayfa gelir
*/

/*
Proje büyüdükçe bu sayfalama yapısı artacağı için routeları gruplamak istersek parantez işareti kullanıırz.()
bu parantezler url e yansımaz. bu örnekte (user)/docs/[[...post]] şeklinde yaptık. Böylce sadece user ı ilgilendiren sayfalar gibi konumlandırabiiliriz.
docs burada anadizindir. docstan sonrası ise dinamik url i temsil eder.
*/

function PostPage({ params }) {
  return <div>Post: {params.post + ""}</div>;
}
export default PostPage;
