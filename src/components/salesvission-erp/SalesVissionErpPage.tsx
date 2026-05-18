"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  Barcode,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  CloudCog,
  CreditCard,
  DatabaseBackup,
  FileBarChart,
  Globe2,
  Landmark,
  LockKeyhole,
  PackageSearch,
  ReceiptText,
  RefreshCcw,
  Route,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";
import Contact from "../contact/Contact";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
};

const heroStats = [
  { label: "User Roles", value: "62+" },
  { label: "Reports", value: "20+" },
  { label: "Business Scale", value: "∞" },
  { label: "Backup", value: "Daily" },
];

const keyFeatures: Feature[] = [
  {
    icon: Smartphone,
    title: "Salesman Mobile Application",
    description:
      "A dedicated mobile app for field sales representatives to collect orders, add shops, track visits, and manage sales routes.",
    points: [
      "Order collection",
      "New shop entry",
      "GPS visit tracking",
      "Route management",
    ],
  },
  {
    icon: Store,
    title: "Shop & Retailer Management",
    description:
      "Manage unlimited retail shops with customer history, credit limits, categories, and location segmentation.",
    points: [
      "Unlimited shops",
      "Purchase history",
      "Credit limits",
      "Location segmentation",
    ],
  },
  {
    icon: Target,
    title: "Sales Performance Monitoring",
    description:
      "Track targets, salesperson performance, territory analytics, and daily, weekly, or monthly reports.",
    points: [
      "Target management",
      "Sales tracking",
      "Territory analytics",
      "Performance reports",
    ],
  },
  {
    icon: BadgeDollarSign,
    title: "Automated Commission System",
    description:
      "Create flexible commission rules for products, targets, incentives, and real-time staff commission tracking.",
    points: [
      "Custom rules",
      "Product commission",
      "Target incentives",
      "Live tracking",
    ],
  },
  {
    icon: Warehouse,
    title: "Heavy Inventory & Warehouse",
    description:
      "Run large-scale inventory with multi-warehouse control, stock transfer, low stock alerts, and batch tracking.",
    points: [
      "Multi-warehouse",
      "Stock transfer",
      "Low stock alerts",
      "Batch & lot tracking",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Reverse Product Search",
    description:
      "Use image recognition to search products by image and quickly find similar products for faster order taking.",
    points: [
      "Image search",
      "Similar products",
      "Fast order taking",
      "AI assistance",
    ],
  },
];

const operationFeatures: Feature[] = [
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description:
      "Manage delivery assignment, driver tracking, route optimization, delivery status, and performance reports.",
    points: [
      "Driver tracking",
      "Route optimization",
      "Delivery status",
      "Performance reports",
    ],
  },
  {
    icon: Globe2,
    title: "Built-in eCommerce",
    description:
      "Handle online customer orders, order processing, inventory synchronization, and delivery scheduling.",
    points: [
      "Online orders",
      "Order processing",
      "Inventory sync",
      "Delivery scheduling",
    ],
  },
  {
    icon: ShoppingCart,
    title: "POS System",
    description:
      "Complete point of sale system for physical stores with barcode scanning, fast checkout, payments, and reports.",
    points: [
      "Barcode scanning",
      "Fast checkout",
      "Digital payment",
      "POS reports",
    ],
  },
  {
    icon: Barcode,
    title: "Barcode Management",
    description:
      "Use barcode-based product identification, order scanning, warehouse barcode management, and fast stock operations.",
    points: [
      "Product barcode",
      "Order scanning",
      "Warehouse barcode",
      "Fast stock control",
    ],
  },
  {
    icon: ReceiptText,
    title: "VAT & Tax Management",
    description:
      "Automate VAT calculations, tax invoices, compliance reporting, and country-specific tax configurations.",
    points: [
      "VAT calculation",
      "Tax invoices",
      "Compliance reports",
      "Tax configuration",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Return & Refund",
    description:
      "Track product returns, damaged goods, refunds, and return analytics from one organized module.",
    points: [
      "Return tracking",
      "Damage management",
      "Refund processing",
      "Return analytics",
    ],
  },
];

const financeFeatures: Feature[] = [
  {
    icon: Calculator,
    title: "Expense & Financial Management",
    description:
      "Track expenses, cost centers, operational costs, and financial reports for daily business control.",
    points: [
      "Expense tracking",
      "Cost centers",
      "Operational control",
      "Financial reporting",
    ],
  },
  {
    icon: Landmark,
    title: "Full Business Accounting",
    description:
      "Access profit & loss, break-even analysis, cash flow reports, balance sheet, and dashboards.",
    points: [
      "Profit & loss",
      "Break-even analysis",
      "Cash flow",
      "Balance sheet",
    ],
  },
  {
    icon: PackageSearch,
    title: "Purchase & Procurement",
    description:
      "Manage suppliers, purchase orders, procurement tracking, and purchase cost analysis.",
    points: [
      "Supplier management",
      "Purchase orders",
      "Procurement tracking",
      "Cost analysis",
    ],
  },
  {
    icon: CreditCard,
    title: "Cash & Money Management",
    description:
      "Track cash collection, payment reconciliation, cash flow, and personal wallets for salesmen.",
    points: [
      "Cash collection",
      "Payment reconciliation",
      "Cash flow",
      "Salesman wallet",
    ],
  },
];

const systemFeatures = [
  "Role-based access control with 62+ different user roles",
  "Advanced reporting system with 20+ sales, inventory, profit, product, salesman, and financial reports",
  "Complete activity log with user tracking, order history, system modification logs, and audit trails",
  "Automated daily database backup, secure storage, quick restore, and data protection",
  "Custom modules, API integrations, industry-specific features, and business automation solutions",
  "Enterprise-grade security, scalable architecture, and high-performance cloud deployment",
];

const techStack = [
  { title: "Frontend", items: ["React.js"] },
  { title: "Backend", items: ["Laravel", "Python"] },
  { title: "Mobile Apps", items: ["Flutter", "Android & iOS"] },
  {
    title: "Infrastructure",
    items: ["Secure cloud deployment", "High-performance architecture"],
  },
];

const useCases = [
  {
    title: "Distribution Companies",
    description:
      "Digitize sales operations, warehouse control, delivery, accounting, and retailer management.",
  },
  {
    title: "Importers",
    description:
      "Manage thousands of SKUs, supplier purchases, inventory movement, taxes, and sales reporting.",
  },
  {
    title: "Manufacturers",
    description:
      "Control production sales flow, procurement, warehouse stock, delivery, POS, and finance modules.",
  },
  {
    title: "Supply Chain Businesses",
    description:
      "Coordinate field sales, logistics, multi-warehouse inventory, payment collection, and analytics.",
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

export default function SalesVissionErpPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#bfdbfe,_transparent_35%),radial-gradient(circle_at_bottom_right,_#ddd6fe,_transparent_34%),linear-gradient(135deg,_#eff6ff,_#ffffff_55%,_#f8fafc)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              <Zap className="h-4 w-4" />
              SalesVission ERP · A Product of Anbar Software
            </span>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Complete smart sales & distribution management system.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              SalesVission ERP transforms traditional sales operations into a
              fully digital, automated, and data-driven system for distribution
              companies, importers, manufacturers, and supply chain businesses.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Request ERP Demo</Button>
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
                <Route className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Sales Growth Engine
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Field sales automation, warehouse inventory, delivery,
                  accounting, eCommerce, POS, and analytics in one ecosystem.
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
              <h4 className="text-xl font-black">Enterprise-grade ERP</h4>
              <p className="mt-2 leading-7 text-blue-50">
                Manage thousands of products, warehouses, retail partners, sales
                teams, and business reports with real-time intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="ERP Overview"
              title="A single platform for sales, stock, delivery, finance, and reporting."
              description="SalesVission ERP helps managers and executives improve operational efficiency, reduce errors, monitor performance, control inventory, and maximize profitability through intelligent reporting and automation."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Field sales automation with GPS visits and route management",
                  "Warehouse inventory control with batch, lot, and multi-warehouse tracking",
                  "Delivery, logistics, POS, eCommerce, accounting, VAT, and procurement modules",
                  "Advanced reporting, activity logs, automated backup, and role-based access",
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
            <CloudCog className="mb-5 h-12 w-12 text-blue-600" />
            <h3 className="text-2xl font-extrabold text-slate-950">
              Built with modern world-class technology
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              The platform uses React for frontend, Laravel and Python for
              backend systems, and Flutter for mobile applications to ensure
              performance, scalability, and security.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Key Features"
            title="Everything your sales and distribution team needs."
            description="Empower sales teams, managers, warehouse teams, accountants, delivery managers, and executives with real-time tools."
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
            title="Control delivery, eCommerce, POS, barcode, tax, and return workflows."
            description="SalesVission ERP connects operational modules so every department can work from one reliable system."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {operationFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Finance & Procurement"
            title="Financial visibility for smarter business decisions."
            description="Track expenses, accounting, procurement, cash collection, salesman wallet, and financial dashboards from one ERP."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {financeFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              eyebrow="Security, Reports & Automation"
              title="Enterprise control with roles, reports, logs, backups, and custom features."
              description="SalesVission ERP is designed for high-volume companies that need control, visibility, compliance, and automation."
            />
            <div className="mt-8 rounded-[2rem] bg-slate-50 p-7 shadow-sm">
              <CheckList items={systemFeatures} />
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
                icon: LockKeyhole,
                title: "Role Access",
                text: "62+ user roles with custom permissions.",
              },
              {
                icon: FileBarChart,
                title: "Reports",
                text: "20+ business reports for sales, inventory, finance, and profit.",
              },
              {
                icon: Activity,
                title: "Activity Logs",
                text: "User activity, order history, system changes, and audit trail.",
              },
              {
                icon: DatabaseBackup,
                title: "Backup",
                text: "Daily automatic database backup and quick restore support.",
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

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Technology Stack"
            title="Modern, scalable, and secure architecture."
            description="SalesVission ERP uses proven technologies for web, backend systems, mobile apps, and cloud infrastructure."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((stack) => (
              <motion.article
                key={stack.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] bg-white p-7 shadow-lg"
              >
                <h3 className="text-2xl font-black text-slate-950">
                  {stack.title}
                </h3>
                <div className="mt-5">
                  <CheckList items={stack.items} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Who It Is For"
            title="Built for high-volume businesses."
            description="SalesVission ERP is designed for companies that need real-time control over sales, distribution, inventory, delivery, and finance."
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
            Not just ERP — a complete sales growth engine.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
            Accelerate sales, control inventory, manage finance, automate field
            operations, and grow your business with real-time intelligence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#contact" variant="light">
              Request Demo
            </Button>
            <Button href="#features" variant="light">
              View Modules
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
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">Customize SalesVission ERP for your business.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Anbar Software can provide custom modules, API integrations, industry-specific features, and business automation based on your company requirements.
            </p>
            <div className="mt-8 space-y-5">
              {["Custom modules", "API integrations", "Industry-specific features", "Business automation"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
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
              <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" placeholder="Your Name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="email" placeholder="Email Address" />
            </div>
            <input className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" type="text" placeholder="Company Name" />
            <select className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
              <option>Select business type</option>
              <option>Distribution Company</option>
              <option>Importer</option>
              <option>Manufacturer</option>
              <option>Supply Chain Business</option>
              <option>Retail Chain</option>
              <option>Other</option>
            </select>
            <textarea className="mt-4 min-h-36 w-full resize-y rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="Tell us about your sales team, warehouses, products, retailers, delivery process, accounting, and custom ERP needs" />
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
            >
              Send ERP Request
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </section> */}
    </main>
  );
}
