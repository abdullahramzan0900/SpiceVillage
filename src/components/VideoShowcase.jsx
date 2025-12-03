import React from "react";
import "../styles/videos.css";

export default function VideoShowcase() {
  return (
    <section className="sv-videos-section">
      <h2 className="sv-section-title">Experience The Craft</h2>

      <p className="sv-videos-sub">
        Watch our chefs bring flavours to life — from grills to biryanis to mocktails.
      </p>

      <div className="sv-videos-grid">

        <video controls poster="/images/video-thumbs/grill.jpg">
          <source src="/videos/grill.mp4" type="video/mp4" />
        </video>

        <video controls poster="/images/video-thumbs/biryani.jpg">
          <source src="/videos/biryani.mp4" type="video/mp4" />
        </video>

        <video controls poster="/images/video-thumbs/mocktails.jpg">
          <source src="/videos/mocktails.mp4" type="video/mp4" />
        </video>

      </div>
    </section>
  );
}
