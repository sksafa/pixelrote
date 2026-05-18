const steps = [
  ["1", "Discover", "We learn your goals, audience, offers, competitors, and current marketing performance."],
  ["2", "Plan", "We create a clear strategy for SEO, ads, website, creative, and automation."],
  ["3", "Launch", "We build assets, set up tracking, publish campaigns, and launch your growth system."],
  ["4", "Scale", "We analyze data, improve performance, reduce waste, and scale profitable channels."],
];

export default function Process() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Our simple growth process</h2>
          <p className="text-lg text-slate-500">We follow a clear process to launch, optimize, and scale what works.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([num, title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 font-extrabold text-white">{num}</div>
              <h3 className="mb-2 text-xl font-extrabold text-slate-950">{title}</h3>
              <p className="text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
