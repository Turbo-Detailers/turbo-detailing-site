import Head from "next/head";
import Props from "../interfaces/Props";

interface BlogProps extends Props {
  meta: {
    author: string;
    title: string;
    subtitle: string;
    date: Date;
  };
}

function Layout({ children, meta }: BlogProps) {
  return (
    <>
      <Head>
        <title>{meta.title} - Turbo Detailers</title>
      </Head>
      <div className="blog-content-main">{children}</div>
    </>
  );
}

export default Layout;
