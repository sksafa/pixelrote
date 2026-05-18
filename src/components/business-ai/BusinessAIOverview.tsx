import { overviewPoints } from "@/data/businessAIData";
import MotionWrapper from "./MotionWrapper";

export default function BusinessAIOverview() {
  return (
    <section id="overview" className="bg-[#f8fffb] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <MotionWrapper>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            AI and automation built around your real business workflow.
          </h2>

          <p className="mb-4 text-base leading-8 text-slate-600 md:text-lg">
            Our Business AI & Automation service is designed for companies that
            want to save time, reduce repetitive tasks, improve follow-ups, and
            connect their tools into a smoother operating system.
          </p>

          <p className="text-base leading-8 text-slate-600 md:text-lg">
            This is not random AI tool setup. We identify where automation can
            create real value, then build practical systems that support your
            team every day.
          </p>

          <ul className="my-7 grid gap-4">
            {overviewPoints.map((point) => (
              <li key={point} className="flex gap-3 font-semibold text-slate-700">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-black text-[#10b981]">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#10b981] px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#059669]"
          >
            Start Automation Project
          </a>
        </MotionWrapper>

        <MotionWrapper delay={0.14}>
          <div className="rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-2 md:p-10">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#d1fae5] text-3xl">
              🤖
            </div>
            <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
              Why AI automation matters
            </h3>
            <p className="leading-8 text-slate-500">
              AI and automation help your business respond faster, avoid missed
              leads, reduce manual admin tasks, improve team productivity, and
              create a more consistent customer experience.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
