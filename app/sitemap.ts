import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cgssb.com.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/current-affairs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cg-gk`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/author/yuvraj-pratap-rajwade`,
      lastModified: new Date(),
    },
  ];
}
