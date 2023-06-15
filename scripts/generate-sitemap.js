const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace(".js", "")
    .replace(".mdx", "")
    .replace(".tsx", "")
    .replace(".ts", "");
  // .replace("/index", "");

  const route = path === "/index" ? "/" : path;
  if (typeof route == "string") {
    if (route.includes("[")) return;
  }
  let yourDate = new Date();
  yourDate = yourDate.toISOString().split("T")[0];
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
    "!pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
