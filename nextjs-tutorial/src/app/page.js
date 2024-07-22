//Url yapısında ki linkler için kullanılır. oluşturulan sayfalara tıklandığında yönlenmesi için kullanılır
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Hello NextJS</div>
      <div className="row">
        <div className="col-12">
          <Link href="/hakkimizda">Hakkımızda</Link>
        </div>
        <div className="col-12">
          <Link href={{
            pathname:"hakkimizda",
            query:{
              //URl üzerinden name ve Surnam parametrelerini gönderir
              name:"Alper",
              surname:"Yazır"
            }
          }}>Hakkımızda Parametrik</Link>
        </div>
        <div className="col-12">
          <Link href="/docs">Döküman</Link>
        </div>
        <div className="col-12">
          <Link href="/docs/parameter1">Döküman</Link>
        </div>
      </div>
    </div>
  );
}
