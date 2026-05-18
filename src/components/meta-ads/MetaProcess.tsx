"use client";
import { processSteps } from "@/data/metaAdsData";
import MotionWrapper from "./MotionWrapper";
import SectionHeader from "./SectionHeader";

export default function MetaProcess() {
    return (
        <section id="process" className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <SectionHeader
                    title="Our Meta Ads process"
                    description="A clear workflow to launch better campaigns and improve advertising performance."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, index) => (
                        <MotionWrapper key={step.title} delay={index * 0.1}>
                            <div className="h-full rounded-3xl bg-[#f8fbff] p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10">
                                <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#1877f2] text-lg font-extrabold text-white">
                                    {index + 1}
                                </div>
                                <h3 className="mb-3 text-xl font-extrabold text-slate-950">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-7 text-slate-500">{step.description}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}