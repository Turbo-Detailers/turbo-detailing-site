import PhotoAlbum from "react-photo-album";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Image, { StaticImageData } from "next/image";
import type { RenderContainer, RenderPhotoProps, RenderRowContainer } from "react-photo-album";

import { getShuffledPhotos } from "../data/images";

import styles from "../styles/Gallery.module.scss";
import Spacer from "../components/Spacer";
import Head from "next/head";
import AccentedTitle from "../components/titles/AccentedTitle";
import Link from "next/link";
import Props from "interfaces/Props";
import { motion } from "framer-motion";

const content = (isFirstMount: boolean | undefined) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const pagecontents = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      delayChildren: 0.3,
      staggerChildren: 0.1
    },
  },
};

const imagesV = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.75,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

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
}: InferGetServerSidePropsType<typeof getServerSideProps>, { isFirstMount }: Props) {
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

      <motion.main className={styles.main} initial="initial"
        animate="animate"
        variants={content(isFirstMount)}>
        <Spacer height={1.75} />
        <motion.div variants={title} >
          <AccentedTitle>Gallery</AccentedTitle>
        </motion.div>
        <Spacer height={3} />
        <motion.div variants={imagesV}>
          <PhotoAlbum layout="rows" photos={images} renderPhoto={NextJsImage} />
        </motion.div>
      </motion.main>
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
