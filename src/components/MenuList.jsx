import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menu"; // or "../data/menu.json"
import "../styles/menu-list.css";
import CategoryMenu from "./CategoryMenu";
import Filters from "./Filters";

function slugify(name) {
  if (!name || typeof name !== "string") return "unknown-item";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}


function isVeg(item, categoryName) {
  if (item.tags?.includes("veg") || item.tags?.includes("vegetarian")) return true;
  if (/veg starters/i.test(categoryName)) return true;
  if (/vegetarian dishes/i.test(categoryName)) return true;
  return false;
}

function isSpicy(item) {
  return item.tags?.includes("spicy");
}

function isMild(item) {
  return item.tags?.includes("mild") || item.tags?.includes("creamy");
}

function mapToTopCategory(categoryName) {
  if (/starter/i.test(categoryName)) return "Starters";
  if (/vegetarian dishes/i.test(categoryName)) return "Vegetarian";
  if (/seafood/i.test(categoryName)) return "Seafood";
  if (/village specials/i.test(categoryName)) return "Village Specials";
  if (/biryani/i.test(categoryName) || /rice/i.test(categoryName)) return "Biryani & Rice";
  if (/bread/i.test(categoryName)) return "Breads";
  if (/dessert/i.test(categoryName)) return "Desserts";
  if (/mocktail/i.test(categoryName)) return "Mocktails";
  if (/kids/i.test(categoryName)) return "Kids Menu";
  if (/breakfast/i.test(categoryName)) return "Breakfast";
  if (/chicken|lamb|karahi|mandi|haleem|nihari|keema|gosht/i.test(categoryName))
    return "Mains";
  if (/drink/i.test(categoryName)) return "Drinks";
  return "Mains";
}

export default function MenuList() {
  const [topCategory, setTopCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    vegOnly: false,
    nonVegOnly: false,
    spicyOnly: false,
    mildOnly: false,
    glutenFree: false,
    dairyFree: false,
    allergens: []
  });
  const [openCategory, setOpenCategory] = useState(menuData[0]?.category || "");

  const flatAllergens = useMemo(
    () => new Set(menuData.flatMap((c) => c.items.flatMap((i) => i.allergens || []))),
    []
  );

  const filteredCategories = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return menuData
      .map((cat) => {
        const logicalTop = mapToTopCategory(cat.category);
        if (topCategory !== "All" && logicalTop !== topCategory) {
          return { ...cat, items: [] };
        }

        const items = (cat.items || []).filter((item) => {
          const veg = isVeg(item, cat.category);
          const nonVeg = !veg;

          if (filters.vegOnly && !veg) return false;
          if (filters.nonVegOnly && !nonVeg) return false;

          if (filters.spicyOnly && !isSpicy(item)) return false;
          if (filters.mildOnly && !isMild(item)) return false;

          if (filters.glutenFree && item.allergens?.includes("Gluten")) return false;
          if (filters.dairyFree && item.allergens?.includes("Milk")) return false;

          if (filters.allergens.length > 0) {
            if (item.allergens?.some((a) => filters.allergens.includes(a))) {
              return false;
            }
          }

          if (searchTerm.length > 0) {
            const text =
              (item.name || "") +
              " " +
              (item.description || "") +
              " " +
              (cat.category || "");
            if (!text.toLowerCase().includes(searchTerm)) return false;
          }

          return true;
        });

        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [topCategory, search, filters]);

  return (
    <main id="menu" className="sv-menu-page">
      <CategoryMenu active={topCategory} onChange={setTopCategory} />
      <Filters search={search} onSearch={setSearch} filters={filters} onChangeFilters={setFilters} />

      <div className="sv-menu-grid-wrapper">
        {filteredCategories.map((cat) => {
          const isOpen = openCategory === cat.category;
          return (
            <section key={cat.category} className="sv-category-section">
              <button
                className="sv-category-header"
                onClick={() =>
                  setOpenCategory((prev) => (prev === cat.category ? "" : cat.category))
                }
              >
                <div>
                  <h2>{cat.category}</h2>
                  <p className="sv-category-sub">
                    {cat.items.length} item{cat.items.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <span className={"sv-chevron" + (isOpen ? " sv-chevron-open" : "")}>
                  ▾
                </span>
              </button>

              <div className={"sv-category-panel" + (isOpen ? " sv-category-panel-open" : "")}>
                <div className="sv-menu-grid">
                {cat.items
  .filter((item) => item && item.name)
  .map((item, index) => {
    const veg = isVeg(item, cat.category);
    const spicy = isSpicy(item);
    const slug = slugify(item.name);

    return (
      <Link
        key={slug + index}
        to={`/dish/${slug}`}
        className="sv-menu-card"
      >
        <div className="sv-menu-img-wrap">
          <img
            loading="lazy"
            src={item.image || "/images/no-image.jpg"}
            alt={item.name}
            className="sv-menu-img"
          />

          <div className="sv-menu-chip-row">
            {veg ? (
              <span className="sv-chip sv-chip-veg">🥦 Veg</span>
            ) : (
              <span className="sv-chip sv-chip-nonveg">🍗 Non-veg</span>
            )}
            {spicy && <span className="sv-chip sv-chip-spicy">🌶 Spicy</span>}
          </div>
        </div>

        <div className="sv-menu-info">
          <div className="sv-menu-title-row">
            <h3>{item.name}</h3>
            <span className="sv-price">{item.price}</span>
          </div>

          <p className="sv-menu-desc">{item.description}</p>

          {item.allergens?.length > 0 && (
            <p className="sv-menu-allergens">
              Allergens: {item.allergens.join(", ")}
            </p>
          )}
        </div>
      </Link>
    );
  })}

                </div>
              </div>
            </section>
          );
        })}

        {filteredCategories.length === 0 && (
          <p className="sv-empty-state">
            No dishes match your filters. Try clearing some filters or search terms.
          </p>
        )}
      </div>
    </main>
  );
}
