import couplePalace from "@/assets/couple-palace.jpg";
import coupleSunset from "@/assets/couple-sunset.jpg";
import coupleSwing from "@/assets/couple-swing.jpg";
import coupleHands from "@/assets/couple-hands.jpg";
import coupleCake from "@/assets/couple-cake.jpg";

import bridePortrait from "@/assets/bride-portrait.jpg";
import groomPortrait from "@/assets/groom-portrait.jpg";
import sharePhoto from "@/assets/wedding-share.jpg";
import album01 from "@/assets/couple-album-01.jpeg";
import album02 from "@/assets/couple-album-02.jpeg";
import album03 from "@/assets/couple-album-03.jpeg";
import album04 from "@/assets/couple-album-04.jpeg";
import album05 from "@/assets/couple-album-05.jpeg";
import album06 from "@/assets/couple-album-06.jpeg";
import album07 from "@/assets/couple-album-07.jpeg";
import album08 from "@/assets/couple-album-08.jpeg";
import album09 from "@/assets/couple-album-09.jpeg";

// Central wedding configuration — edit everything here.
export const wedding = {
  bride: {
    name: "Shreya Bhansali",
    short: "Shreya",
    family: "Daughter of the Bhansali Family",
    photo: bridePortrait,
  },

  groom: {
    name: "Kunal Jain",
    short: "Kunal",
    family: "Son of the Jain Family",
    photo: groomPortrait,
  },

  hostFamily: "Bhansali Family",

  dateISO: "2027-01-31T19:00:00+05:30",
  endISO: "2027-02-01T01:30:00+05:30",

  dateLabel: "Sunday, 31 January 2027",
  coverDateLabel: "31 · January · 2027",
  timeLabel: "Times will be updated later",

  venue: {
    name: "Greenland Resort",
    address: "Surat, Gujarat, India",
    mapsQuery: "Greenland Resort, Surat",
  },

  events: [
    {
      title: "Beats and Bling",
      dateISO: "2027-01-30",
      day: "30",
      month: "January",
      weekday: "Saturday",
      names: ["Sangeet Night"],
      time: "7 PM onwards",
      meal: "Followed by Dinner",
      startISO: "2027-01-30T19:00:00+05:30",
      icon: "music",
    },
    {
      title: "Mella Dillo Ka",
      dateISO: "2027-01-31",
      day: "31",
      month: "January",
      weekday: "Sunday",
      names: ["Carnival"],
      time: "11 AM onwards",
      meal: "Followed by Lunch",
      startISO: "2027-01-31T11:00:00+05:30",
      icon: "sun",
    },
    {
      title: "Dil se Dil Tak",
      dateISO: "2027-01-31",
      day: "31",
      month: "January",
      weekday: "Sunday",
      names: ["Varmala and Reception"],
      time: "7 PM onwards",
      meal: "Followed by Dinner",
      startISO: "2027-01-31T19:00:00+05:30",
      icon: "heart",
    },
    {
      title: "Circle of Love",
      dateISO: "2027-02-01",
      day: "1",
      month: "February",
      weekday: "Monday",
      names: ["Phere"],
      time: "1:30 AM",
      meal: "After the Sunday evening reception",
      startISO: "2027-02-01T01:30:00+05:30",
      icon: "flame",
    },
  ],

  style: "A celebration of love, laughter & forever",
  hashtag: "#KUSHily_ever-after",

  siteUrl: "https://bhansaliinvitation.vercel.app",

  // Using an existing couple photo for social sharing.
  shareImage: "/wedding-share.jpg",

  message:
    "With the blessings of our elders and the grace of Bhagwan Mahavir, we joyfully invite you to share in the auspicious beginning of our new journey together.",

  couplePhoto: couplePalace,
  closingPhoto: coupleSunset,

  gallery: [
    album03,
    album04,
    album01,
    album02,
    album05,
    album06,
    album07,
    album08,
    album09,
  ],

  musicUrl: "/music.mp3",

  wishesEndpoint: "",
  wishesWhatsApp: "917976830060",

  credit: {
    name: "Arnav",
    url: "https://arnav-kaneriya-portfolio.vercel.app/",
  },
};

export type WeddingConfig = typeof wedding;