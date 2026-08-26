import type {Metadata} from "next";
import {BrandHeader} from "@/components/design-system/navigation/BrandHeader";
import {BrandFooter} from "@/components/design-system/navigation/BrandFooter";
import {BusinessDiagnosis} from "@/components/diagnosis/BusinessDiagnosis";
import {DiagnosisBrandBar} from "@/components/diagnosis/DiagnosisBrandBar";
const canonical="https://www.nextstudio.agency/es/diagnostico-ia";
const title="Diagnóstico de Negocio con IA | Next Studio";
const description="Descubre qué está frenando el crecimiento de tu negocio con un diagnóstico digital avanzado impulsado por Inteligencia Artificial.";
const image="https://www.nextstudio.agency/images/ai-diagnosis/ai-business-diagnosis-es.png";
export const metadata:Metadata={title:{absolute:title},description,alternates:{canonical,languages:{es:canonical,en:"https://www.nextstudio.agency/en/ai-business-diagnosis","x-default":"https://www.nextstudio.agency/en/ai-business-diagnosis"}},openGraph:{title,description,url:canonical,type:"website",locale:"es_US",images:[{url:image,width:1734,height:907,alt:title}]},twitter:{card:"summary_large_image",title,description,images:[image]}};
export default function SpanishDiagnosis(){return <><BrandHeader locale="es"/><DiagnosisBrandBar locale="es"/><BusinessDiagnosis locale="es"/><BrandFooter locale="es"/></>}
