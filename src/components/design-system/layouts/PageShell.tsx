import type { ReactNode } from "react";
import { BrandFooter } from "../navigation/BrandFooter";
import { BrandHeader } from "../navigation/BrandHeader";
export function PageShell({ locale, children }: { locale: "en" | "es"; children: ReactNode }) { return <><BrandHeader locale={locale} /><main>{children}</main><BrandFooter locale={locale} /></>; }
