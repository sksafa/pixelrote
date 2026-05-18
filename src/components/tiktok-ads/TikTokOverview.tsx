import { overviewPoints } from "@/data/tiktokAdsData";
import MotionWrapper from "./MotionWrapper";

export default function TikTokOverview() {
  return (
    <section id="overview" className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <MotionWrapper>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            TikTok ads built for attention, engagement, and conversions.
          </h2>

          <p className="mb-4 text-base leading-8 text-slate-600 md:text-lg">
            Our TikTok Ads service is designed for businesses that want to reach
            active audiences, test strong creative angles, and turn short-form
            video attention into real business growth.
          </p>

          <p className="text-base leading-8 text-slate-600 md:text-lg">
            This is not random posting or boosting. We build paid campaigns
            around audience behavior, creative hooks, campaign goals, and
            conversion-focused optimization.
          </p>

          <ul className="my-7 grid gap-4">
            {overviewPoints.map((point) => (
              <li key={point} className="flex gap-3 font-semibold text-slate-700">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-100 text-sm font-black text-[#ff0050]">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#ff0050] px-6 py-3.5 font-bold text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#cc0040]"
          >
            Start TikTok Ads Project
          </a>
        </MotionWrapper>

        <MotionWrapper delay={0.14}>
          <div className="rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-2 md:p-10">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#fff0f5] text-3xl">
              🎵
            </div>
            <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
              Why TikTok Ads matter
            </h3>
            <p className="leading-8 text-slate-500">
              TikTok Ads help your brand reach people through engaging
              short-form content, making it a powerful channel for awareness,
              product discovery, leads, and sales.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
