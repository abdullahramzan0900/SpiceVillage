import React from "react";
import "../styles/chefs.css";

export default function FeaturedChefs() {
  return (
    <section className="sv-chefs">
      <div className="sv-chefs-inner">
        <h2 className="sv-section-title">Meet Our Master Chefs</h2>

        <div className="sv-chef-grid">
          <div className="sv-chef-card">
            <img src="/images/home/chef1.jpg" alt="Chef 1" />
            <h3>Chef Rahim</h3>
            <p>Specialist in Karahi, Handi, and Desi BBQ flavours.</p>
          </div>

          <div className="sv-chef-card">
            <img src="/images/home/chef2.jpg" alt="Chef 2" />
            <h3>Chef Arslan</h3>
            <p>Expert in seafood and modern fusion Indian cuisine.</p>
          </div>

          <div className="sv-chef-card">
            <img src="/images/home/chef3.jpg" alt="Chef 3" />
            <h3>Chef Alina</h3>
            <p>Dessert artist behind our cheesecakes & faloodas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
