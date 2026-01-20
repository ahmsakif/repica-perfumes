import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/ScrollToTop";


const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
})

export const metadata = {
  title: "Repica | Signature Scents",
  description: "Find your signature perfume.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${jakarta.variable} ${inter.variable} antialiased font-sans`}
      >
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen"> 
          {children}
        </main>
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
