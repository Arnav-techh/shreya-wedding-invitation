import couplePalace from "@/assets/couple-palace.jpg";
import coupleSunset from "@/assets/couple-sunset.jpg";
import coupleSwing from "@/assets/couple-swing.jpg";
import coupleHands from "@/assets/couple-hands.jpg";
import coupleCake from "@/assets/couple-cake.jpg";
import bridePortrait from "@/assets/bride-portrait.jpg";
import groomPortrait from "@/assets/groom-portrait.jpg";
// Central wedding configuration — edit everything here.
export const wedding = {
  bride: { name: "Shreya Bhansali", short: "Shreya", family: "Daughter of the Bhansali Family", photo: bridePortrait },
  groom: { name: "Kunal Jain", short: "Kunal", family: "Son of the Jain Family", photo: groomPortrait },
  hostFamily: "Bhansali Family",
  dateISO: "2027-01-31T18:00:00+05:30", // countdown target (update time once confirmed)
  endISO: "2027-01-31T23:00:00+05:30",
  venue: { name: "Greenland Resort", address: "Surat, Gujarat, India", mapsQuery: "Greenland Resort, Surat" },
  events: [
    { dateISO: "2027-01-30", day: "30", month: "January", weekday: "Saturday", names: ["Mayera", "Sangeet"] },
    { dateISO: "2027-01-31", day: "31", month: "January", weekday: "Sunday", names: ["Carnival", "Reception", "Wedding"] },
  ],
  style: "A traditional Jain wedding",
  message:
    "With the blessings of our elders and the grace of Bhagwan Mahavir, we joyfully invite you to share in the auspicious beginning of our new journey together.",
  couplePhoto: couplePalace as string,
  closingPhoto: coupleSunset as string,
  gallery: [coupleCake, coupleSwing, coupleHands, couplePalace, coupleSunset, bridePortrait] as string[], // sample photos; replace any time
  musicUrl: "/music.mp3", // e.g. "/music.mp3" placed in /public
  wishesEndpoint: "", // POST {name, message} JSON; empty = wishes are not saved
  wishesWhatsApp: "917976830060", // International digits only, without +
  credit: { name: "Arnav", url: "https://arnav-kaneriya-portfolio.vercel.app/" },
};
export type WeddingConfig = typeof wedding;
