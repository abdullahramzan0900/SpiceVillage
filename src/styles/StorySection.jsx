import React from "react";
import "../../styles/story.css";

export default function StorySection() {
  return (
    <section className="sv-story">
      <div className="sv-story-inner">

        <div className="sv-story-text">
          <h2>Our Story</h2>
          <p>
            For over two decades, Spice Village has celebrated the rich culinary heritage 
            of South Asia. From traditional family recipes to modern gourmet creations, 
            our chefs craft unforgettable dining experiences.
          </p>
          <p>
            We blend authenticity with innovation — offering dishes that ignite nostalgia, 
            passion and discovery.
          </p>
        </div>

        <div className="sv-story-image">
          <img src="/images/home/story-chef.jpg" alt="Chef preparing food" />
        </div>

      </div>
    </section>
  );
}
