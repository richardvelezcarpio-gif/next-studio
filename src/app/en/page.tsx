import { FutureHome } from "@/components/home/FutureHome";
import { homeMetadata } from "@/lib/homeMetadata";

export const metadata = homeMetadata("en", "us");
export default function EnglishHome() { return <FutureHome locale="en" market="us"/>; }
