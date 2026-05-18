import Link from "next/link";

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
  // { title: "Mesa Lite", navlink: "/mesa-ecommerce" },
  { title: "SalesVision Pro ERP", navlink: "/salesvission-erp" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="mb-9 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="mb-3 text-2xl font-extrabold">PixelRoute</h3>

            <p className="text-white/65">
              A full-service digital marketing agency helping businesses grow
              with SEO, ads, websites, software, and AI automation.
            </p>
          </div>

          {/* Company */}
          <FooterCol title="Company" links={navItems} />

          {/* Services */}
          <FooterCol title="Services" links={services} />

          {/* Software */}
          <FooterCol title="Software" links={software} />
        </div>

        <p className="border-t border-white/10 pt-6 text-center text-sm text-white/55">
          © 2026 PixelRoute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

type FooterColProps = {
  title: string;
  links: NavItem[];
};

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div>
      <h4 className="mb-4 font-extrabold">{title}</h4>

      <div className="grid gap-2">
        {links.map((item) => (
          <Link
            key={item.navlink}
            href={item.navlink}
            className="text-white/65 transition hover:text-violet-400"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
