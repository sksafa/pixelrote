import { deliverables } from "@/data/businessAIData";
import MotionWrapper from "./MotionWrapper";
import SectionHeader from "./SectionHeader";

export default function BusinessAIDeliverables() {
  return (
    <section id="deliverables" className="bg-[#f8fffb] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="What’s included in our AI & Automation service"
          description="Everything your business needs to identify, build, and launch smarter automated workflows."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionWrapper key={item.title} delay={index * 0.12}>
                <article className="group h-full rounded-[26px] bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#d1fae5] text-[#10b981] transition duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mb-5 leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <ul className="mb-7 grid gap-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-2 font-semibold text-slate-600">
                        <span className="font-black text-[#10b981]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex w-full justify-center rounded-full bg-[#10b981] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#059669]"
                  >
                    {item.button}
                  </a>
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
