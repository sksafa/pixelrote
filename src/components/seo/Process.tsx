import { processSteps } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import MotionWrapper from "./MotionWrapper";

export default function Process() {
    return (
        <section id="process" className="section-padding bg-white">
            <div className="container-custom">
                <SectionHeader
                    title="Our SEO process"
                    description="A clear step-by-step workflow to improve your website visibility and build sustainable search growth."
                />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, index) => (
                        <MotionWrapper key={step.title} delay={index * 0.1}>
                            <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10">
                                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-lg font-extrabold text-white">
                                    {index + 1}
                                </div>
                                <h3 className="mb-2 text-xl font-extrabold text-slate-950">{step.title}</h3>
                                <p className="text-sm leading-6 text-slate-500">{step.description}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}