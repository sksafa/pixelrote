export default function Footer() {
    return (
        <footer className="bg-[#080b16] py-12 text-white">
            <div className="container-custom">
                <div className="mb-9 grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
                    <div>
                        <h3 className="mb-3 text-2xl font-extrabold">PixelRoute</h3>
                        <p className="text-white/65">SEO service page for keyword research, technical SEO audit, and on-page optimization.</p>
                    </div>
                    <div>
                        <h4 className="mb-3 font-extrabold">Page</h4>
                        <div className="grid gap-2 text-white/65">
                            <a href="#overview">Overview</a>
                            <a href="#deliverables">Deliverables</a>
                            <a href="#process">Process</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-3 font-extrabold">SEO Service</h4>
                        <div className="grid gap-2 text-white/65">
                            <a href="#deliverables">Keyword Research</a>
                            <a href="#deliverables">Technical SEO Audit</a>
                            <a href="#deliverables">On-page Optimization</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-3 font-extrabold">Contact</h4>
                        <div className="grid gap-2 text-white/65">
                            <a href="https://pixelroute.com/">pixelroute.com</a>
                            <a href="mailto:hello@pixelroute.com">hello@pixelroute.com</a>
                            <a href="#contact">Get SEO Audit</a>
                        </div>
                    </div>
                </div>
                <p className="border-t border-white/10 pt-6 text-center text-sm text-white/50">© 2026 PixelRoute. All rights reserved.</p>
            </div>
        </footer>
    );
}