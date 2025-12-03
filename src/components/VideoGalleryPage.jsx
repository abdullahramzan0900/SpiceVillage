import React, { useState } from "react";
import "../styles/video-gallery.css";

const videoList = [
  {
    title: "Mango Mania Mocktail — Creation",
    thumbnail: "/videos/thumbnails/mango-mania-thumb.jpg",
    src: "/videos/mango-mania.mp4"
  },
  {
    title: "Pina Colada Mix — Behind the Scenes",
    thumbnail: "/videos/thumbnails/pina-colada-thumb.jpg",
    src: "/videos/pina-colada.mp4"
  },
  {
    title: "Strawberry Mojito Mocktail",
    thumbnail: "/videos/thumbnails/strawberry-mojito-thumb.jpg",
    src: "/videos/strawberry-mojito.mp4"
  },
  {
    title: "Kitchen: Dynamite Prawns Grill Prep",
    thumbnail: "/videos/thumbnails/dynamite-prawns-thumb.jpg",
    src: "/videos/dynamite-prawns.mp4"
  },
  {
    title: "Signature Biryani — Plating & Serve",
    thumbnail: "/videos/thumbnails/biryani-thumb.jpg",
    src: "/videos/biryani.mp4"
  },
  // ... add more videos here
];

export default function VideoGalleryPage() {
  const [activeVideo, setActiveVideo] = useState(videoList[0]);

  return (
    <main className="vg-page">
      <header className="vg-header">
        <h1>Spice Village — Video Gallery</h1>
        <p>Watch how we create your favourite dishes & drinks 🍹🔥</p>
      </header>

      <div className="vg-player-wrapper">
        <video
          key={activeVideo.src}
          controls
          autoPlay
          muted
          className="vg-player"
        >
          <source src={activeVideo.src} type="video/mp4" />
        </video>
        <h2 className="vg-player-title">{activeVideo.title}</h2>
      </div>

      <section className="vg-thumbnails">
        {videoList.map((vid, idx) => (
          <div
            key={idx}
            className={
              "vg-thumb-card " +
              (activeVideo.src === vid.src ? "vg-thumb-active" : "")
            }
            onClick={() => setActiveVideo(vid)}
          >
            <img
              loading="lazy"
              src={vid.thumbnail}
              alt={vid.title}
              className="vg-thumb-img"
            />
            <p className="vg-thumb-title">{vid.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
