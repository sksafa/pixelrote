import MotionWrapper from "./MotionWrapper";

export default function GoogleCTA() {
  return (
    <section className="bg-[#f8fbff] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <MotionWrapper>
          <div className="rounded-[36px] bg-gradient-to-br from-[#1a73e8] to-[#1558b0] px-6 py-14 text-center text-white shadow-2xl shadow-blue-500/20 md:px-10 md:py-20">
            <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">Ready to get more customers from Google?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/85 md:text-lg">Get a professional Google Ads audit and discover where your campaigns can improve.</p>
            <a href="#contact" className="inline-flex rounded-full bg-[#eaf3ff] px-7 py-3.5 font-extrabold text-[#1a73e8] transition-all duration-300 hover:-translate-y-1 hover:bg-white">Book Free Ad Audit</a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
