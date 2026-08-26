import type {Metadata} from "next";
import {BrandHeader} from "@/components/design-system/navigation/BrandHeader";
import {BrandFooter} from "@/components/design-system/navigation/BrandFooter";
import {BusinessDiagnosis} from "@/components/diagnosis/BusinessDiagnosis";
import {DiagnosisBrandBar} from "@/components/diagnosis/DiagnosisBrandBar";
const canonical="https://www.nextstudio.agency/en/ai-business-diagnosis";
const title="AI Business Diagnosis | Next Studio";
const description="Discover what is holding back your business growth with an advanced AI-powered digital business diagnosis.";
const image="https://www.nextstudio.agency/images/ai-diagnosis/ai-business-diagnosis-en.png";
export const metadata:Metadata={title:{absolute:title},description,alternates:{canonical,languages:{en:canonical,es:"https://www.nextstudio.agency/es/diagnostico-ia","x-default":canonical}},openGraph:{title,description,url:canonical,type:"website",locale:"en_US",images:[{url:image,width:1715,height:917,alt:title}]},twitter:{card:"summary_large_image",title,description,images:[image]}};
export default function EnglishDiagnosis(){return <><BrandHeader locale="en"/><DiagnosisBrandBar locale="en"/><BusinessDiagnosis locale="en"/><BrandFooter locale="en"/></>}
