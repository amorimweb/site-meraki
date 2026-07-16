import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./hero-refinement.css";

const serif=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],style:["normal","italic"],variable:"--font-serif"});
const sans=Manrope({subsets:["latin"],variable:"--font-sans"});

export const metadata:Metadata={title:"Meraki | Clínica Médica, Massagem e Estética Avançada",description:"Clínica médica, massagem terapêutica, estética avançada e depilação a laser em Parauapebas, PA.",icons:{icon:"/meraki-logo-transparent-v2.png",shortcut:"/meraki-logo-transparent-v2.png"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>}
