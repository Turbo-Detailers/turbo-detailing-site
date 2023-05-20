import Image from "next/image";

import { useRouter } from "next/router";

export default function GalleryImagePage() {
  const router = useRouter();
  var url;
  if (Array.isArray(router.query.img)) {
    url = router.query.img.join("/");
  } else url = "";

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Image
          fill
          src={`/${url}`}
          alt={"Detail Image"}
          style={{ objectFit: "contain", maxHeight: "100vh" }}
          quality={100}
        ></Image>
      </div>
    </>
  );
}
