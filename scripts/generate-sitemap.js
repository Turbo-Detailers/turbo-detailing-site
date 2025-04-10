const fs = require("fs");
const globby = require("globby");
// import { allPosts } from "contentlayer/generated";

var yourDate = new Date();
yourDate = yourDate.toISOString().split("T")[0];

function addPage(page) {
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

  return `<url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
    <lastmod>${yourDate}</lastmod>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx,.ts,.tsx}",
    "!pages/_*{.js,.ts,.tsx}",
    "!pages/**/*.xml{.js,.ts,.tsx}",
    "!pages/api",
  ]);

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
<url>
    <loc>${`${process.env.WEBSITE_URL}/blog`}</loc>
    <changefreq>hourly</changefreq>
    <lastmod>${yourDate}</lastmod>
  </url>
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
<loc>${`${process.env.WEBSITE_URL}/blog/sitemap.xml`}</loc>
</sitemap>
  <sitemap>
    <loc>${`${process.env.WEBSITE_URL}/sitemap.xml`}</loc>
  </sitemap>
</sitemapindex>`;
  fs.writeFileSync("public/sitemap_index.xml", sitemapIndex);
}

generateSitemap();
