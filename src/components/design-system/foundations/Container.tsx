import type { ReactNode } from "react";
export function Container({ children }: { children: ReactNode }) { return <div style={{ width: "min(var(--container), calc(100% - 48px))", margin: "0 auto" }}>{children}</div>; }
