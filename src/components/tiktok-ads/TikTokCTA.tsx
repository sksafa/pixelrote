import MotionWrapper from "./MotionWrapper";

export default function TikTokCTA() {
  return (
    <section className="bg-[#f8fbff] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <MotionWrapper>
          <div className="rounded-[36px] bg-gradient-to-br from-[#ff0050] to-[#111827] px-6 py-14 text-center text-white shadow-2xl shadow-pink-500/20 md:px-10 md:py-20">
            <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Ready to grow with TikTok Ads?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/85 md:text-lg">
              Get a professional TikTok Ads audit and discover how to improve
              your creative, targeting, and results.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#fff0f5] px-7 py-3.5 font-extrabold text-[#ff0050] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Book Free Ad Audit
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
