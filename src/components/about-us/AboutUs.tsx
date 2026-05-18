"use client";

import Link from "next/link";
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
  CheckCircle2,
  ArrowRight,
  Users,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO",
    text: "Rank higher on Google and attract organic traffic.",
  },
  {
    icon: Megaphone,
    title: "Meta Pro Ads",
    text: "Facebook and Instagram performance campaigns.",
  },
  {
    icon: Target,
    title: "Google Ads",
    text: "Reach buyers when they search for your services.",
  },
  {
    icon: Music2,
    title: "TikTok Ads",
    text: "Short-form video ad campaigns for fast growth.",
  },
  {
    icon: BarChart3,
    title: "Full Stack Digital Marketing",
    text: "Complete strategy, funnel, content and reporting.",
  },
  {
    icon: Laptop,
    title: "Website Design & Development",
    text: "Fast, responsive and conversion-focused websites.",
  },
  {
    icon: Bot,
    title: "Business AI & Automation",
    text: "AI chatbots, CRM automation and workflow systems.",
  },
  {
    icon: Building2,
    title: "SalesVission ERP System",
    text: "Sales, inventory, finance and delivery ERP solution.",
  },
  {
    icon: ShoppingCart,
    title: "Mesa Ecommerce Pro",
    text: "Advanced eCommerce CMS with powerful business tools.",
  },
  {
    icon: Store,
    title: "Mesa Ecommerce Light",
    text: "Simple, lightweight eCommerce for growing brands.",
  },
];

const teamMembers = [
  {
    name: "Arif Rahman",
    role: "Founder & Growth Strategist",
    text: "Business growth, strategy and client success niye kaj koren.",
  },
  {
    name: "Nusrat Jahan",
    role: "Digital Marketing Manager",
    text: "Meta Ads, Google Ads and campaign optimization expert.",
  },
  {
    name: "Sakib Hasan",
    role: "Full Stack Developer",
    text: "Website, ERP, eCommerce and custom software development koren.",
  },
  {
    name: "Maliha Akter",
    role: "AI Automation Specialist",
    text: "AI chatbot, CRM automation and workflow integration niye kaj koren.",
  },
];

const stats = [
  { number: "50+", label: "Completed Projects" },
  { number: "25+", label: "Happy Clients" },
  { number: "10+", label: "Digital Services" },
  { number: "24/7", label: "Support Mindset" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 px-4 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              About PixelRoute
            </span>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
              We build smart digital systems for modern businesses.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              PixelRoute holo ekta full-service digital agency. Amra SEO,
              marketing, website, ERP, eCommerce and AI automation solution diye
              business growth accelerate kori.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 px-7 py-4 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-1"
              >
                Work With Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/home#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="space-y-5">
              <ImageCard title="Digital Marketing" className="h-64" />
              <ImageCard title="SEO & Ads Growth" className="h-44" />
            </div>

            <div className="space-y-5 sm:pt-12">
              <ImageCard title="Web Development" className="h-44" />
              <ImageCard title="AI Automation" className="h-64" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-[32px] bg-slate-950 p-6 text-white md:grid-cols-4 md:p-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl bg-white/5 p-6 text-center"
            >
              <h3 className="text-4xl font-extrabold text-cyan-300">
                {item.number}
              </h3>

              <p className="mt-2 text-white/65">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[34px] bg-violet-100" />

            <div className="relative flex h-[430px] w-full items-center justify-center rounded-[34px] bg-gradient-to-br from-slate-950 via-violet-900 to-cyan-500 p-8 shadow-2xl">
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-8 text-center text-white backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                  PixelRoute Team
                </p>

                <h3 className="mt-4 text-4xl font-extrabold">
                  Strategy • Design • Development
                </h3>

                <p className="mt-4 leading-8 text-white/70">
                  We create marketing, software, website and automation
                  solutions for business growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
              Who We Are
            </span>

            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Marketing, software and automation — sob kichu ek jaygay.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Amra sudhu service provide kori na, amra business er problem bujhe
              complete digital solution create kori. SEO theke paid ads, website
              theke ERP, eCommerce theke AI automation — protita kaj performance
              and business growth er upor focus kore build kora hoy.
            </p>

            <div className="mt-7 grid gap-4">
              {[
                "Conversion-focused website and landing page design.",
                "Data-driven ads campaign and reporting.",
                "Custom software, ERP and eCommerce solution.",
                "AI automation for faster business operation.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-violet-600" />

                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#f8fffb] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Values"
            title="Why businesses choose us"
            text="Amader goal holo measurable growth, modern design and smart automation solution provide kora."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard
              icon={Rocket}
              title="Growth First"
              text="Protita project er focus thake lead, sales and business growth."
            />

            <ValueCard
              icon={ShieldCheck}
              title="Reliable Execution"
              text="Clean process, proper communication and quality maintain kori."
            />

            <ValueCard
              icon={Sparkles}
              title="Smart Automation"
              text="AI and automation diye manual work komiye efficiency barai."
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-950 px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Team"
            title="Meet the people behind PixelRoute"
            text="Strategy, marketing, development and automation expert der ekta dedicated team."
            dark
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10"
              >
                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-violet-600 via-slate-900 to-cyan-400">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/15 text-4xl font-extrabold text-white ring-4 ring-white/20">
                    {member.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{member.name}</h3>

                  <p className="mt-1 font-semibold text-cyan-300">
                    {member.role}
                  </p>

                  <p className="mt-3 leading-7 text-white/60">{member.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Process"
            title="How we work"
            text="Clear process follow korar karone protita project smoothly complete hoy."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                text: "Business, goal and audience analysis kori.",
              },
              {
                step: "02",
                title: "Strategy",
                text: "Best roadmap and execution plan create kori.",
              },
              {
                step: "03",
                title: "Execution",
                text: "Marketing, development and automation implement kori.",
              },
              {
                step: "04",
                title: "Optimize",
                text: "Performance analyze kore scaling and improvement kori.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[28px] bg-slate-50 p-7"
              >
                <div className="mb-5 text-5xl font-extrabold text-violet-200">
                  {item.step}
                </div>

                <h3 className="text-xl font-extrabold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-500">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-gradient-to-br from-violet-600 to-cyan-400 p-8 text-center text-white md:p-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20">
            <Users size={30} />
          </div>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Ready to grow your business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            Website, marketing, ERP, eCommerce or AI automation — tomar business
            er jonno best solution niye amader sathe kotha bolo.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-extrabold text-slate-950 transition hover:-translate-y-1"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ImageCard({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-600 via-slate-900 to-cyan-400 p-6 shadow-2xl ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />

      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative flex h-full flex-col justify-end rounded-[22px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          PixelRoute
        </p>

        <h3 className="mt-3 text-2xl font-extrabold text-white">{title}</h3>
      </div>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
        <Icon size={28} />
      </div>

      <h3 className="text-2xl font-extrabold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-500">{text}</p>
    </motion.div>
  );
}

function SectionHeading({
  badge,
  title,
  text,
  dark = false,
}: {
  badge: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span
        className={`mb-4 inline-flex rounded-full px-4 py-2 text-sm font-bold ${
          dark ? "bg-white/10 text-cyan-300" : "bg-violet-50 text-violet-700"
        }`}
      >
        {badge}
      </span>

      <h2
        className={`text-3xl font-extrabold leading-tight md:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-5 max-w-2xl leading-8 ${
          dark ? "text-white/60" : "text-slate-500"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

// // import { Button } from "../home/Button";

// // export default function AboutUs() {
// //   return (
// //     <section id="about" className="py-20 lg:py-24">
// //       <div className="mx-auto grid w-[min(1180px,92%)] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
// //         <div className="flex min-h-[460px] items-end rounded-[2rem] bg-[linear-gradient(135deg,rgba(124,58,237,.85),rgba(34,211,238,.78)),url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center p-7 shadow-2xl shadow-slate-900/10">
// //           <div className="max-w-sm rounded-3xl bg-white p-6 shadow-xl">
// //             <h3 className="mb-2 text-xl font-extrabold text-slate-950">
// //               Growth partner for ambitious brands
// //             </h3>
// //             <p className="text-slate-500">
// //               We combine creative ideas, paid media, SEO, technology, and
// //               automation to help businesses scale faster.
// //             </p>
// //           </div>
// //         </div>
// //         <div>
// //           <span className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-extrabold text-violet-700">
// //             About Us
// //           </span>
// //           <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
// //             We build digital systems that turn attention into revenue.
// //           </h2>
// //           <p className="mb-4 text-lg text-slate-500">
// //             PixelRoute is a full-service digital marketing agency focused on
// //             performance, creativity, and automation.
// //           </p>
// //           <p className="mb-6 text-lg text-slate-500">
// //             Whether you need SEO, ads, a new website, software, or AI
// //             automation, we create custom strategies based on your goals.
// //           </p>
// //           <ul className="mb-8 grid gap-3 font-semibold text-slate-500">
// //             <li>✓ Data-driven marketing strategy</li>
// //             <li>✓ Transparent reporting and communication</li>
// //             <li>✓ Creative assets built for conversions</li>
// //             <li>✓ Automation systems that save time</li>
// //           </ul>
// //           <Button>Talk To Our Team</Button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Search,
//   Megaphone,
//   Target,
//   Music2,
//   BarChart3,
//   Laptop,
//   Bot,
//   Building2,
//   ShoppingCart,
//   Store,
//   CheckCircle2,
//   ArrowRight,
//   Users,
//   Rocket,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// const services = [
//   {
//     icon: Search,
//     title: "SEO",
//     text: "Rank higher on Google and attract organic traffic.",
//   },
//   {
//     icon: Megaphone,
//     title: "Meta Pro Ads",
//     text: "Facebook and Instagram performance campaigns.",
//   },
//   {
//     icon: Target,
//     title: "Google Ads",
//     text: "Reach buyers when they search for your services.",
//   },
//   {
//     icon: Music2,
//     title: "TikTok Ads",
//     text: "Short-form video ad campaigns for fast growth.",
//   },
//   {
//     icon: BarChart3,
//     title: "Full Stack Digital Marketing",
//     text: "Complete strategy, funnel, content and reporting.",
//   },
//   {
//     icon: Laptop,
//     title: "Website Design & Development",
//     text: "Fast, responsive and conversion-focused websites.",
//   },
//   {
//     icon: Bot,
//     title: "Business AI & Automation",
//     text: "AI chatbots, CRM automation and workflow systems.",
//   },
//   {
//     icon: Building2,
//     title: "SalesVission ERP System",
//     text: "Sales, inventory, finance and delivery ERP solution.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Mesa Ecommerce Pro",
//     text: "Advanced eCommerce CMS with powerful business tools.",
//   },
//   {
//     icon: Store,
//     title: "Mesa Ecommerce Light",
//     text: "Simple, lightweight eCommerce for growing brands.",
//   },
// ];

// const teamMembers = [
//   {
//     name: "Arif Rahman",
//     role: "Founder & Growth Strategist",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
//     text: "Business growth, strategy and client success niye kaj koren.",
//   },
//   {
//     name: "Nusrat Jahan",
//     role: "Digital Marketing Manager",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
//     text: "Meta Ads, Google Ads and campaign optimization expert.",
//   },
//   {
//     name: "Sakib Hasan",
//     role: "Full Stack Developer",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
//     text: "Website, ERP, eCommerce and custom software development koren.",
//   },
//   {
//     name: "Maliha Akter",
//     role: "AI Automation Specialist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
//     text: "AI chatbot, CRM automation and workflow integration niye kaj koren.",
//   },
// ];

// const stats = [
//   { number: "50+", label: "Completed Projects" },
//   { number: "25+", label: "Happy Clients" },
//   { number: "10+", label: "Digital Services" },
//   { number: "24/7", label: "Support Mindset" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 35 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function AboutUs() {
//   return (
//     <main className="overflow-hidden bg-white text-slate-950">
//       {/* Hero */}
//       <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 px-4 py-20 text-white md:px-8 md:py-28">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-cyan-400 blur-3xl" />
//           <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500 blur-3xl" />
//         </div>

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.7 }}
//           >
//             <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
//               About PixelRoute
//             </span>

//             <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
//               We build digital growth systems for modern businesses.
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
//               PixelRoute is a digital marketing, software, web development and
//               AI automation agency. Amra business ke online visibility,
//               qualified leads, automation and smart software solution diye grow
//               korte help kori.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 px-7 py-4 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-1"
//               >
//                 Work With Us <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/home#services"
//                 className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
//               >
//                 View Services
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.94 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.15 }}
//             className="grid gap-5 sm:grid-cols-2"
//           >
//             <div className="space-y-5">
//               <ImageCard
//                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
//                 className="h-64"
//               />
//               <ImageCard
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
//                 className="h-44"
//               />
//             </div>
//             <div className="space-y-5 sm:pt-12">
//               <ImageCard
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
//                 className="h-44"
//               />
//               <ImageCard
//                 src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
//                 className="h-64"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="px-4 py-12 md:px-8">
//         <div className="mx-auto grid max-w-7xl gap-5 rounded-[32px] bg-slate-950 p-6 text-white md:grid-cols-4 md:p-8">
//           {stats.map((item, index) => (
//             <motion.div
//               key={item.label}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.08 }}
//               className="rounded-3xl bg-white/5 p-6 text-center"
//             >
//               <h3 className="text-4xl font-extrabold text-cyan-300">
//                 {item.number}
//               </h3>
//               <p className="mt-2 text-white/65">{item.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section className="px-4 py-16 md:px-8 md:py-24">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="absolute -left-5 -top-5 h-full w-full rounded-[34px] bg-violet-100" />
//             <Image
//               src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
//               alt="PixelRoute team working"
//               width={1000}
//               height={750}
//               className="relative h-[430px] w-full rounded-[34px] object-cover shadow-2xl"
//             />
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="mb-4 inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
//               Who We Are
//             </span>

//             <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
//               Marketing, software and automation — sob kichu ek jaygay.
//             </h2>

//             <p className="mt-5 leading-8 text-slate-600">
//               Amra sudhu service provide kori na, amra business er problem bujhe
//               complete digital solution create kori. SEO theke paid ads, website
//               theke ERP, eCommerce theke AI automation — protita kaj data,
//               design and performance er upor base kore kora hoy.
//             </p>

//             <div className="mt-7 grid gap-4">
//               {[
//                 "Conversion-focused website and landing page design.",
//                 "Data-driven ads campaign and reporting.",
//                 "Custom software, ERP and eCommerce solution.",
//                 "AI automation for faster business operation.",
//               ].map((item) => (
//                 <div key={item} className="flex gap-3">
//                   <CheckCircle2 className="mt-1 shrink-0 text-violet-600" />
//                   <p className="font-medium text-slate-700">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="bg-[#f8fffb] px-4 py-16 md:px-8 md:py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionHeading
//             badge="Our Values"
//             title="Why businesses choose us"
//             text="Amader goal holo business er jonno measurable result, clean design and smart system build kora."
//           />

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             <ValueCard
//               icon={Rocket}
//               title="Growth First"
//               text="Protita project er main focus thake lead, sales, conversion and business growth."
//             />
//             <ValueCard
//               icon={ShieldCheck}
//               title="Reliable Execution"
//               text="Clean process, proper communication and deadline maintain kore kaj complete kori."
//             />
//             <ValueCard
//               icon={Sparkles}
//               title="Smart Automation"
//               text="Manual kaj komiye business ke faster and more efficient korte AI automation use kori."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="bg-slate-950 px-4 py-16 text-white md:px-8 md:py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionHeading
//             badge="Our Team"
//             title="Meet the people behind PixelRoute"
//             text="Strategy, design, development, marketing and automation expert der ekta focused team."
//             dark
//           />

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10"
//               >
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={600}
//                   height={600}
//                   className="h-72 w-full object-cover"
//                 />

//                 <div className="p-6">
//                   <h3 className="text-xl font-extrabold">{member.name}</h3>
//                   <p className="mt-1 font-semibold text-cyan-300">
//                     {member.role}
//                   </p>
//                   <p className="mt-3 leading-7 text-white/60">{member.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="px-4 py-16 md:px-8 md:py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionHeading
//             badge="Our Process"
//             title="How we work"
//             text="Clear process follow korar karone protita project smoothly complete hoy."
//           />

//           <div className="mt-12 grid gap-6 md:grid-cols-4">
//             {[
//               {
//                 step: "01",
//                 title: "Discovery",
//                 text: "Business, goal, problem and target audience bujhi.",
//               },
//               {
//                 step: "02",
//                 title: "Strategy",
//                 text: "Best solution, roadmap and execution plan create kori.",
//               },
//               {
//                 step: "03",
//                 title: "Execution",
//                 text: "Design, development, ads, SEO or automation implement kori.",
//               },
//               {
//                 step: "04",
//                 title: "Optimize",
//                 text: "Result analyze kore improvement and scaling kori.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.step}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="rounded-[28px] bg-slate-50 p-7"
//               >
//                 <div className="mb-5 text-5xl font-extrabold text-violet-200">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-extrabold">{item.title}</h3>
//                 <p className="mt-3 leading-7 text-slate-500">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-4 pb-16 md:px-8 md:pb-24">
//         <div className="mx-auto max-w-7xl rounded-[36px] bg-gradient-to-br from-violet-600 to-cyan-400 p-8 text-center text-white md:p-14">
//           <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20">
//             <Users size={30} />
//           </div>

//           <h2 className="text-3xl font-extrabold md:text-5xl">
//             Ready to grow your business?
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
//             Website, marketing, software, ERP, eCommerce or AI automation —
//             tomar business er jonno best solution niye amader sathe kotha bolo.
//           </p>

//           <Link
//             href="/contact"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-extrabold text-slate-950 transition hover:-translate-y-1"
//           >
//             Contact Us <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// function ImageCard({
//   src,
//   className = "",
// }: {
//   src: string;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`overflow-hidden rounded-[28px] bg-white/10 p-2 ${className}`}
//     >
//       <Image
//         src={src}
//         alt="PixelRoute office work"
//         width={800}
//         height={600}
//         className="h-full w-full rounded-[22px] object-cover"
//       />
//     </div>
//   );
// }

// function ValueCard({
//   icon: Icon,
//   title,
//   text,
// }: {
//   icon: React.ElementType;
//   title: string;
//   text: string;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5"
//     >
//       <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
//         <Icon size={28} />
//       </div>
//       <h3 className="text-2xl font-extrabold">{title}</h3>
//       <p className="mt-3 leading-7 text-slate-500">{text}</p>
//     </motion.div>
//   );
// }

// function SectionHeading({
//   badge,
//   title,
//   text,
//   dark = false,
// }: {
//   badge: string;
//   title: string;
//   text: string;
//   dark?: boolean;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="mx-auto max-w-3xl text-center"
//     >
//       <span
//         className={`mb-4 inline-flex rounded-full px-4 py-2 text-sm font-bold ${
//           dark ? "bg-white/10 text-cyan-300" : "bg-violet-50 text-violet-700"
//         }`}
//       >
//         {badge}
//       </span>

//       <h2
//         className={`text-3xl font-extrabold leading-tight md:text-5xl ${
//           dark ? "text-white" : "text-slate-950"
//         }`}
//       >
//         {title}
//       </h2>

//       <p
//         className={`mx-auto mt-5 max-w-2xl leading-8 ${
//           dark ? "text-white/60" : "text-slate-500"
//         }`}
//       >
//         {text}
//       </p>
//     </motion.div>
//   );
// }
