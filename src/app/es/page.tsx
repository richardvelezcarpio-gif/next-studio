import { FutureHome } from "@/components/home/FutureHome";
import { homeMetadata } from "@/lib/homeMetadata";

export const metadata = homeMetadata("es", "us");
export default function SpanishHome() { return <FutureHome locale="es" market="us"/>; }
