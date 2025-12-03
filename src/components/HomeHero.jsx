import React, { useState, useEffect } from "react";
import "../styles/home-hero.css";

const slides = [
  {
    title: "Welcome to Spice Village",
    subtitle: "Where tradition meets flavour",
    description: "Authentic Pakistani cuisine crafted with passion and fire.",
    image: "/images/hero/slide1.jpg"
  },
  {
    title: "Fresh. Authentic. Unforgettable.",
    subtitle: "Your favourite dishes, perfected",
    description:
      "Slow-cooked curries, charcoal grills, and the magic of real spices.",
    image: "/images/hero/slide2.jpg"
  },
  {
    title: "Taste the Experience",
    subtitle: "Food made with love",
    description:
      "Experience the flavours of Pakistan—from street classics to royal feast dishes.",
    image: "/images/hero/slide3.jpg"
  }
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section className="sv-hero">
      <div className="sv-hero-left">
        <span className="sv-hero-sub">{current.subtitle}</span>

        <h1 className="sv-hero-title">{current.title}</h1>

        <p className="sv-hero-desc">{current.description}</p>

        <div className="sv-hero-buttons">
          <a href="/contact" className="sv-btn sv-btn-primary">
            Reservation
          </a>
          <a href="/menu" className="sv-btn sv-btn-outline">
            Open Menu
          </a>
        </div>

        <div className="sv-hero-dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="sv-hero-right">
        <img
          src={current.image}
          alt={current.title}
          className="sv-hero-img"
        />

        {/* Arrows */}
        <button
          className="sv-arrow left"
          onClick={() =>
            setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
        >
          ‹
        </button>

        <button
          className="sv-arrow right"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        >
          ›
        </button>
      </div>
    </section>
  );
}
