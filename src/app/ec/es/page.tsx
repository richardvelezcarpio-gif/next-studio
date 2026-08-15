import type { Metadata } from "next";
import { EcuadorHome } from "@/components/ecuador/EcuadorHome";
import { ecuadorMetadata } from "@/config/ecuador-seo";
export const metadata: Metadata = ecuadorMetadata("es", "home");
export default function EcuadorSpanishPage() { return <EcuadorHome locale="es" />; }
