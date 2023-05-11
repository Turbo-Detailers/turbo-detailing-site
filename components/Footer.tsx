import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href={"https://www.instagram.com/turbodetailersmn"}>
        &copy; 2023 Turbo Detailing. All rights reserved.
      </Link>
    </footer>
  );
}
