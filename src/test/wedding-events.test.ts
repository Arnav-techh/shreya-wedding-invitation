import { describe, expect, it } from "vitest";
import { wedding } from "@/config/wedding";
import { mapsUrl } from "@/components/invite/Invitation";

describe("Wedding celebration details", () => {
  it("schedules Mayera and Sangeet on January 30, 2027", () => {
    expect(wedding.events.find((event) => event.dateISO === "2027-01-30")?.names).toEqual(["Mayera", "Sangeet"]);
  });

  it("schedules Carnival, Reception and Wedding on January 31, 2027", () => {
    expect(wedding.events.find((event) => event.dateISO === "2027-01-31")?.names).toEqual(["Carnival", "Reception", "Wedding"]);
  });

  it("uses Greenland Resort, Surat as the shared venue and map destination", () => {
    expect(wedding.venue.name).toBe("Greenland Resort");
    expect(wedding.venue.address).toContain("Surat");
    expect(new URL(mapsUrl()).searchParams.get("query")).toBe("Greenland Resort, Surat");
    expect(wedding.events.some((event) => "venue" in event)).toBe(false);
  });
});