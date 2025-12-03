import React from "react";
import "../styles/contact.css";

export default function ContactCTA() {
  return (
    <section className="sv-contact-cta">
      <h2>Book Your Table</h2>
      <p>
        Whether it’s dining, catering or events — we are here to serve excellence.
      </p>

      <div className="sv-cta-buttons">
        <a href="/contact" className="sv-btn-gold">Contact Us</a>
        <a href="/menu" className="sv-btn-outline">View Menu</a>
      </div>
    </section>
  );
}
