import React from "react";
import "../styles/testimonials.css";

const reviews = [
  { name: "Aisha", review: "The best biryani I've ever tasted. Amazing ambience!" },
  { name: "Zain", review: "The lamb chops were unbelievably tender. 10/10!" },
  { name: "Lara", review: "Mocktails are refreshing and beautifully presented." }
];

export default function Testimonials() {
  return (
    <section className="sv-testimonials">
      <h2 className="sv-section-title">What Our Guests Say</h2>

      <div className="sv-reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="sv-review-card">
            <p>“{r.review}”</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
