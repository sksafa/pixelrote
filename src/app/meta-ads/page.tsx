import Contact from "@/components/contact/Contact";
import MetaAudience from "@/components/meta-ads/MetaAudience";
import MetaCTA from "@/components/meta-ads/MetaCTA";
import MetaDeliverables from "@/components/meta-ads/MetaDeliverables";
import MetaHero from "@/components/meta-ads/MetaHero";
import MetaOverview from "@/components/meta-ads/MetaOverview";
import MetaProcess from "@/components/meta-ads/MetaProcess";

export default function MetaAdsPage() {
  return (
    <>
      <MetaHero />
      <MetaOverview />
      <MetaDeliverables />
      <MetaProcess />
      <MetaAudience />
      <MetaCTA />
      <Contact />
    </>
  );
}
