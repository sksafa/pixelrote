"use client";

import { motion } from "framer-motion";
import { Settings, Zap, Database } from "lucide-react";

const products = [
  { icon: Settings, title: "Mesa Pro", text: "Advanced business management software for growing teams.", list: ["Automation dashboard", "Lead management", "Sales workflow"] },
  { icon: Zap, title: "Mesa Lite", text: "Lightweight software solution for small businesses and startups.", list: ["Easy setup", "Smart reporting", "Simple CRM"] },
  { icon: Database, title: "SalesVision Pro ERP", text: "ERP solution for sales, inventory, customer and operations management.", list: ["Sales pipeline", "Inventory tracking", "Business reports"] },
];

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24">
      <div className="absolute inset-x-[-20%] bottom-[-35%] h-[420px] bg-[radial-gradient(circle,rgba(124,58,237,.32),transparent_55%)]" />
      <div className="relative mx-auto w-[min(1180px,92%)]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Software solutions</h2>
          <p className="text-lg text-white/70">Your software products in clean, conversion-focused cards.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-cyan-300"><Icon size={28} /></div>
                <h3 className="mb-3 text-2xl font-extrabold">{item.title}</h3>
                <p className="mb-5 text-white/70">{item.text}</p>
                <ul className="grid gap-2 text-sm font-medium text-white/70">
                  {item.list.map((x) => <li key={x}>• {x}</li>)}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
