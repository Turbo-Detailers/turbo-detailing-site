import AccentedTitle from "../../components/titles/AccentedTitle";
import Subtitle from "../../components/titles/Subtitle";
import styles from "../../styles/Home.module.scss";

function Top() {
  return (
    <main className={styles.main}>
      <div>
        <AccentedTitle>Turbo</AccentedTitle>
        <Subtitle>Luxury Detailing</Subtitle>
      </div>
    </main>
  );
}

export default Top;