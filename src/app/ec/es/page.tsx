import { FutureHome } from "@/components/home/FutureHome";
import { homeMetadata } from "@/lib/homeMetadata";
export const metadata = homeMetadata("es", "ec");
export default function EcuadorSpanishPage() { return <FutureHome locale="es" market="ec"/>; }
