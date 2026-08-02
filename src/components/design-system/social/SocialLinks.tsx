import type { IconType } from "react-icons";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { configuredSocialLinks, socialLabels, type SocialNetwork } from "@/config/social";
import s from "./SocialLinks.module.css";

const icons: Record<SocialNetwork, IconType> = { facebook: FaFacebookF, instagram: FaInstagram, linkedin: FaLinkedinIn, x: FaXTwitter, youtube: FaYoutube, tiktok: FaTiktok, whatsapp: FaWhatsapp, github: FaGithub };

export function SocialLinks({ networks, className = "" }: { networks?: SocialNetwork[]; className?: string }) {
  const links = configuredSocialLinks.filter(([network]) => !networks || networks.includes(network));
  if (!links.length) return null;
  return <nav className={`${s.links} ${className}`} aria-label="Social media links">{links.map(([network, url]) => { const Icon = icons[network]; return <a key={network} href={url} target="_blank" rel="noopener noreferrer" aria-label={socialLabels[network]} data-network={network}><Icon aria-hidden="true" /></a>; })}</nav>;
}
