"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,.16),transparent_28%),linear-gradient(180deg,#fff_0%,#f8fafc_100%)] py-20 lg:py-24"
    >
      <div className="mx-auto grid w-[min(1180px,92%)] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-extrabold text-violet-700">
            <Zap size={16} /> Digital Marketing Agency
          </span>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.02] tracking-[-2px] text-slate-950 md:text-7xl">
            Scale your business with{" "}
            <span className="bg-gradient-to-br from-violet-600 to-cyan-400 bg-clip-text text-transparent">
              ads, SEO, AI & automation
            </span>
            .
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-500 md:text-xl">
            We help brands generate leads, improve visibility, launch
            high-converting websites, automate workflows, and grow profitably
            through performance marketing.
          </p>
          <div className="mb-9 flex flex-wrap gap-4">
            <Button>Start Your Project</Button>
            <Button href="#services" variant="outline">
              Explore Services
            </Button>
          </div>
          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["4.8x", "Average ROAS Growth"],
              ["120+", "Projects Completed"],
              ["24/7", "Automation Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5"
              >
                <strong className="block text-3xl leading-none text-slate-950">
                  {value}
                </strong>
                <span className="mt-2 block text-sm font-semibold text-slate-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur"
        >
          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex items-center justify-between">
                <strong className="flex items-center gap-2">
                  <TrendingUp size={20} /> Marketing Performance
                </strong>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                  Live Growth
                </span>
              </div>
              {[
                ["SEO Traffic", "86%"],
                ["Ad Conversions", "74%"],
                ["Automation Efficiency", "92%"],
              ].map(([label, width]) => (
                <div key={label} className="mb-4">
                  <p className="mb-2 text-sm font-semibold text-slate-600">
                    {label}
                  </p>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-400"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <b className="text-3xl">+68%</b>
                <p className="text-slate-500">Lead Quality</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <b className="text-3xl">-32%</b>
                <p className="text-slate-500">Cost Per Lead</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
