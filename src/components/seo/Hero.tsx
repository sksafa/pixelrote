"use client";

import { motion } from "framer-motion";
import { dashboardBars, heroStats, roadmapItems } from "@/data/siteData";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(108,92,231,0.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(0,206,201,0.16),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20 md:py-28"
    >
      <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <span className="mb-5 inline-flex rounded-full bg-[rgba(108,92,231,0.1)] px-4 py-2 text-sm font-extrabold text-[#4b3fc4]">
            🔎 SEO Service
          </span>
          <h1 className="mb-6 text-[35px] font-extrabold leading-[1.03] tracking-[-2px] text-slate-950 md:text-7xl">
            Rank higher on Google and attract <span className="gradient-text">high-intent organic traffic</span>.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
            PixelRoute helps your business improve search visibility, fix technical issues, optimize important pages, and build a long-term SEO strategy that brings qualified customers to your website.
          </p>

          <div className="mb-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Request Free SEO Audit</a>
            <a href="#deliverables" className="btn-outline">View Deliverables</a>
          </div>

          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            {heroStats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 * index }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5"
              >
                <strong className="block text-2xl font-extrabold text-slate-950">{item.title}</strong>
                <span className="text-sm font-bold text-slate-500">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <strong>SEO Growth Roadmap</strong>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">Organic Growth</span>
            </div>

            {dashboardBars.map((bar, index) => (
              <div key={bar.label} className="mb-4">
                <p className="mb-2 text-sm font-semibold text-slate-600">{bar.label}</p>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.value}%` }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.15 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#6c5ce7] to-[#00cec9]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.65 + index * 0.1 }}
                className="rounded-3xl bg-slate-50 p-5"
              >
                <b className="text-2xl font-extrabold">0{index + 1}</b>
                <p className="font-semibold text-slate-500">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}