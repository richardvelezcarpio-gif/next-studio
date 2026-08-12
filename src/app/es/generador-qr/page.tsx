import { QRGenerator } from "@/components/qr-generator/QRGenerator";
import { BrandFooter } from "@/components/design-system/navigation/BrandFooter";
import { BrandHeader } from "@/components/design-system/navigation/BrandHeader";
import { createShareMetadata } from "@/lib/shareMetadata";
export const metadata=createShareMetadata({title:"Generador de Código QR Gratis",description:"Crea códigos QR profesionales gratis para páginas web, WhatsApp, Wi-Fi, contactos, email y más con Next Studio.",path:"/es/generador-qr",image:"/free-programs/free-programs-social.png",locale:"es_US"});
export default function Page(){return <><BrandHeader locale="es"/><QRGenerator locale="es"/><BrandFooter locale="es"/></>}
