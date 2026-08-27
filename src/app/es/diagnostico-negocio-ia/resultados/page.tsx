import type { Metadata } from "next";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { DiagnosisBrandBar } from "@/components/diagnosis/DiagnosisBrandBar";
import { DiagnosisResults } from "@/components/diagnosis/DiagnosisResults";

const title = "Resultados de tu Diagnóstico de Negocio con IA | Next Studio";
const description = "Revisa tu puntuación de salud digital, las brechas en el recorrido del cliente y tus prioridades de crecimiento.";
export const metadata: Metadata = { title: { absolute: title }, description, robots: { index: false, follow: false, googleBot: { index: false, follow: false } } };
export default function SpanishDiagnosisResults() { return <><BrandHeader locale="es"/><DiagnosisBrandBar locale="es"/><DiagnosisResults locale="es"/><BrandFooter locale="es"/></>; }
