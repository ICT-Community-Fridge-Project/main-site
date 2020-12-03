import React from "react";
import Layout from "@utils/layout";
import SEO from "@utils/seo";
import SectionHeader from "@molecules/sectionHeader";
import SectionFAQ from "@molecules/sectionFaq";
import SectionCTA from "@molecules/sectionCta";
import SectionLocations from "@molecules/sectionLocations";

const IndexPage = () => (
  <Layout>
    <SEO title="ICT Community Fridge Project" />
    <SectionHeader />
    <SectionFAQ />
    <SectionLocations />
    <SectionCTA />
  </Layout>
);

export default IndexPage;
