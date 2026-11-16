import { wedding } from "@/config/wedding";

export function whatsappWishesUrl(name: string, message: string) {
  const text = `Dear ${wedding.bride.short},\n\n${message.trim()}\n\nWith love,\n${name.trim()}`;
  return `https://wa.me/${wedding.wishesWhatsApp}?text=${encodeURIComponent(text)}`;
}