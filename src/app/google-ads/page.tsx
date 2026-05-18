import Contact from "@/components/contact/Contact";
import GoogleAudience from "@/components/google-ads/GoogleAudience";
import GoogleCTA from "@/components/google-ads/GoogleCTA";
import GoogleDeliverables from "@/components/google-ads/GoogleDeliverables";
import GoogleHero from "@/components/google-ads/GoogleHero";
import GoogleOverview from "@/components/google-ads/GoogleOverview";
import GoogleProcess from "@/components/google-ads/GoogleProcess";

export default function GoogleAdsPage() {
  return (
    <>
      <GoogleHero />
      <GoogleOverview />
      <GoogleDeliverables />
      <GoogleProcess />
      <GoogleAudience />
      <GoogleCTA />
      <Contact />
    </>
  );
}
