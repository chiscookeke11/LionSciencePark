
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

    const baseURL = "https://www.lionsciencepark.com/"

return {
    rules: {
     userAgent: "*",
     disallow: ["/admin/", "/api/"],
    },
    sitemap: `${baseURL}/sitemap.xml`
}
}