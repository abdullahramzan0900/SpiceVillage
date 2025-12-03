import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuList from "./components/MenuList";
import DishDetail from "./components/DishDetail";
import Dashboard from "./components/Dashboard";
import WhatsNew from "./components/WhatsNew";

import "./styles/global.css";
import Home from "./components/Home";
import VideoGalleryPage from "./components/VideoGalleryPage";

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="app-root" data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="app-main"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Routes location={location}>
          <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<MenuList />} />
            <Route path="/dish/:slug" element={<DishDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new" element={<WhatsNew />} />
            <Route path="/videos" element={<VideoGalleryPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
