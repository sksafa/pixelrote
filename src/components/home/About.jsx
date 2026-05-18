import { Button } from "./Button";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="mx-auto grid w-[min(1180px,92%)] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex min-h-[460px] items-end rounded-[2rem] bg-[linear-gradient(135deg,rgba(124,58,237,.85),rgba(34,211,238,.78)),url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center p-7 shadow-2xl shadow-slate-900/10">
          <div className="max-w-sm rounded-3xl bg-white p-6 shadow-xl">
            <h3 className="mb-2 text-xl font-extrabold text-slate-950">Growth partner for ambitious brands</h3>
            <p className="text-slate-500">We combine creative ideas, paid media, SEO, technology, and automation to help businesses scale faster.</p>
          </div>
        </div>
        <div>
          <span className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-extrabold text-violet-700">About Us</span>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">We build digital systems that turn attention into revenue.</h2>
          <p className="mb-4 text-lg text-slate-500">PixelRoute is a full-service digital marketing agency focused on performance, creativity, and automation.</p>
          <p className="mb-6 text-lg text-slate-500">Whether you need SEO, ads, a new website, software, or AI automation, we create custom strategies based on your goals.</p>
          <ul className="mb-8 grid gap-3 font-semibold text-slate-500">
            <li>✓ Data-driven marketing strategy</li>
            <li>✓ Transparent reporting and communication</li>
            <li>✓ Creative assets built for conversions</li>
            <li>✓ Automation systems that save time</li>
          </ul>
          <Button>Talk To Our Team</Button>
        </div>
      </div>
    </section>
  );
}
