export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://www.pablofernandezchacon.com/sitemap.xml",
    host: "https://www.pablofernandezchacon.com",
  };
}
