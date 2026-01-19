import About from "@/components/About";
import BestSellers from "@/components/BestSellers";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Promo from "@/components/Promo";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <BestSellers />
      <Promo />
      <About />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
