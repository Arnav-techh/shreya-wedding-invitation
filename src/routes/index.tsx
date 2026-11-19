import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/invite/Invitation";
import { wedding } from "@/config/wedding";

const SITE_URL = wedding.siteUrl.replace(/\/$/, "");
const OG_IMAGE = new URL(wedding.shareImage, `${SITE_URL}/`).href;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },

  validateSearch: (s: Record<string, unknown>): { to?: string } =>
    typeof s["to"] === "string" && s["to"].trim()
      ? { to: s["to"].trim().slice(0, 60) }
      : {},

  head: () => ({
    meta: [
      {
        title: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation · ${wedding.dateLabel}`,
      },
      {
        name: "description",
        content: `Celebrate ${wedding.bride.name} and ${wedding.groom.name}: Sangeet on January 30, Carnival and Reception on January 31, and Phere on February 1, 2027 at ${wedding.venue.name}, ${wedding.venue.address}. ${wedding.hashtag}`,
      },

      // Open Graph metadata
      {
        property: "og:title",
        content: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation`,
      },
      {
        property: "og:description",
        content: `Join our wedding celebrations at ${wedding.venue.name}, ${wedding.venue.address}. ${wedding.dateLabel}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: `${wedding.bride.short} & ${wedding.groom.short} Wedding` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: `${wedding.bride.short} and ${wedding.groom.short} wedding invitation`,
      },

      // Twitter / X metadata
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation`,
      },
      {
        name: "twitter:description",
        content: `Join us at ${wedding.venue.name}, ${wedding.venue.address}. ${wedding.dateLabel}.`,
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],

    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/`,
      },
    ],
  }),

  component: Index,
});

function Index() {
  const { to } = Route.useSearch();

  return <Invitation guest={to} />;
}