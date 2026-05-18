import { overviewPoints } from "@/data/siteData";
import MotionWrapper from "./MotionWrapper";

export default function Overview() {
    return (
        <section id="overview" className="section-padding bg-white">
            <div className="container-custom grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                <MotionWrapper>
                    <span className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-extrabold text-[#4b3fc4]">Service Overview</span>
                    <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
                        SEO that brings the right people to your website.
                    </h2>
                    <p className="mb-4 text-lg leading-8 text-slate-500">
                        Our SEO service is designed for businesses that want more visibility, more relevant traffic, and more qualified leads from Google.
                    </p>
                    <p className="mb-7 text-lg leading-8 text-slate-500">
                        This is not random traffic. We target high-intent search terms that your potential customers are already using.
                    </p>

                    <ul className="mb-8 grid gap-4">
                        {overviewPoints.map((point) => (
                            <li key={point} className="flex gap-3 font-bold text-slate-600">
                                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-100 text-sm text-cyan-700">✓</span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="btn-primary">Start SEO Project</a>
                </MotionWrapper>

                <MotionWrapper delay={0.15} className="flex min-h-[460px] items-end rounded-[2rem] bg-[linear-gradient(135deg,rgba(108,92,231,0.86),rgba(0,206,201,0.78)),url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center p-7 shadow-2xl shadow-slate-900/10">
                    <div className="max-w-sm rounded-3xl bg-white p-6 shadow-xl">
                        <h3 className="mb-2 text-2xl font-extrabold text-slate-950">Why SEO matters</h3>
                        <p className="text-slate-500">SEO helps your business appear when customers are actively searching, making it one of the strongest long-term marketing channels.</p>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}