import { overviewPoints } from "@/data/websiteDesignData";
import MotionWrapper from "./MotionWrapper";

export default function WebsiteOverview() {
  return (
    <section id="overview" className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <MotionWrapper>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Websites designed for trust, clarity, and business growth.
          </h2>

          <p className="mb-4 text-base leading-8 text-slate-600 md:text-lg">
            Our Website Design & Development service is built for businesses
            that need a professional online presence, better user experience,
            and a website that supports marketing and sales.
          </p>

          <p className="text-base leading-8 text-slate-600 md:text-lg">
            This is not just a pretty layout. We focus on structure, speed,
            mobile responsiveness, clear messaging, and conversion-focused
            sections.
          </p>

          <ul className="my-7 grid gap-4">
            {overviewPoints.map((point) => (
              <li key={point} className="flex gap-3 font-semibold text-slate-700">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-100 text-sm font-black text-[#0ea5e9]">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#0ea5e9] px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0284c7]"
          >
            Start Website Project
          </a>
        </MotionWrapper>

        <MotionWrapper delay={0.14}>
          <div className="rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-2 md:p-10">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#e0f2fe] text-3xl">
              💻
            </div>
            <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
              Why a strong website matters
            </h3>
            <p className="leading-8 text-slate-500">
              Your website is often the first impression customers have of your
              business. A fast, clear, professional website helps build trust,
              explain your services, and convert visitors into leads or buyers.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
