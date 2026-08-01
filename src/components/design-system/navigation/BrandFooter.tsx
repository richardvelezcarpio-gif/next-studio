import { site } from "@/config/site";
export function BrandFooter() { return <footer style={{ padding: "28px 24px", background: "var(--color-navy)", color: "white", textAlign: "center", fontSize: 14 }}>© {new Date().getFullYear()} {site.name}. All rights reserved.</footer>; }
