import type { ReactNode } from "react";
import { Container } from "./Container";
export function Section({ children }: { children: ReactNode }) { return <section style={{ padding: "72px 0" }}><Container>{children}</Container></section>; }
