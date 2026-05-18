"use client";

import { contactItems } from "@/data/metaAdsData";
import MotionWrapper from "./MotionWrapper";

export default function MetaContact() {
    return (
        <section id="contact" className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <MotionWrapper>
                    <div className="h-full rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 md:p-9">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
                            Request your Meta Ads audit
                        </h2>
                        <p className="mb-8 leading-8 text-slate-500">
                            Send your business details and we will review your ad goals, audience opportunities, and campaign growth potential.
                        </p>

                        <div className="grid gap-6">
                            {contactItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eaf3ff] text-[#1877f2]">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-lg font-extrabold text-slate-950">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-500">{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper delay={0.14}>
                    <form className="grid gap-4 rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 md:p-9">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-blue-100"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-blue-100"
                        />
                        <input
                            type="url"
                            placeholder="Website URL"
                            className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-blue-100"
                        />

                        <select className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-blue-100">
                            <option>Select your advertising goal</option>
                            <option>Generate Leads</option>
                            <option>Increase Sales</option>
                            <option>Improve ROAS</option>
                            <option>Retarget Visitors</option>
                        </select>

                        <textarea
                            placeholder="Tell us about your business, audience, budget, and advertising goals"
                            className="min-h-36 resize-y rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#1877f2] focus:ring-4 focus:ring-blue-100"
                        />

                        <button
                            type="button"
                            className="rounded-full bg-[#1877f2] px-7 py-4 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f5dcc]"
                        >
                            Send Ad Request
                        </button>
                    </form>
                </MotionWrapper>
            </div>
        </section>
    );
}