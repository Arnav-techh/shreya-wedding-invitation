import { describe, expect, it } from "vitest";
import { whatsappWishesUrl } from "@/lib/whatsapp-wishes";

describe("WhatsApp guest wishes", () => {
  it("addresses wishes to the bride's supplied WhatsApp number", () => {
    const url = new URL(whatsappWishesUrl("Riya", "Congratulations!"));
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/917976830060");
  });

  it("includes the guest name and exact wishes in the prefilled message", () => {
    const url = new URL(whatsappWishesUrl(" Riya Mehta ", " Wishing you joy & love! ♥\nशुभकामनाएँ "));
    expect(url.searchParams.get("text")).toBe("Dear Shreya,\n\nWishing you joy & love! ♥\nशुभकामनाएँ\n\nWith love,\nRiya Mehta");
  });
});