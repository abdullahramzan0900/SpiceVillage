import React from "react";
import "../../styles/dishes.css";

const items = [
  { name: "Masala Fish", image: "/images/signature/masala-fish.jpg" },
  { name: "Lamb Karahi", image: "/images/signature/lamb-karahi.jpg" },
  { name: "Chicken Biryani", image: "/images/signature/chicken-biryani.jpg" },
  { name: "Dynamite Prawns", image: "/images/signature/dynamite-prawns.jpg" }
];

export default function SignatureDishes() {
  return (
    <section className="sv-dishes">
      <h2 className="sv-section-title">Our Signature Dishes</h2>

      <div className="sv-dishes-grid">
        {items.map((d, i) => (
          <div key={i} className="sv-dish-card">
            <img src={d.image} alt={d.name} />
            <h3>{d.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
