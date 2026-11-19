import { describe, expect, it } from "vitest";
import { wedding } from "@/config/wedding";
import { mapsUrl } from "@/components/invite/Invitation";

describe("Wedding celebration details", () => {
  it("schedules Sangeet on January 30 at 7 PM followed by dinner", () => {
    expect(wedding.events[0]).toMatchObject({ title: "Beats and Bling", names: ["Sangeet Night"], startISO: "2027-01-30T19:00:00+05:30", meal: "Followed by Dinner" });
  });

  it("schedules Carnival on January 31 at 11 AM followed by lunch", () => {
    expect(wedding.events[1]).toMatchObject({ title: "Mella Dillo Ka", names: ["Carnival"], startISO: "2027-01-31T11:00:00+05:30", meal: "Followed by Lunch" });
  });

  it("schedules Varmala and Reception on January 31 at 7 PM followed by dinner", () => {
    expect(wedding.events[2]).toMatchObject({ title: "Dil se Dil Tak", names: ["Varmala and Reception"], startISO: "2027-01-31T19:00:00+05:30", meal: "Followed by Dinner" });
  });

  it("places after-midnight Phere on February 1 at 1:30 AM", () => {
    expect(wedding.events[3]).toMatchObject({ title: "Circle of Love", names: ["Phere"], dateISO: "2027-02-01", weekday: "Monday", startISO: "2027-02-01T01:30:00+05:30" });
    expect(new Date(wedding.events[3]?.startISO ?? "").getTime()).toBeGreaterThan(new Date(wedding.events[2]?.startISO ?? "").getTime());
  });

  it("uses Greenland Resort, Surat as the shared venue and map destination", () => {
    expect(wedding.venue.name).toBe("Greenland Resort");
    expect(wedding.venue.address).toContain("Surat");
    expect(new URL(mapsUrl()).searchParams.get("query")).toBe("Greenland Resort, Surat");
    expect(wedding.events.some((event) => "venue" in event)).toBe(false);
  });
});