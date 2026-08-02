export type SocialNetwork = "facebook" | "instagram" | "linkedin" | "x" | "youtube" | "tiktok" | "whatsapp" | "github";

export const socialLinks: Record<SocialNetwork, string> = {
  facebook: "",
  instagram: "",
  linkedin: "",
  x: "",
  youtube: "",
  tiktok: "",
  whatsapp: "https://wa.me/12393337935",
  github: "",
};

export const socialLabels: Record<SocialNetwork, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
  whatsapp: "WhatsApp",
  github: "GitHub",
};

export const configuredSocialLinks = (Object.entries(socialLinks) as [SocialNetwork, string][])
  .filter(([, url]) => Boolean(url));

export function getWhatsAppUrl(message?: string) {
  if (!socialLinks.whatsapp) return "";
  return message ? `${socialLinks.whatsapp}?text=${encodeURIComponent(message)}` : socialLinks.whatsapp;
}

export function getXHandle() {
  if (!socialLinks.x) return undefined;
  const match = socialLinks.x.match(/(?:x\.com|twitter\.com)\/([^/?#]+)/i);
  return match ? `@${match[1]}` : undefined;
}
