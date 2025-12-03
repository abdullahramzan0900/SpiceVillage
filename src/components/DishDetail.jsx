import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import menuData from "../data/menu"; // or "../data/menu.json"
import "../styles/dish-detail.css";

// Safe slugify - must match MenuList slugify
function slugify(name) {
  if (!name || typeof name !== "string") return "unknown-item";
  return name
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents / weird unicode
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Flatten categories into one big item list with category name included
function flattenMenu(data) {
  const result = [];
  data.forEach((cat) => {
    (cat.items || []).forEach((item) => {
      if (item && item.name) {
        result.push({
          ...item,
          category: cat.category
        });
      }
    });
  });
  return result;
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

export default function DishDetail() {
  const { slug } = useParams();

  // Flatten menu once
  const allItems = useMemo(() => flattenMenu(menuData), []);

  // Find dish by slug
  const dish = allItems.find((d) => slugify(d?.name || "") === slug);

  if (!dish) {
    return (
      <main className="sv-dish-page">
        <p>Dish not found.</p>
        <Link to="/" className="sv-back-link">
          ← Back to menu
        </Link>
      </main>
    );
  }

  const veg = isVeg(dish, dish.category);
  const spicy = isSpicy(dish);

  return (
    <main className="sv-dish-page">
      <Link to="/" className="sv-back-link">
        ← Back to menu
      </Link>

      <article className="sv-dish-layout">
        {/* Left: Image + badges */}
        <div className="sv-dish-hero-wrap">
          {dish.image && (
            <img
              src={dish.image}
              loading="lazy"
              alt={dish.name}
              className="sv-dish-hero"
            />
          )}

          <div className="sv-dish-badges">
            <span className={veg ? "sv-badge sv-badge-veg" : "sv-badge sv-badge-nonveg"}>
              {veg ? "🥦 Vegetarian" : "🍗 Non-veg"}
            </span>
            {spicy && <span className="sv-badge sv-badge-spicy">🌶 Spicy</span>}
          </div>
        </div>

        {/* Right: Info */}
        <div className="sv-dish-info">
          <header className="sv-dish-header">
            <h1>{dish.name}</h1>
            <div className="sv-dish-meta">
              <span className="sv-dish-category">{dish.category}</span>
              <span className="sv-dish-price">{dish.price}</span>
            </div>
          </header>

          <p className="sv-dish-desc">{dish.description}</p>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="sv-tag-row">
              {dish.tags.map((tag) => (
                <span key={tag} className="sv-tag-chip">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Allergens */}
          {dish.allergens && dish.allergens.length > 0 && (
            <section className="sv-box sv-box-allergens">
              <h2>Allergens</h2>
              <div className="sv-allergen-chips">
                {dish.allergens.map((a) => (
                  <span key={a} className="sv-allergen-chip">
                    {a}
                  </span>
                ))}
              </div>
              <p className="sv-allergen-note">
                If you have any allergies or intolerance, please speak to a member of staff.
              </p>
            </section>
          )}

          {/* Pairings */}
          <section className="sv-box">
            <h2>Perfect Pairings</h2>
            <div className="sv-pairings-grid">
              {/* Drinks */}
              {dish.suggestions?.drinks?.length > 0 && (
                <div className="sv-pairing-col">
                  <h3>Drinks</h3>
                  <div className="sv-pairing-cards">
                    {dish.suggestions.drinks.map((d, idx) => (
                      <div key={d.name + idx} className="sv-pair-card">
                        {d.image && (
                          <img
                            loading="lazy"
                            src={d.image}
                            alt={d.name}
                            className="sv-pair-img"
                          />
                        )}
                        <p>{d.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mains */}
              {dish.suggestions?.mains?.length > 0 && (
                <div className="sv-pairing-col">
                  <h3>Mains</h3>
                  <div className="sv-pairing-cards">
                    {dish.suggestions.mains.map((m, idx) => (
                      <div key={m.name + idx} className="sv-pair-card">
                        {m.image && (
                          <img
                            loading="lazy"
                            src={m.image}
                            alt={m.name}
                            className="sv-pair-img"
                          />
                        )}
                        <p>{m.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Desserts */}
              {dish.suggestions?.desserts?.length > 0 && (
                <div className="sv-pairing-col">
                  <h3>Desserts</h3>
                  <div className="sv-pairing-cards">
                    {dish.suggestions.desserts.map((d, idx) => (
                      <div key={d.name + idx} className="sv-pair-card">
                        {d.image && (
                          <img
                            loading="lazy"
                            src={d.image}
                            alt={d.name}
                            className="sv-pair-img"
                          />
                        )}
                        <p>{d.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
