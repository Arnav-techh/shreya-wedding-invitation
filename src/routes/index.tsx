import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/invite/Invitation";
import { wedding } from "@/config/wedding";

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): { to?: string } =>
    typeof s["to"] === "string" && s["to"].trim() ? { to: s["to"].trim().slice(0, 60) } : {},
  head: () => ({
    meta: [
      { title: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation · ${wedding.dateLabel}` },
      { name: "description", content: `Celebrate the wedding of ${wedding.bride.name} and ${wedding.groom.name}, ${wedding.events.map((event) => event.day).join("–")} January 2027 at ${wedding.venue.name}, ${wedding.venue.address}.` },
      { property: "og:title", content: `${wedding.bride.short} & ${wedding.groom.short} — Wedding Invitation` },
      { property: "og:description", content: `Join our wedding celebrations at ${wedding.venue.name}, ${wedding.venue.address}. ${wedding.dateLabel}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { to } = Route.useSearch();
  return <Invitation guest={to} />;
}
