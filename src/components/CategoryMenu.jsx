import React from "react";
import "../styles/dropdown.css";

const TOP_CATEGORIES = [
  "All",
  "Starters",
  "Mains",
  "Vegetarian",
  "Seafood",
  "Village Specials",
  "Biryani & Rice",
  "Breads",
  "Desserts",
  "Drinks",
  "Mocktails",
  "Kids Menu",
  "Breakfast"
];

export default function CategoryMenu({ active, onChange }) {
  return (
    <div className="sv-category-menu">
      {/* Desktop: select */}
      <div className="sv-category-select-wrap">
        <label className="sv-category-label">Browse:</label>
        <select
          className="sv-category-select"
          value={active}
          onChange={(e) => onChange(e.target.value)}
        >
          {TOP_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile: horizontal chips */}
      <div className="sv-category-scroll">
        {TOP_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={
              "sv-category-chip" +
              (cat === active ? " sv-category-chip-active" : "")
            }
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
