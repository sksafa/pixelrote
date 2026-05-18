import { deliverables } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import MotionWrapper from "./MotionWrapper";


export default function Deliverables() {
    return (
        <section id="deliverables" className="section-padding bg-slate-50">
            <div className="container-custom">
                <SectionHeader
                    title="What’s included in our SEO service"
                    description="Everything your website needs to build a stronger foundation for organic search growth."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {deliverables.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <MotionWrapper key={item.title} delay={index * 0.12}>
                                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl hover:shadow-slate-900/10">
                                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 text-[#6c5ce7] transition group-hover:scale-110">
                                        <Icon size={27} />
                                    </div>
                                    <h3 className="mb-3 text-2xl font-extrabold text-slate-950">{item.title}</h3>
                                    <p className="mb-5 text-slate-500">{item.description}</p>
                                    <ul className="mb-6 grid gap-3">
                                        {item.features.map((feature) => (
                                            <li key={feature} className="flex gap-2 text-sm font-semibold text-slate-500">
                                                <span className="font-black text-cyan-500">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#contact" className="btn-primary w-full">{item.button}</a>
                                </article>
                            </MotionWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}