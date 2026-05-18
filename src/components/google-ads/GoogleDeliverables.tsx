import { deliverables } from "@/data/googleAdsData";
import MotionWrapper from "./MotionWrapper";
import SectionHeader from "./SectionHeader";

export default function GoogleDeliverables() {
  return (
    <section id="deliverables" className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="What’s included in our Google Ads service" description="Everything your business needs to launch, manage, and improve paid search campaigns." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionWrapper key={item.title} delay={index * 0.12}>
                <article className="group h-full rounded-[26px] bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#eaf3ff] text-[#1a73e8] transition duration-300 group-hover:scale-110"><Icon size={28} /></div>
                  <h3 className="mb-3 text-2xl font-extrabold text-slate-950">{item.title}</h3>
                  <p className="mb-5 leading-7 text-slate-500">{item.description}</p>
                  <ul className="mb-7 grid gap-3">
                    {item.features.map((feature) => (<li key={feature} className="flex gap-2 font-semibold text-slate-600"><span className="font-black text-[#1a73e8]">✓</span>{feature}</li>))}
                  </ul>
                  <a href="#contact" className="inline-flex w-full justify-center rounded-full bg-[#1a73e8] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1558b0]">{item.button}</a>
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
