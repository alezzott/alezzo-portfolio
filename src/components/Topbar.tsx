import Image from "next/image";
import styles from "../styles/components/TopBar.module.css";
import { Button } from "./Button";

export function Topbar() {
  return (
    <header className={styles.topBar}>
      <Image src="/logo.svg" alt="Alezzo" width={120} height={120} className={styles.avatar} />

      <nav className={styles.navBar}>
        <div>
          <Button link={"mailto:faustino.alex@outlook.com"} image={"/icons/email.svg"} />
          {/* <Button link={"https://wa.me/5521971111312"} image={"/icons/whatsapp.svg"} /> */}
        </div>
        <div>
          <Button link={"https://www.linkedin.com/in/alex-faustino-98a750216/"} image={"/icons/linkedin.svg"} />
          <Button link={"https://github.com/alezzott"} image={"/icons/github.svg"} />
        </div>
      </nav>
    </header>
  );
}
