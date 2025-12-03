import React from "react";

// Hero Slider
import HomeHero from "../components/HomeHero";

// Sections
// import StorySection from "../components/StorySection";
import VideoShowcase from "../components/VideoShowcase";
import SpecialsSection from "../components/ExperienceSection";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import FeaturedChefs from "../components/FeaturedChefs";

// NEW SECTION (example)


export default function Home() {
  return (
    <div className="sv-home">

      {/* Hero Slider */}
      <HomeHero />

      {/* Home Sections */}
      {/* <StorySection /> */}
      <VideoShowcase />
      <SpecialsSection />
      <FeaturedChefs />
      <Testimonials />
      <ContactCTA />
      {/* <FeaturedChefs/> */}

    </div>
  );
}
