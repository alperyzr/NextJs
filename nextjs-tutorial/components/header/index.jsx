import React from "react";

//Link tag larını kullanmka için import edilmesi gerekir.
import Link from "next/link";

//reack içerisinde gelen bağrı sembolleri kullanmak için bu kütüphane import edilir.
/*
öncesinde terminalden yarn add react-icons yazarak indirmemiz gerekir.
Font-awensome gibi bir çalışma mantığı vardır ve uygun iconları direkt olarak projeye entegre edebiliriz.
*/
import { FaPlayCircle } from "react-icons/fa";

import styles from "@/components/header/styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          {/* FaPlayCircle logoda ki ikonu yerleştirir */}
          <FaPlayCircle /> NETFİLMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">Movie</Link>
          <Link href="/">Series</Link>
          <Link href="/">Lids</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
