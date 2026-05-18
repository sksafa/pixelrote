
import { audiences } from "@/data/siteData";
import MotionWrapper from "./MotionWrapper";
import SectionHeader from "./SectionHeader";;

export default function Audience() {
    return (
        <section className="section-padding relative overflow-hidden bg-[#0b1020] text-white">
            <div className="absolute -bottom-48 left-0 right-0 h-96 bg-[radial-gradient(circle,rgba(108,92,231,0.34),transparent_60%)]" />
            <div className="container-custom relative z-10">
                <SectionHeader
                    light
                    title="Who this SEO service is for"
                    description="This service is ideal for businesses that want long-term organic growth and better visibility on Google."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {audiences.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <MotionWrapper key={item.title} delay={index * 0.12}>
                                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.1]">
                                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-cyan-300">
                                        <Icon size={27} />
                                    </div>
                                    <h3 className="mb-3 text-2xl font-extrabold">{item.title}</h3>
                                    <p className="text-white/70">{item.description}</p>
                                </article>
                            </MotionWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}