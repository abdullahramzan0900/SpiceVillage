import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="sv-footer">
      <div className="sv-footer-inner">
        <div className="sv-footer-col">
          <h4>Spice Village</h4>
          <p>
            Every meal has a story. Experience authentic British–Pakistani flavours,
            crafted with fire and spice.
          </p>
        </div>

        <div className="sv-footer-col">
          <h4>Visit Us</h4>
          <p>Tooting, London<br />United Kingdom</p>
          <p>Open: 10:00 – 23:00</p>
        </div>

        <div className="sv-footer-col">
          <h4>Contact</h4>
          <p>Phone: 0000 000 000</p>
          <p>Email: info@spicevillage.co.uk</p>
        </div>
      </div>
      <div className="sv-footer-bottom">
        <span>© {new Date().getFullYear()} Spice Village</span>
      </div>
    </footer>
  );
}
