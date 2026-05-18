"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Rocket } from "lucide-react";

type NavItem = {
  title: string;
  navlink: string;
};

const navItems: NavItem[] = [
  { title: "Home", navlink: "/" },
  { title: "About Us", navlink: "/about" },
  { title: "Contact", navlink: "/contact" },
];

const services: NavItem[] = [
  { title: "SEO", navlink: "/seo" },
  { title: "Meta Pro Ads", navlink: "/meta-ads" },
  { title: "Google Ads", navlink: "/google-ads" },
  { title: "TikTok Ads", navlink: "/tiktok-ads" },
  { title: "Business AI & Automation", navlink: "/business-ai" },
  {
    title: "Web site design & development",
    navlink: "/website-design",
  },
  {
    title: "Full Stack Digital Marketing",
    navlink: "/digital-marketing",
  },
];

const software: NavItem[] = [
  { title: "Mesa Pro", navlink: "/mesa-ecommerce" },
  { title: "Mesa Lite", navlink: "/mesa-ecommerce" },
  { title: "SalesVision Pro ERP", navlink: "/salesvission-erp" },
];

type DropdownProps = {
  label: string;
  items: NavItem[];
};

function getLinkClass(isActive: boolean) {
  return `font-semibold transition ${
    isActive ? "text-violet-700" : "text-slate-600 hover:text-violet-600"
  }`;
}

function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isDropdownActive = items.some((item) => pathname === item.navlink);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 font-semibold transition ${
          isDropdownActive
            ? "text-violet-700"
            : "text-slate-600 hover:text-violet-600"
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-8 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
          >
            {items.map((item) => {
              const isActive = pathname === item.navlink;

              return (
                <Link
                  key={item.navlink}
                  href={item.navlink}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-violet-100 text-violet-700"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-700"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[78px] w-[min(1180px,92%)] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-extrabold text-slate-900"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-lg shadow-violet-500/30">
            <Rocket size={21} />
          </span>
          PixelRoute
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {navItems.slice(0, 1).map((item) => (
            <Link
              key={item.navlink}
              href={item.navlink}
              className={getLinkClass(pathname === item.navlink)}
            >
              {item.title}
            </Link>
          ))}

          <Dropdown label="Services" items={services} />
          <Dropdown label="Software" items={software} />

          {navItems.slice(1).map((item) => (
            <Link
              key={item.navlink}
              href={item.navlink}
              className={getLinkClass(pathname === item.navlink)}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 px-6 py-3 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Get Free Strategy
        </Link>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-xl bg-slate-100 p-3 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-[4%] right-[4%] top-[78px] z-50 grid gap-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl lg:hidden"
          >
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.navlink}
                onClick={closeMobile}
                href={item.navlink}
                className={`rounded-xl px-4 py-3 font-semibold transition ${
                  pathname === item.navlink
                    ? "bg-violet-100 text-violet-700"
                    : "text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                {item.title}
              </Link>
            ))}

            <details className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50">
              <summary className="cursor-pointer">Services</summary>
              <div className="mt-3 grid gap-1 pl-3">
                {services.map((item) => (
                  <Link
                    key={item.navlink}
                    onClick={closeMobile}
                    href={item.navlink}
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      pathname === item.navlink
                        ? "bg-violet-100 text-violet-700"
                        : "text-slate-600 hover:bg-white hover:text-violet-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>

            <details className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50">
              <summary className="cursor-pointer">Software</summary>
              <div className="mt-3 grid gap-1 pl-3">
                {software.map((item) => (
                  <Link
                    key={item.navlink}
                    onClick={closeMobile}
                    href={item.navlink}
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      pathname === item.navlink
                        ? "bg-violet-100 text-violet-700"
                        : "text-slate-600 hover:bg-white hover:text-violet-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.navlink}
                onClick={closeMobile}
                href={item.navlink}
                className={`rounded-xl px-4 py-3 font-semibold transition ${
                  pathname === item.navlink
                    ? "bg-violet-100 text-violet-700"
                    : "text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Menu, X, Rocket } from "lucide-react";

// const services = [
//   "SEO",
//   "Meta Pro Ads",
//   "Google Ads",
//   "TikTok Ads",
//   "Full Stack Digital Marketing",
//   "Website Design & Development",
//   "Business AI & Automation",
// ];

// const software = ["Mesa Pro", "Mesa Lite", "SalesVision Pro ERP"];

// function Dropdown({ label, items }: { label: string; items: string[] }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="flex items-center gap-1 font-semibold text-slate-600 transition hover:text-violet-600"
//       >
//         {label}
//         <ChevronDown
//           size={16}
//           className={`transition ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: 12, scale: 0.98 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 12, scale: 0.98 }}
//             transition={{ duration: 0.18 }}
//             className="absolute left-0 top-8 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
//           >
//             {items.map((item: string) => (
//               <a
//                 key={item}
//                 href={label === "Services" ? "#services" : "#products"}
//                 className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-700"
//               >
//                 {item}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const closeMobile = () => setMobileOpen(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
//       <div className="mx-auto flex min-h-[78px] w-[min(1180px,92%)] items-center justify-between gap-6">
//         <a
//           href="#home"
//           className="flex items-center gap-3 text-2xl font-extrabold text-slate-900"
//         >
//           <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-lg shadow-violet-500/30">
//             <Rocket size={21} />
//           </span>
//           PixelRoute
//         </a>

//         <nav className="hidden items-center gap-7 text-sm lg:flex">
//           <a
//             className="font-semibold text-slate-600 hover:text-violet-600"
//             href="#home"
//           >
//             Home
//           </a>
//           <Dropdown label="Services" items={services} />
//           <Dropdown label="Software" items={software} />
//           <a
//             className="font-semibold text-slate-600 hover:text-violet-600"
//             href="#about"
//           >
//             About Us
//           </a>
//           <a
//             className="font-semibold text-slate-600 hover:text-violet-600"
//             href="#contact"
//           >
//             Contact
//           </a>
//         </nav>

//         <a
//           href="#contact"
//           className="hidden rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 px-6 py-3 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 lg:inline-flex"
//         >
//           Get Free Strategy
//         </a>

//         <button
//           onClick={() => setMobileOpen((v) => !v)}
//           className="rounded-xl bg-slate-100 p-3 lg:hidden"
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.nav
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             className="absolute left-[4%] right-[4%] top-[78px] z-50 grid gap-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl lg:hidden"
//           >
//             <a
//               onClick={closeMobile}
//               className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50"
//               href="#home"
//             >
//               Home
//             </a>
//             <details className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50">
//               <summary className="cursor-pointer">Services</summary>
//               <div className="mt-3 grid gap-1 pl-3">
//                 {services.map((item) => (
//                   <a
//                     key={item}
//                     onClick={closeMobile}
//                     className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-white"
//                     href="#services"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </details>
//             <details className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50">
//               <summary className="cursor-pointer">Software</summary>
//               <div className="mt-3 grid gap-1 pl-3">
//                 {software.map((item) => (
//                   <a
//                     key={item}
//                     onClick={closeMobile}
//                     className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-white"
//                     href="#products"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </details>
//             <a
//               onClick={closeMobile}
//               className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50"
//               href="#about"
//             >
//               About Us
//             </a>
//             <a
//               onClick={closeMobile}
//               className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-violet-50"
//               href="#contact"
//             >
//               Contact
//             </a>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
