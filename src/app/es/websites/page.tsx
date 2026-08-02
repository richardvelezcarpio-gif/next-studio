import { permanentRedirect } from "next/navigation";

/** Legacy Spanish sharing URL. Keep it working so old posts resolve to the correct page. */
export default function LegacySpanishWebsites() {
  permanentRedirect("/es/paginas-web");
}
