"use client";
import { overviewPoints } from "@/data/metaAdsData";
import MotionWrapper from "./MotionWrapper";

export default function MetaOverview() {
    return (
        <section id="overview" className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <MotionWrapper>
                    <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
                        Meta ads that reach the right people and drive action.
                    </h2>

                    <p className="mb-4 text-base leading-8 text-slate-600 md:text-lg">
                        Our Meta Ads service is designed for businesses that want more leads, more sales, and better return from Facebook and Instagram advertising.
                    </p>

                    <p className="text-base leading-8 text-slate-600 md:text-lg">
                        This is not random boosting. We create targeted campaigns for people most likely to become customers.
                    </p>

                    <ul className="my-7 grid gap-4">
                        {overviewPoints.map((point) => (
                            <li key={point} className="flex gap-3 font-semibold text-slate-700">
                                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-sm font-black text-[#1877f2]">
                                    ✓
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex rounded-full bg-[#1877f2] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f5dcc]"
                    >
                        Start Meta Ads Project
                    </a>
                </MotionWrapper>

                <MotionWrapper delay={0.14}>
                    <div className="rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-2 md:p-10">
                        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#eaf3ff] text-3xl">
                            📣
                        </div>
                        <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
                            Why Meta Ads matter
                        </h3>
                        <p className="leading-8 text-slate-500">
                            Meta Ads help your business reach potential customers where they already spend time, making it one of the fastest ways to generate awareness, leads, and sales.
                        </p>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}