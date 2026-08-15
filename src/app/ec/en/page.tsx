import type { Metadata } from "next";
import { EcuadorHome } from "@/components/ecuador/EcuadorHome";
import { ecuadorMetadata } from "@/config/ecuador-seo";
export const metadata: Metadata = ecuadorMetadata("en", "home");
export default function EcuadorEnglishPage() { return <EcuadorHome locale="en" />; }
