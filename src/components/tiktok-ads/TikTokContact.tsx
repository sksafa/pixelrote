import { contactItems } from "@/data/tiktokAdsData";
import MotionWrapper from "./MotionWrapper";

export default function TikTokContact() {
  return (
    <section id="contact" className="bg-[#f8fbff] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionWrapper>
          <div className="h-full rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5 md:p-9">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
              Request your TikTok Ads audit
            </h2>
            <p className="mb-8 leading-8 text-slate-500">
              Send your business details and we will review your ad goals,
              creative opportunities, audience targeting, and campaign growth
              potential.
            </p>

            <div className="grid gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#fff0f5] text-[#ff0050]">
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
              className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#ff0050] focus:ring-4 focus:ring-pink-100"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#ff0050] focus:ring-4 focus:ring-pink-100"
            />
            <input
              type="url"
              placeholder="Website URL"
              className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#ff0050] focus:ring-4 focus:ring-pink-100"
            />

            <select className="rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#ff0050] focus:ring-4 focus:ring-pink-100">
              <option>Select your advertising goal</option>
              <option>Generate Leads</option>
              <option>Increase Sales</option>
              <option>Grow Brand Awareness</option>
              <option>Test Video Creatives</option>
            </select>

            <textarea
              placeholder="Tell us about your business, audience, offer, budget, and TikTok Ads goals"
              className="min-h-36 resize-y rounded-2xl border border-[#dbe4f0] px-4 py-4 outline-none transition focus:border-[#ff0050] focus:ring-4 focus:ring-pink-100"
            />

            <button
              type="button"
              className="rounded-full bg-[#ff0050] px-7 py-4 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#cc0040]"
            >
              Send Ad Request
            </button>
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
}
