import BusinessAIAudience from "@/components/business-ai/BusinessAIAudience";
import BusinessAICTA from "@/components/business-ai/BusinessAICTA";
import BusinessAIDeliverables from "@/components/business-ai/BusinessAIDeliverables";
import BusinessAIHero from "@/components/business-ai/BusinessAIHero";
import BusinessAIOverview from "@/components/business-ai/BusinessAIOverview";
import BusinessAIProcess from "@/components/business-ai/BusinessAIProcess";
import Contact from "@/components/contact/Contact";

export default function BusinessAIPage() {
  return (
    <>
      <BusinessAIHero />
      <BusinessAIOverview />
      <BusinessAIDeliverables />
      <BusinessAIProcess />
      <BusinessAIAudience />
      <BusinessAICTA />
      <Contact />
    </>
  );
}
