import { allPosts } from "contentlayer/generated";
import type { GetServerSidePropsContext } from "next/types";
import globby from "globby";

// TODO: Change this with your website URL
const WEBSITE_URL = process.env.WEBSITE_URL;

function addPage(page: any) {
  const path = page
    .replace("pages", "")
    .replace(".js", "")
    .replace(".mdx", "")
    .replace(".tsx", "")
    .replace(".ts", "")
    .replace("/index", "");

  const route = path === "/index" ? "/" : path;
  if (typeof route == "string") {
    if (route.includes("[")) return;
  }
  let yourDate = new Date();
  var yourDateString = yourDate.toISOString().split("T")[0];
  return `<url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
    <lastmod>${yourDateString}</lastmod>
  </url>`;
}
async function generateSitemap() {
  const pages = await globby([
    "pages/**/*{.js,.mdx,.ts,.tsx}",
    "!pages/_*{.js,.ts,.tsx}",
    "!pages/api",
  ]);

  // TODO: You could add a custom `priority` and `changefreq` for each page
  // https://www.sitemaps.org/protocol.html
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPosts
      .map(
        ({ url, date }) => `<url>
      <loc>${WEBSITE_URL}${url}</loc>
      <lastmod>${date}</lastmod>
      <priority>1.00</priority>
      <changefreq>monthly</changefreq>
      </url>`
      )
      .join("\n")}
    </urlset>`;

  return sitemap;
}
export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  if (res) {
    res.setHeader("Content-Type", "text/xml");
    res.write(await generateSitemap());
    res.end();
  }

  return { props: {} };
}

const Sitemap: React.FC = () => null;
export default Sitemap;
