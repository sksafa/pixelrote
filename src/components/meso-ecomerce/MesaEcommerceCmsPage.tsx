"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Boxes,
  CheckCircle2,
  CreditCard,
  Gauge,
  Headphones,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  Palette,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Truck,
  UsersRound,
  Zap,
} from "lucide-react";
import Contact from "../contact/Contact";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
};

type UseCase = {
  title: string;
  description: string;
};

const heroStats = [
  { label: "Performance", value: "ms" },
  { label: "Research", value: "10+" },
  { label: "Permissions", value: "50+" },
  { label: "Scale", value: "∞" },
];

const keyFeatures: Feature[] = [
  {
    icon: Gauge,
    title: "Lightning-Fast Performance",
    description:
      "Highly optimized architecture that loads pages quickly and keeps shopping smooth during high traffic.",
    points: [
      "Faster browsing",
      "Better SEO",
      "Higher conversion",
      "Smooth experience",
    ],
  },
  {
    icon: Search,
    title: "Live Search System",
    description:
      "Customers can start typing and instantly discover products without pressing the search button.",
    points: [
      "Instant product results",
      "Faster discovery",
      "Improved shopping flow",
    ],
  },
  {
    icon: MessageCircle,
    title: "Live Chat & WhatsApp",
    description:
      "Built-in live chat and WhatsApp integration help customers ask questions and get support instantly.",
    points: ["Real-time support", "Product inquiries", "Better engagement"],
  },
  {
    icon: BadgePercent,
    title: "Coupons & Promotions",
    description:
      "Create flexible promotional campaigns with percentage discounts, fixed discounts, time limits, and customer-specific offers.",
    points: ["Limited-time offers", "Category discounts", "Customer coupons"],
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description:
      "Build a unique store identity with flexible design options, color combinations, and custom branding.",
    points: ["Custom UI", "Store branding", "Flexible colors"],
  },
  {
    icon: SlidersHorizontal,
    title: "Product Variations",
    description:
      "Create unlimited product variations for size, color, material, style, and custom attributes.",
    points: ["Fashion ready", "Electronics ready", "Custom attributes"],
  },
];

const commerceTools: Feature[] = [
  {
    icon: ShoppingBag,
    title: "Quick Order & Guest Shopping",
    description:
      "Reduce checkout friction with quick add-to-cart, fast checkout, and guest shopping support.",
    points: ["Fast checkout", "No account required", "Higher conversion"],
  },
  {
    icon: PackageCheck,
    title: "Pre-Order System",
    description:
      "Launch upcoming products, validate demand, and collect early reservations before stock arrives.",
    points: ["Early reservations", "Launch campaigns", "Demand validation"],
  },
  {
    icon: Boxes,
    title: "Branch Inventory",
    description:
      "Manage multi-branch inventory with branch-level stock control, synchronization, and location monitoring.",
    points: ["Branch stock", "Inventory sync", "Location monitoring"],
  },
  {
    icon: Truck,
    title: "Delivery Management",
    description:
      "Handle delivery fees, assign delivery staff, track progress, and manage delivery operations efficiently.",
    points: ["Zone fees", "Distance fees", "Delivery tracking"],
  },
  {
    icon: CreditCard,
    title: "Multiple Payments",
    description:
      "Support online gateways, mobile banking, credit/debit cards, and cash on delivery.",
    points: ["Online payment", "Mobile banking", "COD support"],
  },
  {
    icon: UsersRound,
    title: "Employee Management",
    description:
      "Create custom staff roles with 50+ core-level permission controls for secure operations.",
    points: ["Admin roles", "Store operators", "Delivery staff"],
  },
];

const adminFeatures = [
  "Smart admin dashboard with quick navigation",
  "Global admin search for products, orders, and customers",
  "SMS notifications for order and delivery updates",
  "Header and footer script insertion for Meta Pixel, Google Analytics, and GTM",
  "Secure authentication, activity logging, and role-based access",
  "Advanced support ticket option for custom development requests",
];

const useCases: UseCase[] = [
  {
    title: "Clothing Brands",
    description:
      "Manage sizes, colors, styles, promotions, sliders, pre-orders, and fast checkout from one platform.",
  },
  {
    title: "Grocery Stores",
    description:
      "Run branch inventory, delivery fee logic, guest shopping, quick orders, and SMS notifications.",
  },
  {
    title: "Electronics Shops",
    description:
      "Use product comparison, specifications, variations, pre-orders, coupons, and payment integrations.",
  },
  {
    title: "Multi-Branch Retail",
    description:
      "Control stock by branch, assign delivery staff, monitor orders, and scale without product limits.",
  },
];

function Button({
  children,
  href = "#contact",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "light";
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition sm:text-base ${
        variant === "light"
          ? "bg-white text-blue-700 hover:bg-blue-50"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
          <Sparkles className="h-4 w-4" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
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

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg transition hover:shadow-2xl"
    >
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-extrabold text-slate-950">
        {feature.title}
      </h3>
      <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
      <div className="mt-6">
        <CheckList items={feature.points} />
      </div>
    </motion.article>
  );
}

export default function MesaEcommerceCmsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,.16),transparent_28%),linear-gradient(180deg,#fff_0%,#f8fafc_100%)]">
        <div className="absolute inset-0 -z-10" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              <Zap className="h-4 w-4" />
              Mesa eCommerce CMS · A Product of Anbar Software
            </span>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Smart, scalable & lightning-fast eCommerce platform.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Mesa eCommerce CMS helps modern businesses manage products,
              customers, orders, payments, delivery, inventory, promotions, and
              marketing from one powerful platform.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Request Demo</Button>
              <Button href="#features" variant="light">
                Explore Features
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-2xl shadow-blue-200/50 backdrop-blur sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Complete Commerce OS
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Built for clothing brands, grocery stores, electronics shops,
                  food businesses, and multi-branch retail chains.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm"
                >
                  <div className="text-3xl font-black text-blue-600">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-700">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-6 text-white">
              <h4 className="text-xl font-black">No limits on growth</h4>
              <p className="mt-2 leading-7 text-blue-50">
                Mesa supports unlimited products, brands, and visitors so your
                store can scale confidently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Platform Overview"
              title="One CMS for online and offline commerce."
              description="Mesa combines beautiful design, powerful inventory control, advanced marketing tools, and high-speed performance to deliver an outstanding shopping experience."
            />

            <div className="mt-8">
              <CheckList
                items={[
                  "Manage products, customers, orders, payments, delivery, and marketing",
                  "Use live search, live chat, coupons, popups, sliders, and product comparison",
                  "Control branch inventory, staff roles, permissions, and delivery operations",
                  "Integrate Meta Pixel, Google Analytics, Google Tag Manager, and tracking scripts",
                ]}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl"
          >
            <ShieldCheck className="mb-5 h-12 w-12 text-blue-600" />
            <h3 className="text-2xl font-extrabold text-slate-950">
              Secure, flexible, scalable
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Mesa is built with secure authentication, data protection,
              role-based access, activity logging, flexible customization, and
              support for business-specific workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Advanced Features"
            title="Everything your online store needs to sell faster."
            description="Mesa includes speed, search, chat, promotions, customization, comparison, recently viewed products, sliders, variations, and more."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Operations"
            title="Commerce operations made simple."
            description="From checkout to inventory, delivery, payment, and staff permissions, Mesa helps you run daily operations with control."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commerceTools.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              eyebrow="Admin & Marketing"
              title="Smart admin panel with marketing-ready integrations."
              description="Mesa gives businesses a fast admin dashboard, global search, SMS notifications, script integrations, and secure access controls."
            />

            <div className="mt-8 rounded-[2rem] bg-white p-7 shadow-xl">
              <CheckList items={adminFeatures} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {[
              {
                icon: LayoutDashboard,
                title: "Smart Dashboard",
                text: "Quick navigation and store performance monitoring.",
              },
              {
                icon: BarChart3,
                title: "Tracking Scripts",
                text: "Add Meta Pixel, GA, GTM, and marketing scripts.",
              },
              {
                icon: LockKeyhole,
                title: "Secure Access",
                text: "Role-based permission control and activity logging.",
              },
              {
                icon: Headphones,
                title: "Support Ready",
                text: "Request additional functionality through support tickets.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.75rem] bg-white p-7 shadow-lg"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Use Cases"
            title="Built for different types of modern businesses."
            description="Mesa is suitable for product-heavy stores, fast-moving retail, online brands, and multi-branch operations."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-2xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 px-6 py-14 text-center text-white shadow-2xl shadow-blue-200 sm:px-10 lg:py-20"
        >
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Let Mesa grow your business without boundaries.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
            Manage products, customers, orders, payments, delivery, inventory,
            and marketing from one powerful platform. Your store. Your rules.
            Your growth.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#contact" variant="light">
              Request Demo
            </Button>
            <Button href="#features" variant="light">
              View Features
            </Button>
          </div>
        </motion.div>
      </section>

      <Contact />

      {/* <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-white p-7 shadow-xl sm:p-9"
          >
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              Customize Mesa for your business.
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Mesa can be customized for branding, design, features, modules,
              workflows, integrations, and automation. Advanced custom
              development may include additional cost depending on complexity.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Branding & design",
                "Features & modules",
                "Business workflows",
                "Integrations & automation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 32 }}
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
              type="text"
              placeholder="Business / Store Name"
            />

            <select className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
              <option>Select business type</option>
              <option>Clothing Brand</option>
              <option>Grocery Store</option>
              <option>Electronics Shop</option>
              <option>Food Business</option>
              <option>Multi-Branch Retail</option>
              <option>Other</option>
            </select>

            <textarea
              className="mt-4 min-h-36 w-full resize-y rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Tell us about your products, branches, payment needs, delivery system, and customization requirements"
            />

            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
            >
              Send Request
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </section> */}
    </main>
  );
}
