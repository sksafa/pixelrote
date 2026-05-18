// "use client";

// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { navLinks } from "@/Data/siteData";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 20);
//         handleScroll();
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <header
//             className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl" : "border-transparent bg-white/70 backdrop-blur-md"
//                 }`}
//         >
//             <div className="container-custom flex min-h-[78px] items-center justify-between gap-6">
//                 <a href="#home" className="flex items-center gap-3 text-2xl font-extrabold text-slate-950">
//                     <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] text-white shadow-lg shadow-violet-500/25">
//                         P
//                     </span>
//                     PixelRoute
//                 </a>

//                 <nav className="hidden items-center gap-7 text-sm font-bold text-slate-500 lg:flex">
//                     {navLinks.map((item) => (
//                         <a key={item.href} href={item.href} className="transition hover:text-[#6c5ce7]">
//                             {item.label}
//                         </a>
//                     ))}
//                 </nav>

//                 <a href="#contact" className="btn-primary hidden lg:inline-flex">
//                     Get SEO Audit
//                 </a>

//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="rounded-xl bg-slate-100 p-3 text-slate-900 lg:hidden"
//                     aria-label="Open menu"
//                 >
//                     {open ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             <div
//                 className={`container-custom z-40 grid  transition-all duration-300 lg:hidden ${open ? "max-h-100 mb-5 pb-5 opacity-100" : "max-h-0 opacity-0"
//                     }`}
//             >
//                 <nav className="grid gap-3 rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_15%_15%,rgba(108,92,231,0.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(0,206,201,0.16),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]  p-5 shadow-xl">
//                     {navLinks.map((item) => (
//                         <a
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setOpen(false)}
//                             className="rounded-2xl px-4 py-3 font-bold text-slate-600 transition hover:bg-violet-50 hover:text-[#6c5ce7]"
//                         >
//                             {item.label}
//                         </a>
//                     ))}
//                     <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
//                         Get SEO Audit
//                     </a>
//                 </nav>
//             </div>
//         </header>
//     );
// }

"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/siteData";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((item) => item.href);

            for (const section of sections) {
                const element = document.querySelector(section);

                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActiveSection(section);
                    }
                }
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-all shadow-[0px_0px_0px_1px_#dddddd6b] duration-300 ${scrolled ? "border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl" : "border-transparent bg-white/70 backdrop-blur-md"
                }`}
        >
            <div className="container-custom flex min-h-[78px] items-center justify-between gap-6">
                <a href="#home" className="flex items-center gap-3 text-2xl font-extrabold text-slate-950">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] text-white shadow-lg shadow-violet-500/25">
                        P
                    </span>
                    PixelRoute
                </a>

                <nav className="hidden items-center gap-3 text-sm font-bold text-slate-500 lg:flex">
                    {navLinks.map((item) => {
                        const isActive = activeSection === item.href;

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`rounded-full px-5 py-2.5 transition-all duration-300 ${isActive
                                    ? "bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white shadow-lg shadow-violet-500/20"
                                    : "hover:bg-violet-50 hover:text-[#6c5ce7]"
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <a href="#contact" className="btn-primary hidden lg:inline-flex">
                    Get SEO Audit
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-xl bg-slate-100 p-3 text-slate-900 lg:hidden"
                    aria-label="Open menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div
                className={`container-custom grid transition-all duration-300 lg:hidden ${open ? "max-h-100 mb-5 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
                    {navLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                                setOpen(false);
                                setActiveSection(item.href);
                            }}
                            className={`rounded-2xl px-4 py-3 font-bold transition-all duration-300 ${activeSection === item.href
                                ? "bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white"
                                : "text-slate-600 hover:bg-violet-50 hover:text-[#6c5ce7]"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                        Get SEO Audit
                    </a>
                </nav>
            </div>
        </header>
    );
}