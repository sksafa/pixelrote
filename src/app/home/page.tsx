import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import About from "@/components/home/About";
import Process from "@/components/home/Process";

export default function home() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <About />
      <Process />
    </main>
  );
}
