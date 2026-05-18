"use client";

import { motion } from "framer-motion";
import { heroIcon, tiktokHeroStats, tiktokHeroTags } from "@/data/tiktokAdsData";

export default function TikTokHero() {
  const HeroIcon = heroIcon;

  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#fff0f5] via-white to-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#fff0f5] px-4 py-2 text-sm font-extrabold text-[#ff0050]">
            <HeroIcon size={18} /> TikTok Ads Service
          </span>

          <h1 className="mb-6 text-[38px] font-extrabold leading-[1.08] tracking-[-1.5px] text-slate-950 sm:text-5xl lg:text-6xl">
            Turn attention into leads, sales, and brand growth.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            TikTok Growth Ads helps your business create, launch, and optimize
            scroll-stopping TikTok ad campaigns that reach the right audience and
            drive measurable results.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#ff0050] px-6 py-3.5 font-bold text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#cc0040]"
            >
              Request Free Ad Audit
            </a>
            <a
              href="#deliverables"
              className="inline-flex rounded-full bg-[#fff0f5] px-6 py-3.5 font-bold text-[#ff0050] transition-all duration-300 hover:-translate-y-1 hover:bg-pink-100"
            >
              View Deliverables
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="rounded-[28px] bg-white p-6 shadow-2xl shadow-pink-500/15 md:p-9"
        >
          <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
            TikTok Ads Growth System
          </h3>
          <p className="text-slate-500">
            Creative strategy, audience targeting, video ad testing, campaign
            tracking, and optimization.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {tiktokHeroTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 + index * 0.06 }}
                className="rounded-full bg-[#fff0f5] px-4 py-2 text-sm font-bold text-[#ff0050]"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiktokHeroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
                className="rounded-2xl bg-[#f8fbff] p-5 text-center font-extrabold text-[#ff0050]"
              >
                <span className="block text-xl">{stat.number}</span>
                <span className="text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
