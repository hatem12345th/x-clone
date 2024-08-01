import "./globals.css";
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import SessionWrapper from "./components/SessionWrapper";

 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata = {
  title: " X Clone   ",
  description: " A clone  of X webSite build with Next.js ",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
<body className={cn(
          "min-h-screen bg-black font-sans antialiased",
        )}>
       
  
       <SessionWrapper>
      
       </SessionWrapper> 
          {children}
          
   
    </body>
    </html>
  );
}