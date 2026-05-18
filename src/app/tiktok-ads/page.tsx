import Contact from "@/components/contact/Contact";
import TikTokAudience from "@/components/tiktok-ads/TikTokAudience";
import TikTokCTA from "@/components/tiktok-ads/TikTokCTA";
import TikTokDeliverables from "@/components/tiktok-ads/TikTokDeliverables";
import TikTokHero from "@/components/tiktok-ads/TikTokHero";
import TikTokOverview from "@/components/tiktok-ads/TikTokOverview";
import TikTokProcess from "@/components/tiktok-ads/TikTokProcess";

export default function TikTokAdsPage() {
  return (
    <>
      <TikTokHero />
      <TikTokOverview />
      <TikTokDeliverables />
      <TikTokProcess />
      <TikTokAudience />
      <TikTokCTA />
      <Contact />
    </>
  );
}
