import { audiences } from "@/data/websiteDesignData";
import MotionWrapper from "./MotionWrapper";
import SectionHeader from "./SectionHeader";

export default function WebsiteAudience() {
  return (
    <section className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Who this website service is for" />

        <div className="grid gap-7 md:grid-cols-3">
          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionWrapper key={item.title} delay={index * 0.12}>
                <article className="group h-full rounded-[26px] bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#e0f2fe] text-[#0ea5e9] transition group-hover:scale-110">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-500">{item.description}</p>
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
