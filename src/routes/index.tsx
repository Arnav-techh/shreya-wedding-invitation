import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/invite/Invitation";
import { wedding } from "@/config/wedding";

// Website configuration
const SITE_URL = "https://shreya-wedding-invitation.vercel.app";

const OG_IMAGE = `${SITE_URL}/wedding-og.jpg`;

const SEO_TITLE =
  "CA Shreya Bhansali Wedding | Shreya & Kunal — Wedding Invitation";

const SEO_DESCRIPTION =
  `Celebrate the wedding of CA Shreya Bhansali and ${wedding.groom.name}. ` +
  `Explore their wedding invitation, ceremonies and celebrations at ` +
  `${wedding.venue.name}, ${wedding.venue.address}. ${wedding.dateLabel}.`;

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): { to?: string } =>
    typeof s["to"] === "string" && s["to"].trim()
      ? { to: s["to"].trim().slice(0, 60) }
      : {},

  head: () => ({
    meta: [
      // =====================================
      // BASIC GOOGLE SEO
      // =====================================

      {
        title: SEO_TITLE,
      },
      {
        name: "description",
        content: SEO_DESCRIPTION,
      },
      {
        name: "author",
        content: "Shreya & Kunal",
      },
      {
        name: "robots",
        content: "index, follow",
      },

      // =====================================
      // OPEN GRAPH - WHATSAPP & FACEBOOK
      // =====================================

      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "CA Shreya Bhansali & Kunal | Wedding Invitation",
      },
      {
        property: "og:description",
        content:
          `Together with our families, we invite you to celebrate ` +
          `the wedding of Shreya & Kunal. Explore our wedding invitation ` +
          `and January 2027 celebrations.`,
      },
      {
        property: "og:url",
        content: `${SITE_URL}/`,
      },
      {
        property: "og:site_name",
        content: "Shreya & Kunal Wedding",
      },
      {
        property: "og:image",
        content: OG_IMAGE,
      },
      {
        property: "og:image:secure_url",
        content: OG_IMAGE,
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "CA Shreya Bhansali and Kunal Wedding Invitation",
      },
      {
        property: "og:locale",
        content: "en_IN",
      },

      // =====================================
      // TWITTER / X SHARING
      // =====================================

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Shreya & Kunal | Wedding Invitation",
      },
      {
        name: "twitter:description",
        content:
          "Celebrate the wedding of CA Shreya Bhansali and Kunal. " +
          "Explore their wedding invitation and January 2027 celebrations.",
      },
      {
        name: "twitter:image",
        content: OG_IMAGE,
      },
      {
        name: "twitter:image:alt",
        content: "Shreya & Kunal Wedding Invitation",
      },
    ],

    links: [
      // Canonical URL
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