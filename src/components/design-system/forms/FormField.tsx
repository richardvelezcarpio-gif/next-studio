import type { InputHTMLAttributes } from "react";
export function FormField(props: InputHTMLAttributes<HTMLInputElement>) { return <input {...props} style={{ border: "1px solid var(--color-border)", borderRadius: 10, padding: 12, width: "100%" }} />; }
