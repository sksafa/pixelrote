import MotionWrapper from "./MotionWrapper";


export default function CTA() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <MotionWrapper>
                    <div className="flex flex-col gap-7 rounded-[2rem] bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] p-8 text-white shadow-2xl shadow-violet-500/20 md:flex-row md:items-center md:justify-between md:p-12">
                        <div>
                            <h2 className="mb-3 text-3xl font-extrabold leading-tight md:text-5xl">Ready to improve your Google rankings?</h2>
                            <p className="max-w-2xl text-white/80">Get a professional SEO audit and discover what is stopping your website from ranking higher.</p>
                        </div>
                        <a href="#contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3.5 font-extrabold text-[#4b3fc4] transition hover:-translate-y-1">
                            Book Free SEO Audit
                        </a>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}