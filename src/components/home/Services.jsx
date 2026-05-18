"use client";

import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Target,
  Music2,
  BarChart3,
  Laptop,
  Bot,
  Building2,
  ShoppingCart,
  Store,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

const services = [
  {
    icon: Search,
    title: "SEO",
    text: "Rank higher on Google and attract high-intent organic traffic.",
    list: ["Keyword research", "Technical SEO audit", "On-page optimization"],
    cta: "Get SEO Service",
    link: "/seo",
  },
  {
    icon: Megaphone,
    title: "Meta Pro Ads",
    text: "Performance-driven Facebook and Instagram campaigns.",
    list: ["Campaign setup", "Audience targeting", "Retargeting funnels"],
    cta: "Start Meta Ads",
    link: "/meta-ads",
  },
  {
    icon: Target,
    title: "Google Ads",
    text: "Capture buyers when they are searching for your services.",
    list: ["Search campaigns", "Display remarketing", "Conversion tracking"],
    cta: "Launch Google Ads",
    link: "/google-ads",
  },
  {
    icon: Music2,
    title: "TikTok Ads",
    text: "Reach fast-growing audiences with short-form video ads.",
    list: ["Creative strategy", "Pixel setup", "Campaign optimization"],
    cta: "Run TikTok Ads",
    link: "/tiktok-ads",
  },
  {
    icon: BarChart3,
    title: "Full Stack Digital Marketing",
    text: "Complete strategy, funnel, content, ads and reporting for growth.",
    list: ["Growth roadmap", "Analytics setup", "Monthly reports"],
    cta: "Book Consultation",
    link: "/digital-marketing",
  },
  {
    icon: Laptop,
    title: "Website Design & Development",
    text: "Responsive, fast, conversion-focused websites for your business.",
    list: ["Landing pages", "Business websites", "E-commerce development"],
    cta: "Build My Website",
    link: "/website-design",
  },
  {
    icon: Bot,
    title: "Business AI & Automation",
    text: "Automate repetitive work and improve business operations with AI.",
    list: ["AI chatbots", "CRM automation", "Workflow integrations"],
    cta: "Automate My Business",
    link: "/business-ai",
  },
  {
    icon: Building2,
    title: "SalesVission ERP System",
    text: "Complete smart sales, distribution, warehouse, finance and delivery ERP solution.",
    list: ["Sales automation", "Inventory management", "Advanced reporting"],
    cta: "Explore ERP System",
    link: "/salesvission-erp",
  },
  {
    icon: ShoppingCart,
    title: "Mesa Ecommerce Pro",
    text: "Advanced eCommerce CMS with inventory, delivery, analytics and marketing tools.",
    list: ["Unlimited products", "Live search & chat", "Advanced promotions"],
    cta: "View Ecommerce Pro",
    link: "/mesa-ecommerce",
  },
  {
    icon: Store,
    title: "Mesa Ecommerce Light",
    text: "Lightweight and fast eCommerce solution for small and growing businesses.",
    list: ["Quick setup", "Mobile responsive", "Simple management"],
    cta: "View Ecommerce Light",
    link: "/mesa-ecommerce",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Complete digital services for modern businesses
          </h2>

          <p className="text-lg text-slate-500">
            From search visibility to paid ads, websites, and AI automation, our
            team builds systems that bring measurable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 text-violet-700">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-2xl font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mb-5 text-slate-500">{item.text}</p>

                <ul className="mb-6 grid gap-2 text-sm font-medium text-slate-500">
                  {item.list.map((x) => (
                    <li key={x}>✓ {x}</li>
                  ))}
                </ul>

                <Button href={item.link} className="w-full">
                  {item.cta}
                </Button>
                {/* <Link href={item.link}>
                  <Button asChild className="w-full">
                    <span>{item.cta}</span>
                  </Button>
                </Link> */}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
