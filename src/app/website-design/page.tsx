import Contact from "@/components/contact/Contact";
import WebsiteAudience from "@/components/website-design/WebsiteAudience";
import WebsiteContact from "@/components/website-design/WebsiteContact";
import WebsiteCTA from "@/components/website-design/WebsiteCTA";
import WebsiteDeliverables from "@/components/website-design/WebsiteDeliverables";
import WebsiteHero from "@/components/website-design/WebsiteHero";
import WebsiteOverview from "@/components/website-design/WebsiteOverview";
import WebsiteProcess from "@/components/website-design/WebsiteProcess";

export default function WebsiteDesignPage() {
  return (
    <>
      <WebsiteHero />
      <WebsiteOverview />
      <WebsiteDeliverables />
      <WebsiteProcess />
      <WebsiteAudience />
      <WebsiteCTA />
      <Contact />
    </>
  );
}
