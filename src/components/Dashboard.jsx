import { motion } from "framer-motion";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="page-wrapper dashboard">
      <motion.div
        className="dashboard-card glass-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h2 className="section-title">Dashboard</h2>
        <p className="section-subtitle">
          A quick overview of what&apos;s happening in Spice Village
          (placeholder – can be wired to real data later).
        </p>

        <div className="dashboard-grid">
          <div className="dash-tile">
            <span className="dash-label">New dishes coming soon</span>
            <p>Plan seasonal specials and chef signatures.</p>
          </div>
          <div className="dash-tile">
            <span className="dash-label">Highlight best pairings</span>
            <p>Showcase top combinations to boost experience.</p>
          </div>
          <div className="dash-tile">
            <span className="dash-label">Engage guests</span>
            <p>Use videos and stories to make dishes memorable.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
