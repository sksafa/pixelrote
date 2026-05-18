import MotionWrapper from "./MotionWrapper";

export default function WebsiteCTA() {
  return (
    <section className="bg-[#f8fbff] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <MotionWrapper>
          <div className="rounded-[36px] bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] px-6 py-14 text-center text-white shadow-2xl shadow-sky-500/20 md:px-10 md:py-20">
            <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Ready to build a better website?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/85 md:text-lg">
              Get a professional website designed and developed to support your
              brand, leads, and growth.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#e0f2fe] px-7 py-3.5 font-extrabold text-[#0ea5e9] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Request Website Quote
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
