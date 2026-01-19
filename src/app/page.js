import About from "@/components/About";
import BestSellers from "@/components/BestSellers";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <BestSellers />
      <Promo />
      <About />
    </div>
  );
}
