import { MetadataRoute } from "next";

// List all your static pages
const staticPages = [
    "",
    "about",
    "services",
    "team",
    "news",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURL = "https://www.lionsciencepark.com";

    const pages = staticPages.map((page) => ({
        url: `${baseURL}/${page}`,
        lastModified: new Date().toISOString(),
    }));

    return pages;
}
