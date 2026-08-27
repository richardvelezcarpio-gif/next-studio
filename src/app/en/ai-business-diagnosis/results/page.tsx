import type { Metadata } from "next";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { DiagnosisBrandBar } from "@/components/diagnosis/DiagnosisBrandBar";
import { DiagnosisResults } from "@/components/diagnosis/DiagnosisResults";

const title = "Your AI Business Diagnosis Results | Next Studio";
const description = "Review your digital health score, customer journey gaps, and personalized growth priorities.";
export const metadata: Metadata = { title: { absolute: title }, description, robots: { index: false, follow: false, googleBot: { index: false, follow: false } } };
export default function EnglishDiagnosisResults() { return <><BrandHeader locale="en"/><DiagnosisBrandBar locale="en"/><DiagnosisResults locale="en"/><BrandFooter locale="en"/></>; }
