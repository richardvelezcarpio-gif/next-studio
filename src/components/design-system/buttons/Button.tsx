import type { ButtonHTMLAttributes } from "react";
export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button {...props} style={{ border: 0, borderRadius: 10, padding: "12px 18px", background: "var(--color-blue)", color: "white", fontWeight: 700 }}>{children}</button>; }
