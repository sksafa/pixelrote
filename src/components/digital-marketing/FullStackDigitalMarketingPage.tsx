"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  Mail,
  Megaphone,
  Rocket,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Globe2,
} from "lucide-react";
import Contact from "../contact/Contact";

type Deliverable = {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
  cta: string;
};

type Step = {
  title: string;
  description: string;
};

type Audience = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const deliverables: Deliverable[] = [
  {
    icon: Target,
    title: "Growth Roadmap",
    description:
      "We create a clear marketing roadmap that connects your business goals with practical action steps.",
    points: [
      "Marketing audit",
      "Channel priority plan",
      "90-day growth roadmap",
    ],
    cta: "Get Growth Roadmap",
  },
  {
    icon: Megaphone,
    title: "Campaign Planning",
    description:
      "We plan campaigns across key digital channels so your marketing works together clearly.",
    points: [
      "Campaign strategy",
      "Content and ad planning",
      "Funnel and offer structure",
    ],
    cta: "Plan My Campaigns",
  },
  {
    icon: BarChart3,
    title: "Analytics & Monthly Reports",
    description:
      "We set up tracking and provide clear reports to show what is working and what to improve.",
    points: ["Analytics setup", "KPI tracking", "Monthly performance reports"],
    cta: "Set Up Reporting",
  },
];

const steps: Step[] = [
  {
    title: "Audit",
    description:
      "We review your website, marketing channels, campaigns, analytics, audience, and growth gaps.",
  },
  {
    title: "Plan",
    description:
      "We create a growth roadmap, campaign plan, KPI structure, and channel strategy.",
  },
  {
    title: "Launch",
    description:
      "We help organize campaign execution across ads, SEO, content, email, funnels, and landing pages.",
  },
  {
    title: "Report",
    description:
      "We track results, prepare monthly reports, review insights, and recommend smarter next steps.",
  },
];

const audiences: Audience[] = [
  {
    icon: Rocket,
    title: "Growing Startups",
    description:
      "Build a complete marketing system with clear strategy, campaigns, analytics, and reporting.",
  },
  {
    icon: Building2,
    title: "Local Businesses",
    description:
      "Plan smarter campaigns and understand which channels bring calls, leads, and customers.",
  },
  {
    icon: ClipboardCheck,
    title: "Service Companies",
    description:
      "Generate qualified leads with connected strategy, landing pages, paid ads, SEO, and reporting.",
  },
];

const tags: string[] = [
  "Growth Roadmap",
  "Analytics Setup",
  "Monthly Reports",
  "Campaign Planning",
  "SEO & Ads",
  "Conversion Strategy",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function PrimaryButton({
  children,
  href = "#contact",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 sm:text-base ${
        light
          ? "bg-blue-50 text-blue-700 hover:bg-white"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
          <Sparkles className="h-4 w-4" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-semibold text-slate-700"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FullStackDigitalMarketingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,.16),transparent_28%),linear-gradient(180deg,#fff_0%,#f8fafc_100%)]">
        <div className="absolute inset-0 -z-10 " />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              <Rocket className="h-4 w-4" />
              Full Stack Digital Marketing
            </span>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Complete digital marketing strategy for smarter growth decisions.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Full Stack Growth Pro helps businesses plan, launch, track, and
              improve digital marketing campaigns with clear strategy, growth
              roadmaps, analytics setup, and monthly performance reports.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="#contact">
                Request Growth Audit
              </PrimaryButton>
              <PrimaryButton href="#deliverables" light>
                View Deliverables
              </PrimaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-2xl shadow-blue-200/50 backdrop-blur sm:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white">
                <TrendingUp className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Full Stack Marketing System
                </h3>
                <p className="mt-1 text-slate-600">
                  Campaign planning, channel strategy, analytics, reporting,
                  optimization, and growth roadmap.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2 }}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["Audit", "Plan", "Launch", "Report"].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-slate-50 p-4 text-center shadow-sm"
                >
                  <div className="text-xl font-black text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-700">
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="Full-stack marketing built around strategy, execution, and reporting."
              description="Our Full Stack Digital Marketing service is designed for businesses that want a complete marketing system instead of disconnected campaigns."
            />

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              We help you understand your audience, choose the right channels,
              plan campaigns, set up tracking, measure results, and make smarter
              growth decisions every month.
            </p>

            <div className="mt-7">
              <CheckList
                items={[
                  "Growth roadmap based on your goals and market",
                  "Campaign planning across SEO, ads, content, and funnels",
                  "Analytics setup for better tracking and reporting",
                  "Monthly reports with insights and next-step recommendations",
                ]}
              />
            </div>

            <div className="mt-8">
              <PrimaryButton href="#contact">
                Start Marketing Project
              </PrimaryButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl"
          >
            <LineChart className="mb-5 h-12 w-12 text-blue-600" />
            <h3 className="text-2xl font-extrabold text-slate-950">
              Why full-stack marketing matters
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Full-stack digital marketing connects strategy, campaigns,
              analytics, and reporting so your business can reduce wasted
              effort, improve performance, and make decisions based on real
              data.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="deliverables"
        className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            centered
            eyebrow="Deliverables"
            title="What’s included in our Full Stack Digital Marketing service"
            description="Everything your business needs to plan, launch, track, and improve marketing performance."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <CheckList items={item.points} />
                  </div>
                  <div className="mt-auto pt-7">
                    <PrimaryButton href="#contact">{item.cta}</PrimaryButton>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        id="process"
        className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            centered
            eyebrow="Process"
            title="Our Full Stack Digital Marketing process"
            description="A clear workflow to build strategy, launch campaigns, track performance, and improve results."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="rounded-[1.75rem] bg-slate-50 p-7 shadow-sm"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader centered title="Who this service is for" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <motion.article
                  key={audience.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] bg-white p-8 shadow-lg"
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    {audience.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {audience.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 px-6 py-14 text-center text-white shadow-2xl shadow-blue-200 sm:px-10 lg:py-20"
        >
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Ready to build a smarter marketing system?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
            Get a full-stack digital marketing roadmap with campaign planning,
            analytics setup, and monthly reports.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#contact" light>
              Book Growth Audit
            </PrimaryButton>
          </div>
        </motion.div>
      </section>

      <Contact />

      {/* <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-white p-7 shadow-xl sm:p-9"
          >
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              Request your marketing audit
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Send your business details and we will review your goals, current
              marketing, campaign needs, analytics setup, and growth
              opportunities.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-extrabold text-slate-950">
                  <Globe2 className="h-5 w-5 text-blue-600" />
                  Website
                </h3>
                <p className="mt-1 text-slate-600">
                  https://fullstackgrowthpro.com/
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-extrabold text-slate-950">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Email
                </h3>
                <p className="mt-1 text-slate-600">
                  hello@fullstackgrowthpro.com
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-extrabold text-slate-950">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  Service
                </h3>
                <p className="mt-1 leading-7 text-slate-600">
                  Full Stack Digital Marketing, growth roadmap, analytics setup,
                  campaign planning, monthly reports, and strategy consulting.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            onSubmit={(event) => event.preventDefault()}
            className="rounded-[2rem] bg-white p-7 shadow-xl sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <input
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              type="url"
              placeholder="Website URL"
            />

            <select className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
              <option>Select your marketing need</option>
              <option>Growth Roadmap</option>
              <option>Campaign Planning</option>
              <option>Analytics Setup</option>
              <option>Monthly Reports</option>
              <option>Full Marketing Strategy</option>
            </select>

            <textarea
              className="mt-4 min-h-36 w-full resize-y rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Tell us about your business, current marketing, goals, channels, analytics tools, and reporting needs"
            />

            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
            >
              Send Marketing Request
              <Send className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </section> */}
    </main>
  );
}
