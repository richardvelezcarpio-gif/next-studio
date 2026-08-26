import { FutureHome } from "@/components/home/FutureHome";
import { homeMetadata } from "@/lib/homeMetadata";
export const metadata = homeMetadata("en", "ec");
export default function EcuadorEnglishPage() { return <FutureHome locale="en" market="ec"/>; }
