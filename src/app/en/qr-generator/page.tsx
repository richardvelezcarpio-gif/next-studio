import { QRGenerator } from "@/components/qr-generator/QRGenerator";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { createShareMetadata } from "@/lib/shareMetadata";
export const metadata=createShareMetadata({title:"Free QR Code Generator",description:"Create professional QR codes for websites, WhatsApp, Wi-Fi, contacts, email and more for free with Next Studio.",path:"/en/qr-generator",image:"/free-programs/free-programs-social.png",locale:"en_US"});
export default function Page(){return <><BrandHeader locale="en"/><QRGenerator locale="en"/><BrandFooter locale="en"/></>}
