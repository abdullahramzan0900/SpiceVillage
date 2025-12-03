import React, { useState } from "react";
import "../styles/filters.css";

export default function Filters({ search, onSearch, filters, onChangeFilters }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  function update(key, value) {
    onChangeFilters({ ...filters, [key]: value });
  }

  function toggleArrayItem(key, value) {
    const arr = filters[key] || [];
    if (arr.includes(value)) {
      update(key, arr.filter((x) => x !== value));
    } else {
      update(key, [...arr, value]);
    }
  }

  function resetAll() {
    onChangeFilters({
      vegOnly: false,
      nonVegOnly: false,
      spicyOnly: false,
      mildOnly: false,
      glutenFree: false,
      dairyFree: false,
      allergens: []
    });
    onSearch("");
  }

  const allergenList = [
    "Gluten",
    "Milk",
    "Egg",
    "Nuts",
    "Fish",
    "Soya",
    "Sesame",
    "Mustard",
    "Sulphur Dioxide"
  ];

  return (
    <>
      {/* FLOATING BUTTON (mobile + desktop) */}
      <button className="sv-filter-fab" onClick={toggle}>
        <i className="ri-equalizer-line"></i> Filters
      </button>

      {/* BACKDROP */}
      {open && <div className="sv-filter-backdrop" onClick={toggle}></div>}

      {/* FILTER PANEL */}
      <aside className={`sv-filter-panel ${open ? "open" : ""}`}>
        <header className="sv-filter-header">
          <h2>Filters</h2>
          <button className="sv-filter-close" onClick={toggle}>
            <i className="ri-close-line"></i>
          </button>
        </header>

        <div className="sv-filter-body">
          {/* SEARCH BAR */}
          <div className="sv-filter-block">
            <label>Search</label>
            <div className="sv-search-input">
              <i className="ri-search-line"></i>
              <input
                type="text"
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          {/* DIET FILTERS */}
          <div className="sv-filter-block">
            <label>Dietary</label>
            <div className="sv-pill-row">
              <button
                className={`sv-pill ${filters.vegOnly ? "active" : ""}`}
                onClick={() => update("vegOnly", !filters.vegOnly)}
              >
                🥦 Veg
              </button>

              <button
                className={`sv-pill ${filters.nonVegOnly ? "active" : ""}`}
                onClick={() => update("nonVegOnly", !filters.nonVegOnly)}
              >
                🍗 Non-Veg
              </button>
            </div>
          </div>

          {/* SPICE FILTERS */}
          <div className="sv-filter-block">
            <label>Spice Level</label>
            <div className="sv-pill-row">
              <button
                className={`sv-pill ${filters.spicyOnly ? "active" : ""}`}
                onClick={() => update("spicyOnly", !filters.spicyOnly)}
              >
                🌶 Spicy
              </button>

              <button
                className={`sv-pill ${filters.mildOnly ? "active" : ""}`}
                onClick={() => update("mildOnly", !filters.mildOnly)}
              >
                🥛 Mild
              </button>
            </div>
          </div>

          {/* ALLERGEN FILTERS */}
          <div className="sv-filter-block">
            <label>Avoid Allergens</label>
            <div className="sv-chip-grid">
              {allergenList.map((a) => (
                <button
                  key={a}
                  className={`sv-chip ${filters.allergens.includes(a) ? "selected" : ""}`}
                  onClick={() => toggleArrayItem("allergens", a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* SAFE FOODS */}
          <div className="sv-filter-block">
            <label>Special Options</label>
            <div className="sv-pill-row">
              <button
                className={`sv-pill ${filters.glutenFree ? "active" : ""}`}
                onClick={() => update("glutenFree", !filters.glutenFree)}
              >
                No Gluten
              </button>

              <button
                className={`sv-pill ${filters.dairyFree ? "active" : ""}`}
                onClick={() => update("dairyFree", !filters.dairyFree)}
              >
                No Dairy
              </button>
            </div>
          </div>
        </div>

        <footer className="sv-filter-footer">
          <button className="sv-reset-btn" onClick={resetAll}>
            Reset All
          </button>
          <button className="sv-apply-btn" onClick={toggle}>
            Apply Filters
          </button>
        </footer>
      </aside>
    </>
  );
}
