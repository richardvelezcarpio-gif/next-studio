import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { createShareMetadata } from "@/lib/shareMetadata";

export const metadata = createShareMetadata({
  title: "Next Print NY Website Project | Next Studio",
  description: "See how Next Studio built the digital foundation for Next Print NY, a New York printing business, with a professional website focused on services, mobile usability and customer action.",
  path: "/en/projects/next-print-ny",
  image: "/images/projects/next-print-ny-mockup.png",
  locale: "en_US",
});

export default function Page() {
  const points = ["Clear service structure for a printing business", "Mobile-friendly customer experience", "Direct paths to contact and request service", "Search-ready technical foundation", "A platform that can grow with the business"];
  return <><BrandHeader locale="en" market="us"/><main style={{background:"#f5f9ff",color:"#09284b"}}>
    <section style={{background:"white",padding:"80px 24px 54px"}}><div style={{maxWidth:1120,margin:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:40,alignItems:"center"}}><div><p style={{color:"#146ef5",fontWeight:800}}>REAL NEW YORK BUSINESS PROJECT</p><h1 style={{fontSize:"clamp(2.7rem,6vw,5.2rem)",lineHeight:.98,letterSpacing:"-.055em",margin:"12px 0 22px"}}>Next Print NY: building a stronger digital foundation for a local printing business.</h1><p style={{fontSize:"1.12rem",lineHeight:1.7,color:"#55708d"}}>Next Print NY needed a professional digital presence that could explain its printing services clearly, work well on mobile and make it easier for customers to take the next step. Next Studio developed the website as a practical business platform—not just an online brochure.</p></div><Image src="/images/projects/next-print-ny-mockup.png" alt="Next Print NY website project by Next Studio" width={760} height={520} style={{width:"100%",height:"auto",borderRadius:22}}/></div></section>
    <section style={{maxWidth:1000,margin:"auto",padding:"70px 24px"}}><p style={{color:"#146ef5",fontWeight:800}}>THE BUSINESS NEED</p><h2 style={{fontSize:"clamp(2rem,4vw,3.4rem)",letterSpacing:"-.04em"}}>A website that supports how a real local business sells.</h2><p style={{fontSize:"1.08rem",lineHeight:1.75,color:"#55708d"}}>For a printing company, customers need to understand products, capabilities and how to request help quickly. The project focused on creating a clearer digital path between discovering the business and contacting it.</p><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14,marginTop:30}}>{points.map(x=><div key={x} style={{background:"white",padding:20,borderRadius:14,display:"flex",gap:10,boxShadow:"0 8px 30px #12345a10"}}><Check size={20}/><span>{x}</span></div>)}</div></section>
    <section style={{background:"#062044",color:"white",padding:"64px 24px"}}><div style={{maxWidth:1000,margin:"auto"}}><p style={{color:"#70baff",fontWeight:800}}>THE NEXT METHOD</p><h2 style={{fontSize:"clamp(2rem,4vw,3.4rem)"}}>Diagnosis → Website → Google → Traffic → Customers → Sales</h2><p style={{maxWidth:760,lineHeight:1.75,color:"#c8ddf5"}}>This project represents the same approach Next Studio offers to New York small businesses: understand the business first, build the right digital foundation, strengthen visibility, and improve using real data. We do not claim or guarantee search rankings.</p><div style={{display:"flex",gap:14,flexWrap:"wrap",marginTop:28}}><Link href="/en/web-design-nyc" style={{background:"#146ef5",color:"white",padding:"13px 18px",borderRadius:10,fontWeight:800}}>Web Design NYC <ArrowRight size={16} style={{verticalAlign:"middle"}}/></Link><a href="https://www.nextprintnyc.com" target="_blank" rel="noopener noreferrer" style={{color:"white",padding:"13px 18px",border:"1px solid #ffffff55",borderRadius:10,fontWeight:800}}>Visit Next Print NY</a></div></div></section>
  </main><BrandFooter locale="en" market="us"/></>;
}
