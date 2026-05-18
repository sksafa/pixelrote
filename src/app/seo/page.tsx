import Contact from "@/components/contact/Contact";
import Audience from "@/components/seo/Audience";
import CTA from "@/components/seo/CTA";
import Deliverables from "@/components/seo/Deliverables";
import Hero from "@/components/seo/Hero";
import Overview from "@/components/seo/Overview";
import Process from "@/components/seo/Process";

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Hero />
      <Overview />
      <Deliverables />
      <Process />
      <Audience />
      <CTA />
      <Contact />
    </main>
  );
}
