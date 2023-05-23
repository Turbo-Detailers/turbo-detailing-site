import PhotoAlbum from "react-photo-album";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Image, { StaticImageData } from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

import { getShuffledPhotos } from "../data/images";

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

export default function Gallery({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <PhotoAlbum layout="rows" photos={images} renderPhoto={NextJsImage} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  images: StaticImageData[];
}> = async () => {
  return {
    props: {
      images: await getShuffledPhotos(),
    },
  };
};

// export const getServerSideProps: GetServerSideProps<{
//   repo: Repo;
// }> = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   return { props: { repo } };
// };
