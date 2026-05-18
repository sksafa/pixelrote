// import { contactItems } from "@/data/siteData";
import { contactItems } from "@/data/siteData";
import MotionWrapper from "./MotionWrapper";
// import MotionWrapper from "./MotionWrapper";

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-slate-50">
            <div className="container-custom grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <MotionWrapper>
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                        <span className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-extrabold text-[#4b3fc4]">Contact PixelRoute</span>
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">Request your SEO audit</h2>
                        <p className="mb-7 text-slate-500">Send your website details and we will review your SEO needs, keyword opportunities, and technical improvements.</p>

                        <div className="grid gap-1">
                            {contactItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="flex gap-4 border-t border-slate-200 py-5">
                                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 text-[#6c5ce7]">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <strong className="block text-slate-950">{item.title}</strong>
                                            <span className="text-slate-500">{item.value}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper delay={0.15}>
                    <form className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-extrabold text-slate-700">Your Name</label>
                                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6c5ce7] focus:ring-4 focus:ring-violet-100" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-extrabold text-slate-700">Email Address</label>
                                <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6c5ce7] focus:ring-4 focus:ring-violet-100" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-extrabold text-slate-700">Website URL</label>
                                <input type="url" className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6c5ce7] focus:ring-4 focus:ring-violet-100" placeholder="https://yourwebsite.com" />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-extrabold text-slate-700">SEO Goal</label>
                                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6c5ce7] focus:ring-4 focus:ring-violet-100">
                                    <option>Select your goal</option>
                                    <option>Rank higher on Google</option>
                                    <option>Get more organic traffic</option>
                                    <option>Fix technical SEO issues</option>
                                    <option>Optimize website pages</option>
                                    <option>Need full SEO strategy</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-extrabold text-slate-700">Project Details</label>
                            <textarea className="min-h-36 w-full resize-y rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6c5ce7] focus:ring-4 focus:ring-violet-100" placeholder="Tell us about your business, target location, and SEO goals" />
                        </div>

                        <button type="button" className="btn-primary">Send SEO Request</button>
                    </form>
                </MotionWrapper>
            </div>
        </section>
    );
}