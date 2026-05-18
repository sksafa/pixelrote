import MotionWrapper from "./MotionWrapper";

export default function BusinessAICTA() {
  return (
    <section className="bg-[#f8fffb] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <MotionWrapper>
          <div className="rounded-[36px] bg-gradient-to-br from-[#10b981] to-[#0f766e] px-6 py-14 text-center text-white shadow-2xl shadow-emerald-500/20 md:px-10 md:py-20">
            <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Ready to automate your business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/85 md:text-lg">
              Get a professional automation audit and discover where AI can save
              time and improve your operations.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#d1fae5] px-7 py-3.5 font-extrabold text-[#10b981] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Book Free Automation Audit
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
