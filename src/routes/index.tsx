import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/invite/Invitation";
import { wedding } from "@/config/wedding";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  validateSearch: (s: Record<string, unknown>): { to?: string } =>
    typeof s["to"] === "string" && s["to"].trim() ? { to: s["to"].trim().slice(0, 60) } : {},
  head: () => ({
    meta: [
      { title: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation · ${wedding.dateLabel}` },
      { name: "description", content: `Celebrate ${wedding.bride.name} and ${wedding.groom.name} at ${wedding.venue.name}, ${wedding.venue.address}. ${wedding.dateLabel}. ${wedding.hashtag}` },
      { property: "og:title", content: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation` },
      { property: "og:description", content: `Join our wedding celebrations at ${wedding.venue.name}, ${wedding.venue.address}. ${wedding.dateLabel}.` },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${wedding.siteUrl}/` },
      { property: "og:image", content: `${wedding.siteUrl}${wedding.shareImage}` },
      { property: "og:image:secure_url", content: `${wedding.siteUrl}${wedding.shareImage}` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${wedding.bride.short} and ${wedding.groom.short} wedding invitation` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${wedding.siteUrl}${wedding.shareImage}` },
    ],
    links: [{ rel: "canonical", href: `${wedding.siteUrl}/` }],
  }),
  component: Index,
});

function Index() {
  const { to } = Route.useSearch();
  return <Invitation guest={to} />;
}
