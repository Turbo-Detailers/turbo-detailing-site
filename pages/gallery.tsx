import PhotoAlbum from "react-photo-album";

import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

import { photos } from "../data/images";

import styles from "../styles/Gallery.module.scss";
import Spacer from "../components/Spacer";
import Head from "next/head";
import AccentedTitle from "../components/titles/AccentedTitle";
import Link from "next/link";

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Link href={`/gallery/${photo.src}`}>
        <Image
          fill
          src={photo}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
          {...{ alt, title, sizes, className, onClick }}
        />
      </Link>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Photo Gallery - Turbo Detailers</title>
        <meta
          name="description"
          content="Want to see how we conduct our services? See all of our photos here!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Spacer height={1.75} />
        <AccentedTitle>Gallery</AccentedTitle>
        <Spacer height={3} />
        <PhotoAlbum layout="rows" photos={photos} renderPhoto={NextJsImage} />
      </main>
    </>
  );
}
