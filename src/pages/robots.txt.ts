import type { APIRoute } from "astro";
import { siteUrl } from "@/lib/site";

/** Static robots.txt, emitted as a real file by the build. */
export const GET: APIRoute = () =>
  new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${siteUrl}/sitemap-index.xml`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
