import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; 2023{" "}
      <Link href={"https://www.instagram.com/turbodetailersmn"}>
        Turbo Detailing.
      </Link>{" "}
      All rights reserved.
    </footer>
  );
}
