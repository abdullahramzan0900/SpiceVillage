import lambbhuna from "../assets/images/lambbhuna.jpg";
import rice from "../assets/images/lambbhuna.jpg";
import naan from "../assets/images/lambbhuna.jpg";
import raita from "../assets/images/lambbhuna.jpg";
import papad from "../assets/images/lambbhuna.jpg";
import soda from "../assets/images/lambbhuna.jpg";

// import lambBhunaVideo from "../assets/videos/lamb-bhuna.mp4";

const menu = [
  {
    "category": "Veg Starters",
    "items": [
      {
        "name": "Popadums",
        "description": "Crispy thin wafers served with an array of sauces.",
        "price": "£2.00",
        "allergens": ["Gluten", "Soya"],
        "tags": ["starter", "crispy", "light", "veg"],
        "image": "/images/starters/popadums.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Biryani",
              "image": "/images/mains/chicken-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Onion Bhaji",
        "description": "Crispy deep-fried fritters made from sliced onions and a blend of spices and flour.",
        "price": "£3.99",
        "allergens": ["Gluten", "Soya"],
        "tags": ["starter", "fried", "crispy", "veg"],
        "image": "/images/starters/onion-bhaji.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Lamb Biryani",
              "image": "/images/mains/lamb-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      },
      {
        "name": "Pakoras",
        "description": "Vegetables such as onions and potatoes coated in a spiced batter of flour, herbs and spices and deep-fried until golden and crispy.",
        "price": "£4.99",
        "allergens": ["Gluten", "Soya"],
        "tags": ["starter", "fried", "crispy", "veg"],
        "image": "/images/starters/pakoras.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Strawberry Mojito",
              "image": "/images/drinks/strawberry-mojito.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Tikka Masala",
              "image": "/images/mains/chicken-tikka-masala.jpg"
            }
          ],
          "desserts": [
            {
              "name": "New York Style Cheesecake",
              "image": "/images/desserts/new-york-style-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Vegetable Samosa",
        "description": "Fried triangular pastry with a savoury filling of spiced potatoes, onions and peas, served with chutney.",
        "price": "£3.99",
        "allergens": ["Gluten", "Milk", "Soya"],
        "tags": ["starter", "fried", "veg", "snack"],
        "image": "/images/starters/vegetable-samosa.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Peach Mojito",
              "image": "/images/drinks/peach-mojito.jpg"
            },
            {
              "name": "Tea/ Qawa/ Coffee",
              "image": "/images/drinks/tea-qawa-coffee.jpg"
            }
          ],
          "mains": [
            {
              "name": "Mixed Vegetable Jalfrezi",
              "image": "/images/mains/mixed-vegetable-jalfrezi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Kheer",
              "image": "/images/desserts/kheer.jpg"
            }
          ]
        }
      },
      {
        "name": "Aloo Papri Chaat",
        "description": "Spicy and tangy chaat with potatoes and crisp papri for a burst of flavour.",
        "price": "£7.99",
        "allergens": ["Gluten", "Milk", "Soya"],
        "tags": ["starter", "chaat", "veg"],
        "image": "/images/starters/aloo-papri-chaat.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Passion Fruit Mojito",
              "image": "/images/drinks/passion-fruit-mojito.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Biryani",
              "image": "/images/mains/chicken-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lahori Falooda",
              "image": "/images/desserts/lahori-falooda.jpg"
            }
          ]
        }
      },
      {
        "name": "Aloo Tikki Chaat",
        "description": "Potato patties served with mint chutney, onion, sev and yoghurt for a sweet and savoury taste.",
        "price": "£6.99",
        "allergens": ["Gluten", "Milk", "Soya"],
        "tags": ["starter", "chaat", "veg"],
        "image": "/images/starters/aloo-tikki-chaat.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Apple Cooler",
              "image": "/images/drinks/apple-cooler.jpg"
            },
            {
              "name": "Karak Chai",
              "image": "/images/drinks/karak-chai.jpg"
            }
          ],
          "mains": [
            {
              "name": "Saag Gosht",
              "image": "/images/mains/saag-gosht.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lakhnawi Halwa & ice cream",
              "image": "/images/desserts/lakhnawi-halwa-ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Samosa Chaat",
        "description": "Spiced chickpeas served with vegetable samosas and tamarind chutney.",
        "price": "£7.99",
        "allergens": ["Gluten", "Milk", "Soya", "Sulphur Dioxide"],
        "tags": ["starter", "chaat", "veg"],
        "image": "/images/starters/samosa-chaat.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Jalfrezi",
              "image": "/images/mains/chicken-jalfrezi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Milk Cake",
              "image": "/images/desserts/milk-cake.jpg"
            }
          ]
        }
      },
      {
        "name": "Masala Fries",
        "description": "Perfectly seasoned crispy golden fries tossed in a blend of spices.",
        "price": "£4.99",
        "allergens": ["Sesame", "Soya"],
        "tags": ["starter", "side", "fried", "veg"],
        "image": "/images/starters/masala-fries.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Blue Lagoon",
              "image": "/images/drinks/blue-lagoon.jpg"
            }
          ],
          "mains": [
            {
              "name": "Village Famous Masala Fish",
              "image": "/images/mains/village-famous-masala-fish.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Ice Cream",
              "image": "/images/desserts/ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Chilli Paneer",
        "description": "Paneer fried and marinated in house spices, served with mixed peppers.",
        "price": "£6.99",
        "allergens": ["Gluten", "Milk", "Sesame"],
        "tags": ["starter", "paneer", "veg", "fried"],
        "image": "/images/starters/chilli-paneer.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lychee Martini",
              "image": "/images/drinks/lychee-martini.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Shahi Paneer Masala",
              "image": "/images/mains/shahi-paneer-masala.jpg"
            }
          ],
          "desserts": [
            {
              "name": "SV Special Cheesecake",
              "image": "/images/desserts/sv-special-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Pani Puri",
        "description": "Crispy hollow puri filled with potatoes and chickpeas, served with spicy tangy water and sweet tamarind chutney.",
        "price": "£5.99",
        "allergens": ["Gluten", "Milk"],
        "tags": ["starter", "street-food", "veg"],
        "image": "/images/starters/pani-puri.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            },
            {
              "name": "Peach Mojito",
              "image": "/images/drinks/peach-mojito.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Biryani",
              "image": "/images/mains/chicken-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Paneer Tikka",
        "description": "Cubes of paneer, onion and bell peppers marinated with spices and yoghurt, roasted in the clay oven.",
        "price": "£5.99",
        "allergens": ["Gluten", "Milk"],
        "tags": ["starter", "tandoori", "paneer", "veg"],
        "image": "/images/starters/paneer-tikka.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Passion Fruit Mojito",
              "image": "/images/drinks/passion-fruit-mojito.jpg"
            }
          ],
          "mains": [
            {
              "name": "Village Special Tarka Daal",
              "image": "/images/mains/village-special-tarka-daal.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Kheer",
              "image": "/images/desserts/kheer.jpg"
            }
          ]
        }
      },
      {
        "name": "Fresh Salad",
        "description": "Fresh mixed salad served as a light accompaniment.",
        "price": "£3.99",
        "allergens": [],
        "tags": ["side", "starter", "veg", "fresh"],
        "image": "/images/starters/fresh-salad.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Sparkling | Still Water Large",
              "image": "/images/drinks/sparkling-still-water-large.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Tikka",
              "image": "/images/mains/chicken-tikka.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Ice Cream",
              "image": "/images/desserts/ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Fries",
        "description": "Classic golden fries.",
        "price": "£3.99",
        "allergens": ["Soya"],
        "tags": ["side", "starter", "fried", "veg"],
        "image": "/images/starters/fries.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Apple Cooler",
              "image": "/images/drinks/apple-cooler.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Wings",
              "image": "/images/mains/chicken-wings.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Molten Delight",
              "image": "/images/desserts/molten-delight.jpg"
            }
          ]
        }
      },
      {
        "name": "Peri Fries",
        "description": "Fries coated in peri-peri seasoning for extra flavour.",
        "price": "£3.99",
        "allergens": ["Soya"],
        "tags": ["side", "starter", "fried", "veg"],
        "image": "/images/starters/peri-fries.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "The Atomic",
              "image": "/images/drinks/the-atomic.jpg"
            }
          ],
          "mains": [
            {
              "name": "Grilled Lamb Chops",
              "image": "/images/mains/grilled-lamb-chops.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Torta Gianduia",
              "image": "/images/desserts/torta-gianduia.jpg"
            }
          ]
        }
      }
    ]
  },
  {
    "category": "Non-Veg Starters",
    "items": [
      {
        "name": "Lamb Sheekh Kebabs",
        "description": "Minced lamb mixed with spices and slow cooked on the grill.",
        "price": "£5.99",
        "allergens": ["Milk"],
        "tags": ["starter", "grilled", "lamb", "non-veg"],
        "image": "/images/starters/lamb-sheekh-kebabs.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Karak Chai",
              "image": "/images/drinks/karak-chai.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Lamb Biryani",
              "image": "/images/mains/lamb-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Sheekh Kebabs",
        "description": "Minced chicken mixed with spices and slow cooked on the grill.",
        "price": "£4.99",
        "allergens": ["Milk"],
        "tags": ["starter", "grilled", "chicken", "non-veg"],
        "image": "/images/starters/chicken-sheekh-kebabs.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Biryani",
              "image": "/images/mains/chicken-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Ice Cream",
              "image": "/images/desserts/ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Meat Samosa",
        "description": "Crispy golden pastry filled with spiced minced meat, onions and herbs, deep-fried until crisp.",
        "price": "£4.99",
        "allergens": ["Gluten", "Milk", "Soya"],
        "tags": ["starter", "fried", "non-veg"],
        "image": "/images/starters/meat-samosa.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Balti Lamb",
              "image": "/images/mains/balti-lamb.jpg"
            }
          ],
          "desserts": [
            {
              "name": "New York Style Cheesecake",
              "image": "/images/desserts/new-york-style-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Tikka",
        "description": "Boneless chicken cubes in a spicy marinade, barbecued to perfection.",
        "price": "£6.99",
        "allergens": ["Milk"],
        "tags": ["starter", "tandoori", "chicken", "non-veg"],
        "image": "/images/starters/chicken-tikka.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lychee Martini",
              "image": "/images/drinks/lychee-martini.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Tikka Masala",
              "image": "/images/mains/chicken-tikka-masala.jpg"
            }
          ],
          "desserts": [
            {
              "name": "SV Special Cheesecake",
              "image": "/images/desserts/sv-special-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Malai Tikka",
        "description": "Tender chicken marinated with cheese, butter and cream, then grilled.",
        "price": "£6.99",
        "allergens": ["Egg", "Milk"],
        "tags": ["starter", "creamy", "tandoori", "chicken", "non-veg"],
        "image": "/images/starters/malai-tikka.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Pina Colada",
              "image": "/images/drinks/pina-colada.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Korma",
              "image": "/images/mains/chicken-korma.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Milk Cake",
              "image": "/images/desserts/milk-cake.jpg"
            }
          ]
        }
      },
      {
        "name": "Fish Tikka",
        "description": "Marinated fish pieces grilled with a special blend of spices.",
        "price": "£9.99",
        "allergens": ["Gluten"],
        "tags": ["starter", "fish", "tandoori", "non-veg"],
        "image": "/images/starters/fish-tikka.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Blue Lagoon",
              "image": "/images/drinks/blue-lagoon.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "King Prawn Karahi",
              "image": "/images/mains/king-prawn-karahi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lahori Falooda",
              "image": "/images/desserts/lahori-falooda.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Wings",
        "description": "Tender chicken wings, seasoned and grilled to crispy perfection.",
        "price": "£6.99",
        "allergens": ["Milk", "Mustard"],
        "tags": ["starter", "grilled", "chicken", "non-veg"],
        "image": "/images/starters/chicken-wings.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Apple Cooler",
              "image": "/images/drinks/apple-cooler.jpg"
            }
          ],
          "mains": [
            {
              "name": "Afghani Chicken Karahi",
              "image": "/images/mains/afghani-chicken-karahi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Molten Delight",
              "image": "/images/desserts/molten-delight.jpg"
            }
          ]
        }
      },
      {
        "name": "Grilled Lamb Chops",
        "description": "Succulent and tender lamb chops grilled to perfection.",
        "price": "£11.99",
        "allergens": ["Milk"],
        "tags": ["starter", "grilled", "lamb", "non-veg"],
        "image": "/images/starters/grilled-lamb-chops.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Billionaire Daiquiri",
              "image": "/images/drinks/billionaire-daiquiri.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [
            {
              "name": "Saag Gosht",
              "image": "/images/mains/saag-gosht.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Torta Gianduia",
              "image": "/images/desserts/torta-gianduia.jpg"
            }
          ]
        }
      },
      {
        "name": "Shami Kebab",
        "description": "Minced lamb mixed with spices, coated in egg and deep-fried.",
        "price": "£4.99",
        "allergens": ["Egg", "Milk", "Soya"],
        "tags": ["starter", "fried", "lamb", "non-veg"],
        "image": "/images/starters/shami-kebab.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Karak Chai",
              "image": "/images/drinks/karak-chai.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Lamb Bhoona",
              "image": "/images/mains/lamb-bhoona.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Chapli Kebab",
        "description": "Minced lamb with a unique spice blend, lightly fried.",
        "price": "£3.99",
        "allergens": ["Egg", "Gluten", "Soya"],
        "tags": ["starter", "fried", "lamb", "non-veg"],
        "image": "/images/starters/chapli-kebab.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            }
          ],
          "mains": [
            {
              "name": "Achari Lamb",
              "image": "/images/mains/achari-lamb.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      },
      {
        "name": "Dynamite Prawns",
        "description": "Tempura-battered prawns lightly tossed in a sriracha aioli.",
        "price": "£10.99",
        "allergens": ["Egg", "Gluten", "Nuts", "Sesame", "Milk", "Soya"],
        "tags": ["starter", "fried", "prawns", "non-veg"],
        "image": "/images/starters/dynamite-prawns.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "The Atomic",
              "image": "/images/drinks/the-atomic.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Prawn Biryani",
              "image": "/images/mains/prawn-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "New York Style Cheesecake",
              "image": "/images/desserts/new-york-style-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Dynamite Chicken",
        "description": "Tempura-battered chicken lightly tossed in a sriracha aioli.",
        "price": "£8.99",
        "allergens": ["Egg", "Gluten", "Nuts", "Sesame", "Milk", "Soya"],
        "tags": ["starter", "fried", "chicken", "non-veg"],
        "image": "/images/starters/dynamite-chicken.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Tikka Biryani",
              "image": "/images/mains/chicken-tikka-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "SV Special Cheesecake",
              "image": "/images/desserts/sv-special-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Anarakali Baisan Wali Machlii",
        "description": "Fish coated in gram flour and spices, cooked to a crisp finish.",
        "price": "£8.99",
        "allergens": ["Gluten", "Fish", "Soya"],
        "tags": ["starter", "fish", "fried", "non-veg"],
        "image": "/images/starters/anarakali-baisan-wali-machlii.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Blue Lagoon",
              "image": "/images/drinks/blue-lagoon.jpg"
            },
            {
              "name": "Apple Cooler",
              "image": "/images/drinks/apple-cooler.jpg"
            }
          ],
          "mains": [
            {
              "name": "Village Famous Masala Fish",
              "image": "/images/mains/village-famous-masala-fish.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Lahori Falooda",
              "image": "/images/desserts/lahori-falooda.jpg"
            }
          ]
        }
      },
      {
        "name": "Tandoori King Prawns",
        "description": "King prawns marinated with subtle spices and cooked in a clay oven.",
        "price": "£13.99",
        "allergens": ["Gluten", "Milk"],
        "tags": ["starter", "tandoori", "prawns", "non-veg"],
        "image": "/images/starters/tandoori-king-prawns.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Exotic Daiquiris",
              "image": "/images/drinks/exotic-daiquiris.jpg"
            },
            {
              "name": "Sparkling | Still Water Large",
              "image": "/images/drinks/sparkling-still-water-large.jpg"
            }
          ],
          "mains": [
            {
              "name": "King Prawn Karahi",
              "image": "/images/mains/king-prawn-karahi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Village Famous Masala Fish",
        "description": "Delicately spiced masala fish made using a treasured family recipe.",
        "price": "£9.99",
        "allergens": ["Gluten", "Fish", "Mustard", "Soya"],
        "tags": ["starter", "fish", "non-veg"],
        "image": "/images/starters/village-famous-masala-fish.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Prawn Biryani",
              "image": "/images/mains/prawn-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Milk Cake",
              "image": "/images/desserts/milk-cake.jpg"
            }
          ]
        }
      },
      {
        "name": "Village Special Mixed Grill",
        "description": "A sharing platter with seekh kebabs, chicken tikka, lamb tikka and lamb chops.",
        "price": "£34.99",
        "allergens": ["Milk"],
        "tags": ["starter", "platter", "grilled", "non-veg", "speciality"],
        "image": "/images/starters/village-special-mixed-grill.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi Jug",
              "image": "/images/drinks/lassi-jug.jpg"
            },
            {
              "name": "Billionaire Daiquiri",
              "image": "/images/drinks/billionaire-daiquiri.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Mandi",
              "image": "/images/mains/chicken-mandi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Birthday Special",
              "image": "/images/desserts/birthday-special.jpg"
            }
          ]
        }
      },
      {
        "name": "Kebab Wrap",
        "description": "Grilled lamb kebabs with vegetables, sauces and condiments wrapped in naan bread.",
        "price": "£5.99",
        "allergens": ["Egg", "Gluten", "Milk"],
        "tags": ["starter", "wrap", "non-veg"],
        "image": "/images/starters/kebab-wrap.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Apple Cooler",
              "image": "/images/drinks/apple-cooler.jpg"
            }
          ],
          "mains": [
            {
              "name": "Lamb Madras",
              "image": "/images/mains/lamb-madras.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Ice Cream",
              "image": "/images/desserts/ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Tikka Wrap",
        "description": "Marinated chicken grilled to perfection and wrapped in a soft naan bread.",
        "price": "£6.99",
        "allergens": ["Egg", "Gluten", "Milk"],
        "tags": ["starter", "wrap", "chicken", "non-veg"],
        "image": "/images/starters/chicken-tikka-wrap.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Jalfrezi",
              "image": "/images/mains/chicken-jalfrezi.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Bun Kebab",
        "description": "Shallow-fried spicy patty with onions and chutney served in a brioche bun, inspired by Pakistani street food.",
        "price": "£6.99",
        "allergens": ["Egg", "Gluten", "Milk", "Sesame"],
        "tags": ["starter", "burger", "non-veg", "speciality"],
        "image": "/images/starters/bun-kebab.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Blue Lagoon",
              "image": "/images/drinks/blue-lagoon.jpg"
            }
          ],
          "mains": [
            {
              "name": "Chicken Biryani",
              "image": "/images/mains/chicken-biryani.jpg"
            }
          ],
          "desserts": [
            {
              "name": "Molten Delight",
              "image": "/images/desserts/molten-delight.jpg"
            }
          ]
        }
      }
    ]
  },
  {
    "category": "Chicken Dishes",
    "items": [
      {
        "name": "Chicken Korma",
        "description": "Diced chicken mildly spiced and cooked with fresh herbs in a creamy sauce.",
        "price": "£11.99",
        "allergens": ["Nuts", "Milk", "Soya"],
        "tags": ["main", "chicken", "creamy"],
        "image": "/images/mains/chicken-korma.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Pina Colada",
              "image": "/images/drinks/pina-colada.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Milk Cake",
              "image": "/images/desserts/milk-cake.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Vindaloo",
        "description": "A fiery hot and spicy chicken dish with bold flavour and heat.",
        "price": "£11.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "chicken", "spicy"],
        "image": "/images/mains/chicken-vindaloo.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Sparkling | Still Water Large",
              "image": "/images/drinks/sparkling-still-water-large.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Ice Cream",
              "image": "/images/desserts/ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Butter Chicken",
        "description": "Off-the-bone chicken cooked in butter in a medium spiced sauce.",
        "price": "£12.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "chicken", "creamy"],
        "image": "/images/mains/butter-chicken.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "SV Special Cheesecake",
              "image": "/images/desserts/sv-special-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Balti Chicken",
        "description": "Chicken cooked in spices with fresh herbs in a balti-style sauce.",
        "price": "£12.99",
        "allergens": ["Soya"],
        "tags": ["main", "chicken"],
        "image": "/images/mains/balti-chicken.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Jalfrezi",
        "description": "Chicken cooked in a spicy tomato sauce with stir-fried peppers and onions.",
        "price": "£11.99",
        "allergens": ["Soya"],
        "tags": ["main", "chicken", "spicy"],
        "image": "/images/mains/chicken-jalfrezi.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Passion Fruit Mojito",
              "image": "/images/drinks/passion-fruit-mojito.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "New York Style Cheesecake",
              "image": "/images/desserts/new-york-style-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Chicken Tikka Masala",
        "description": "Chargrilled chicken tikka cooked with tomatoes and herbs.",
        "price": "£12.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "chicken"],
        "image": "/images/mains/chicken-tikka-masala.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Peach Mojito",
              "image": "/images/drinks/peach-mojito.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Lahori Falooda",
              "image": "/images/desserts/lahori-falooda.jpg"
            }
          ]
        }
      },
      {
        "name": "Afghani Chicken Karahi",
        "description": "Baby chicken on the bone cooked Afghan-style in a karahi.",
        "price": "£11.99",
        "allergens": ["Soya"],
        "tags": ["main", "chicken"],
        "image": "/images/mains/afghani-chicken-karahi.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Apple Cooler",
              "image": "/images/drinks/apple-cooler.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Kheer",
              "image": "/images/desserts/kheer.jpg"
            }
          ]
        }
      }
    ]
  },
  {
    "category": "Lamb Dishes",
    "items": [
      {
        "name": "Saag Gosht",
        "description": "Lamb cooked with fresh spinach purée, garlic and mustard seeds.",
        "price": "£12.99",
        "allergens": ["Milk", "Mustard", "Soya"],
        "tags": ["main", "lamb"],
        "image": "/images/mains/saag-gosht.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Afghani Lamb Karahi",
        "description": "Spring lamb on the bone cooked in Afghan style in a karahi.",
        "price": "£12.99",
        "allergens": ["Soya"],
        "tags": ["main", "lamb"],
        "image": "/images/mains/afghani-lamb-karahi.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            },
            {
              "name": "Exotic Daiquiris",
              "image": "/images/drinks/exotic-daiquiris.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      },
      {
        "name": "Lamb Madras",
        "description": "Hot and fiery lamb curry made with classic madras spices.",
        "price": "£12.99",
        "allergens": ["Soya"],
        "tags": ["main", "lamb", "spicy"],
        "image": "/images/mains/lamb-madras.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Sparkling | Still Water Large",
              "image": "/images/drinks/sparkling-still-water-large.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Ice Cream",
              "image": "/images/desserts/ice-cream.jpg"
            }
          ]
        }
      },
      {
        "name": "Balti Lamb",
        "description": "Lamb cooked with extra onions in a medium balti sauce.",
        "price": "£13.99",
        "allergens": ["Soya"],
        "tags": ["main", "lamb"],
        "image": "/images/mains/balti-lamb.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Karak Chai",
              "image": "/images/drinks/karak-chai.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Milk Cake",
              "image": "/images/desserts/milk-cake.jpg"
            }
          ]
        }
      },
      {
        "name": "Lamb Bhoona",
        "description": "Lamb cooked with onions, tomatoes and fresh herbs.",
        "price": "£12.99",
        "allergens": ["Soya"],
        "tags": ["main", "lamb"],
        "image": "/images/mains/lamb-bhoona.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Passion Fruit Mojito",
              "image": "/images/drinks/passion-fruit-mojito.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "New York Style Cheesecake",
              "image": "/images/desserts/new-york-style-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Lamb Korma",
        "description": "Lamb cooked in a creamy coconut sauce with toasted Pakistani spices.",
        "price": "£12.99",
        "allergens": ["Nuts", "Milk", "Soya"],
        "tags": ["main", "lamb", "creamy"],
        "image": "/images/mains/lamb-korma.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Pina Colada",
              "image": "/images/drinks/pina-colada.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "SV Special Cheesecake",
              "image": "/images/desserts/sv-special-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Achari Lamb",
        "description": "A classic lamb curry combining sweet and pickled flavours for a vibrant taste.",
        "price": "£12.99",
        "allergens": ["Mustard", "Soya"],
        "tags": ["main", "lamb"],
        "image": "/images/mains/achari-lamb.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      }
    ]
  },
  {
    "category": "Vegetarian Dishes",
    "items": [
      {
        "name": "Mixed Vegetable Jalfrezi",
        "description": "Seasonal vegetables cooked with onions, peppers and tomatoes in a mildly spiced masala.",
        "price": "£6.99",
        "allergens": ["Soya"],
        "tags": ["main", "veg"],
        "image": "/images/mains/mixed-vegetable-jalfrezi.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Kheer",
              "image": "/images/desserts/kheer.jpg"
            }
          ]
        }
      },
      {
        "name": "Saag Aloo",
        "description": "Greens such as spinach and mustard leaves cooked with potatoes.",
        "price": "£7.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "veg"],
        "image": "/images/mains/saag-aloo.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Karak Chai",
              "image": "/images/drinks/karak-chai.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Bombay Aloo",
        "description": "Potato cubes fried and seasoned with spices such as cumin, garlic, garam masala, turmeric and chilli powder.",
        "price": "£6.99",
        "allergens": ["Soya"],
        "tags": ["main", "veg"],
        "image": "/images/mains/bombay-aloo.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Virgin Lime Mojito",
              "image": "/images/drinks/virgin-lime-mojito.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Lakhnawi Halwa",
              "image": "/images/desserts/lakhnawi-halwa.jpg"
            }
          ]
        }
      },
      {
        "name": "Chana Masala",
        "description": "A favourite with vegetarian regulars; chickpeas soaked overnight and cooked in a subtle sauce.",
        "price": "£7.99",
        "allergens": ["Gluten", "Soya", "Sulphur Dioxide"],
        "tags": ["main", "veg", "speciality"],
        "image": "/images/mains/chana-masala.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Mango Mania",
              "image": "/images/drinks/mango-mania.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Kheer",
              "image": "/images/desserts/kheer.jpg"
            }
          ]
        }
      },
      {
        "name": "Shahi Paneer Masala",
        "description": "Cottage cheese cubes and mixed peppers cooked in a thick masala sauce, flavoured with fresh coriander.",
        "price": "£7.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "paneer", "veg"],
        "image": "/images/mains/shahi-paneer-masala.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Pina Colada",
              "image": "/images/drinks/pina-colada.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "SV Special Cheesecake",
              "image": "/images/desserts/sv-special-cheesecake.jpg"
            }
          ]
        }
      },
      {
        "name": "Mattar Paneer",
        "description": "Cottage cheese cubes cooked with fresh green peas in a light sauce.",
        "price": "£7.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "paneer", "veg"],
        "image": "/images/mains/mattar-paneer.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Karak Chai",
              "image": "/images/drinks/karak-chai.jpg"
            },
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Nawabi Qulfi",
              "image": "/images/desserts/nawabi-qulfi.jpg"
            }
          ]
        }
      },
      {
        "name": "Village Special Tarka Daal",
        "description": "A lentil-based dish with subtle spices, said to be created by a royal chef, recommended with pilau rice.",
        "price": "£7.99",
        "allergens": ["Milk", "Soya"],
        "tags": ["main", "veg", "speciality"],
        "image": "/images/mains/village-special-tarka-daal.jpg",
        "suggestions": {
          "drinks": [
            {
              "name": "Lassi",
              "image": "/images/drinks/lassi.jpg"
            },
            {
              "name": "Soft Drinks",
              "image": "/images/drinks/soft-drinks.jpg"
            }
          ],
          "mains": [],
          "desserts": [
            {
              "name": "Kheer",
              "image": "/images/desserts/kheer.jpg"
            }
          ]
        }
      }, 
      {
        "category": "Seafood",
        "items": [
          {
            "name": "King Prawn Karahi",
            "description": "King prawns cooked and pan-fried with spices, peppers, onions, and tomatoes.",
            "price": "£14.99",
            "allergens": ["Crustacean", "Soya"],
            "tags": ["main", "seafood", "prawns"],
            "image": "/images/seafood/king-prawn-karahi.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Lychee Martini",
                  "image": "/images/drinks/lychee-martini.jpg"
                },
                {
                  "name": "Blue Lagoon",
                  "image": "/images/drinks/blue-lagoon.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Lahori Falooda",
                  "image": "/images/desserts/lahori-falooda.jpg"
                }
              ]
            }
          },
          {
            "name": "Prawn Madras",
            "description": "Hot and fiery prawns cooked with madras spices for a bold flavour.",
            "price": "£14.99",
            "allergens": ["Crustacean", "Milk", "Soya"],
            "tags": ["main", "seafood", "spicy"],
            "image": "/images/seafood/prawn-madras.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Sparkling Water",
                  "image": "/images/drinks/sparkling-water.jpg"
                },
                {
                  "name": "Mango Mania",
                  "image": "/images/drinks/mango-mania.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Ice Cream",
                  "image": "/images/desserts/ice-cream.jpg"
                }
              ]
            }
          },
          {
            "name": "Achaari Prawn Karahi",
            "description": "A classic prawn curry blending sweet and pickled flavours.",
            "price": "£14.99",
            "allergens": ["Crustacean", "Mustard", "Soya"],
            "tags": ["main", "seafood"],
            "image": "/images/seafood/achaari-prawn-karahi.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Virgin Lime Mojito",
                  "image": "/images/drinks/virgin-lime-mojito.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          }
        ]
      },
      {
        "category": "Village Specials",
        "items": [
          {
            "name": "Keema Karahi",
            "description": "Minced meat cooked with peas, ginger, chilli, onions, ghee and traditional spices.",
            "price": "£11.99",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "lamb", "speciality"],
            "image": "/images/specials/keema-karahi.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "SV Special Cheesecake",
                  "image": "/images/desserts/sv-special-cheesecake.jpg"
                }
              ]
            }
          },
          {
            "name": "Lahori Nihari",
            "description": "Lamb shank slowly cooked overnight in traditional spices.",
            "price": "£13.99",
            "allergens": ["Gluten", "Soya"],
            "tags": ["main", "lamb", "slow-cooked"],
            "image": "/images/specials/lahori-nihari.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Karak Chai",
                  "image": "/images/drinks/karak-chai.jpg"
                },
                {
                  "name": "Apple Cooler",
                  "image": "/images/drinks/apple-cooler.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Nawabi Qulfi",
                  "image": "/images/desserts/nawabi-qulfi.jpg"
                }
              ]
            }
          },
          {
            "name": "Shahi Haleem",
            "description": "Traditional dish prepared with lentils, lamb and spices.",
            "price": "£12.99",
            "allergens": ["Gluten", "Milk", "Soya"],
            "tags": ["main", "lamb", "lentils"],
            "image": "/images/specials/shahi-haleem.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Kheer",
                  "image": "/images/desserts/kheer.jpg"
                }
              ]
            }
          },
          {
            "name": "Maghaz Masala",
            "description": "Lamb brain cooked with spices for rich flavour. Weekend special.",
            "price": "£12.99",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "lamb", "speciality"],
            "image": "/images/specials/maghaz-masala.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Mint Mojito",
                  "image": "/images/drinks/virgin-lime-mojito.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          },
          {
            "name": "Paaya",
            "description": "Slow cooked goat feet in a unique blend of flavours.",
            "price": "£9.99",
            "allergens": ["Gluten", "Soya"],
            "tags": ["main", "lamb", "traditional"],
            "image": "/images/specials/paaya.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Karak Chai",
                  "image": "/images/drinks/karak-chai.jpg"
                },
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Falooda",
                  "image": "/images/desserts/lahori-falooda.jpg"
                }
              ]
            }
          },
          {
            "name": "Charsi Lamb",
            "description": "Freshly cooked lamb with herbs and spices. Cooked to order.",
            "price": "£25.99 (1/2 kg) / £36.99 (1 kg)",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "lamb", "speciality"],
            "image": "/images/specials/charsi-lamb.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Billionaire Daiquiri",
                  "image": "/images/drinks/billionaire-daiquiri.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Lakhnawi Halwa",
                  "image": "/images/desserts/lakhnawi-halwa.jpg"
                }
              ]
            }
          },
          {
            "name": "Charsi Chicken",
            "description": "Freshly cooked chicken with herbs and spices. Cooked to order.",
            "price": "£22.99 (1 kg)",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "chicken", "speciality"],
            "image": "/images/specials/charsi-chicken.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Lychee Martini",
                  "image": "/images/drinks/lychee-martini.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "New York Style Cheesecake",
                  "image": "/images/desserts/new-york-style-cheesecake.jpg"
                }
              ]
            }
          },
          {
            "name": "Balochi Tikka",
            "description": "Juicy chicken marinated in bold Balochi spices and chargrilled.",
            "price": "£6.99",
            "allergens": [],
            "tags": ["starter", "grilled", "chicken", "spicy"],
            "image": "/images/specials/balochi-tikka.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Passion Fruit Mojito",
                  "image": "/images/drinks/passion-fruit-mojito.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Chicken Jalfrezi",
                  "image": "/images/mains/chicken-jalfrezi.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "SV Special Cheesecake",
                  "image": "/images/desserts/sv-special-cheesecake.jpg"
                }
              ]
            }
          },
          {
            "name": "Matka Ghosht",
            "description": "Lamb slow-cooked in a clay pot with aromatic spices for a deep earthy flavour.",
            "price": "£17.99 (Medium) / £24.99 (Large)",
            "allergens": [],
            "tags": ["main", "lamb", "clay-pot", "speciality"],
            "image": "/images/specials/matka-ghosht.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "The Atomic",
                  "image": "/images/drinks/the-atomic.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Falooda",
                  "image": "/images/desserts/lahori-falooda.jpg"
                }
              ]
            }
          },
          {
            "name": "Chicken Mandi",
            "description": "Fragrant rice served with tender slow-cooked chicken in Middle Eastern spices.",
            "price": "£13.99 (Medium) / £19.99 (Large)",
            "allergens": [],
            "tags": ["main", "chicken", "rice"],
            "image": "/images/specials/chicken-mandi.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Mango Mania",
                  "image": "/images/drinks/mango-mania.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          }
        ]
      },
      {
        "category": "Biryani & Rice",
        "items": [
          {
            "name": "Plain Steamed or Pilao Rice",
            "description": "Simple and fragrant rice, perfect as a side.",
            "price": "£3.99",
            "allergens": ["Milk"],
            "tags": ["side", "rice"],
            "image": "/images/rice/plain-steamed-pilao-rice.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Still Water",
                  "image": "/images/drinks/still-water.jpg"
                },
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Village Special Tarka Daal",
                  "image": "/images/mains/village-special-tarka-daal.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Kheer",
                  "image": "/images/desserts/kheer.jpg"
                }
              ]
            }
          },
          {
            "name": "Egg Fried Rice",
            "description": "Rice stir-fried with eggs, peppers and mixed vegetables.",
            "price": "£6.99",
            "allergens": ["Egg", "Milk", "Soya"],
            "tags": ["side", "rice"],
            "image": "/images/rice/egg-fried-rice.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Chicken Karahi",
                  "image": "/images/mains/afghani-chicken-karahi.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          },
          {
            "name": "Vegetable Biryani",
            "description": "A simple yet flavourful biryani full of Pakistani spices.",
            "price": "£6.99",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "rice", "veg"],
            "image": "/images/rice/vegetable-biryani.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Mango Mania",
                  "image": "/images/drinks/mango-mania.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Kheer",
                  "image": "/images/desserts/kheer.jpg"
                }
              ]
            }
          },
          {
            "name": "Chicken Biryani",
            "description": "Traditional biryani made with chicken, spices, yoghurt, herbs and fragrant rice.",
            "price": "£8.99",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "rice", "chicken"],
            "image": "/images/rice/chicken-biryani.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Passion Fruit Mojito",
                  "image": "/images/drinks/passion-fruit-mojito.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Falooda",
                  "image": "/images/desserts/lahori-falooda.jpg"
                }
              ]
            }
          },
          {
            "name": "Lamb Biryani",
            "description": "Traditional biryani made with lamb, spices, tomatoes, yoghurt and fragrant rice.",
            "price": "£9.99",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "rice", "lamb"],
            "image": "/images/rice/lamb-biryani.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          },
          {
            "name": "Chicken Tikka Biryani",
            "description": "Grilled chicken pieces cooked with fragrant rice and spices.",
            "price": "£9.99",
            "allergens": ["Milk", "Soya"],
            "tags": ["main", "rice", "chicken"],
            "image": "/images/rice/chicken-tikka-biryani.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Apple Cooler",
                  "image": "/images/drinks/apple-cooler.jpg"
                },
                {
                  "name": "The Atomic",
                  "image": "/images/drinks/the-atomic.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Nawabi Qulfi",
                  "image": "/images/desserts/nawabi-qulfi.jpg"
                }
              ]
            }
          },
          {
            "name": "Prawn Biryani",
            "description": "Grilled prawns with rice cooked in a blend of traditional spices.",
            "price": "£11.99",
            "allergens": ["Crustacean", "Milk", "Soya"],
            "tags": ["main", "rice", "prawns"],
            "image": "/images/rice/prawn-biryani.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Blue Lagoon",
                  "image": "/images/drinks/blue-lagoon.jpg"
                },
                {
                  "name": "Virgin Lime Mojito",
                  "image": "/images/drinks/virgin-lime-mojito.jpg"
                }
              ],
              "mains": [],
              "desserts": [
                {
                  "name": "Ice Cream",
                  "image": "/images/desserts/ice-cream.jpg"
                }
              ]
            }
          }
        ]
      },
      {
        "category": "Breads",
        "items": [
          {
            "name": "Naan",
            "description": "Traditional flatbread cooked in a tandoor.",
            "price": "£1.60",
            "allergens": ["Egg", "Gluten", "Sesame"],
            "tags": ["bread", "side"],
            "image": "/images/breads/naan.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Water",
                  "image": "/images/drinks/still-water.jpg"
                },
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Chicken Karahi",
                  "image": "/images/mains/afghani-chicken-karahi.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          },
          {
            "name": "Butter Naan",
            "description": "Soft tandoori naan topped with butter.",
            "price": "£1.80",
            "allergens": ["Egg", "Gluten", "Milk"],
            "tags": ["bread", "side"],
            "image": "/images/breads/butter-naan.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Karak Chai",
                  "image": "/images/drinks/karak-chai.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Butter Chicken",
                  "image": "/images/mains/butter-chicken.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Ice Cream",
                  "image": "/images/desserts/ice-cream.jpg"
                }
              ]
            }
          },
          {
            "name": "Roti",
            "description": "Wholemeal wheat flour cooked in a tandoor.",
            "price": "£1.60",
            "allergens": ["Gluten"],
            "tags": ["bread", "side", "veg"],
            "image": "/images/breads/roti.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                },
                {
                  "name": "Still Water",
                  "image": "/images/drinks/still-water.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Saag Gosht",
                  "image": "/images/mains/saag-gosht.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Kheer",
                  "image": "/images/desserts/kheer.jpg"
                }
              ]
            }
          },
          {
            "name": "Butter Roti",
            "description": "Wholemeal roti topped with butter.",
            "price": "£1.80",
            "allergens": ["Gluten", "Milk"],
            "tags": ["bread", "side"],
            "image": "/images/breads/butter-roti.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                },
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Lamb Korma",
                  "image": "/images/mains/lamb-korma.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          },
          {
            "name": "Kulcha",
            "description": "Leavened flatbread topped with butter and sesame seeds.",
            "price": "£2.50",
            "allergens": ["Egg", "Gluten", "Sesame", "Milk"],
            "tags": ["bread", "side"],
            "image": "/images/breads/kulcha.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Balti Chicken",
                  "image": "/images/mains/balti-chicken.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Nawabi Qulfi",
                  "image": "/images/desserts/nawabi-qulfi.jpg"
                }
              ]
            }
          },
          {
            "name": "Chilli Naan",
            "description": "Tandoori naan topped with fresh green chillies.",
            "price": "£2.50",
            "allergens": ["Egg", "Gluten", "Milk"],
            "tags": ["bread", "spicy"],
            "image": "/images/breads/chilli-naan.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Sparkling Water",
                  "image": "/images/drinks/sparkling-water.jpg"
                },
                {
                  "name": "The Atomic",
                  "image": "/images/drinks/the-atomic.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Chicken Vindaloo",
                  "image": "/images/mains/chicken-vindaloo.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Ice Cream",
                  "image": "/images/desserts/ice-cream.jpg"
                }
              ]
            }
          },
          {
            "name": "Garlic Naan",
            "description": "Tandoori naan topped with garlic.",
            "price": "£2.99",
            "allergens": ["Egg", "Gluten", "Milk"],
            "tags": ["bread"],
            "image": "/images/breads/garlic-naan.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Mint Mojito",
                  "image": "/images/drinks/virgin-lime-mojito.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Lamb Bhoona",
                  "image": "/images/mains/lamb-bhoona.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Kheer",
                  "image": "/images/desserts/kheer.jpg"
                }
              ]
            }
          },
          {
            "name": "Rogni Naan",
            "description": "Mughlai naan bread topped with sesame seeds and butter.",
            "price": "£2.99",
            "allergens": ["Egg", "Gluten", "Sesame", "Milk"],
            "tags": ["bread", "speciality"],
            "image": "/images/breads/rogni-naan.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                },
                {
                  "name": "Still Water",
                  "image": "/images/drinks/still-water.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Nihari",
                  "image": "/images/mains/lahori-nihari.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Milk Cake",
                  "image": "/images/desserts/milk-cake.jpg"
                }
              ]
            }
          },
          {
            "name": "Tandoori Paratha",
            "description": "The king of breads — crispy, flaky and fresh.",
            "price": "£2.99",
            "allergens": ["Egg", "Gluten", "Milk"],
            "tags": ["bread", "crispy"],
            "image": "/images/breads/tandoori-paratha.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Karak Chai",
                  "image": "/images/drinks/karak-chai.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Keema Karahi",
                  "image": "/images/mains/keema-karahi.jpg"
                }
              ],
              "desserts": [
                {
                  "name": "Lakhnawi Halwa",
                  "image": "/images/desserts/lakhnawi-halwa.jpg"
                }
              ]
            }
          }
        ]
      },
      {
        "category": "Desserts",
        "items": [
          {
            "name": "Nawabi Qulfi",
            "description": "Traditional frozen dessert made with whole milk, cream and cardamom, available in mango, pistachio or malai.",
            "price": "£3.99",
            "allergens": ["Nuts", "Milk"],
            "tags": ["dessert", "cold"],
            "image": "/images/desserts/nawabi-qulfi.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                },
                {
                  "name": "Lassi",
                  "image": "/images/drinks/lassi.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Chicken Biryani",
                  "image": "/images/mains/chicken-biryani.jpg"
                }
              ],
              "desserts": []
            }
          },
          {
            "name": "Ice Cream",
            "description": "Two scoops available in vanilla, chocolate or strawberry.",
            "price": "£3.99",
            "allergens": ["Egg", "Gluten", "Nuts", "Milk"],
            "tags": ["dessert", "cold"],
            "image": "/images/desserts/ice-cream.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Coffee",
                  "image": "/images/drinks/coffee.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Prawn Biryani",
                  "image": "/images/mains/prawn-biryani.jpg"
                }
              ],
              "desserts": []
            }
          },
          {
            "name": "Lakhnawi Halwa",
            "description": "Rich carrot dessert prepared with grated carrots, cream and ghee.",
            "price": "£5.99",
            "allergens": ["Gluten", "Nuts", "Milk"],
            "tags": ["dessert", "warm"],
            "image": "/images/desserts/lakhnawi-halwa.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Karak Chai",
                  "image": "/images/drinks/karak-chai.jpg"
                },
                {
                  "name": "Coffee",
                  "image": "/images/drinks/coffee.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Nihari",
                  "image": "/images/mains/lahori-nihari.jpg"
                }
              ],
              "desserts": []
            }
          },
          {
            "name": "Lahori Falooda",
            "description": "A traditional dessert with rose syrup, vermicelli, basil seeds and milk, served with kulfi.",
            "price": "£5.99",
            "allergens": ["Gluten", "Milk"],
            "tags": ["dessert", "cold", "speciality"],
            "image": "/images/desserts/lahori-falooda.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Mango Mania",
                  "image": "/images/drinks/mango-mania.jpg"
                },
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Chicken Tikka Biryani",
                  "image": "/images/mains/chicken-tikka-biryani.jpg"
                }
              ],
              "desserts": []
            }
          },
          {
            "name": "Kheer",
            "description": "Traditional rice pudding made with almonds and coconut.",
            "price": "£4.99",
            "allergens": ["Nuts", "Milk"],
            "tags": ["dessert", "traditional"],
            "image": "/images/desserts/kheer.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Tea",
                  "image": "/images/drinks/tea.jpg"
                },
                {
                  "name": "Soft Drinks",
                  "image": "/images/drinks/soft-drinks.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Saag Aloo",
                  "image": "/images/mains/saag-aloo.jpg"
                }
              ],
              "desserts": []
            }
          },
          {
            "name": "New York Style Cheesecake",
            "description": "Creamy cheesecake with a buttery crust, available in Biscoff or Ferrero flavours.",
            "price": "£6.99",
            "allergens": ["Nuts", "Milk"],
            "tags": ["dessert", "cake"],
            "image": "/images/desserts/new-york-style-cheesecake.jpg",
            "suggestions": {
              "drinks": [
                {
                  "name": "Coffee",
                  "image": "/images/drinks/coffee.jpg"
                },
                {
                  "name": "Mocha",
                  "image": "/images/drinks/mocha.jpg"
                }
              ],
              "mains": [
                {
                  "name": "Butter Chicken",
                  "image": "/images/mains/butter-chicken.jpg"
                }
              ],
              "desserts": []
            }
          }
        ]
      }
     
    ]
  } 
  , { 
     "category": "Seafood",
     "items": [
       {
         "name": "King Prawn Karahi",
         "description": "King prawns cooked and pan-fried with spices, peppers, onions, and tomatoes.",
         "price": "£14.99",
         "allergens": ["Crustacean", "Soya"],
         "tags": ["main", "seafood", "prawns"],
         "image": "/images/seafood/king-prawn-karahi.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Lychee Martini",
               "image": "/images/drinks/lychee-martini.jpg"
             },
             {
               "name": "Blue Lagoon",
               "image": "/images/drinks/blue-lagoon.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Lahori Falooda",
               "image": "/images/desserts/lahori-falooda.jpg"
             }
           ]
         }
       },
       {
         "name": "Prawn Madras",
         "description": "Hot and fiery prawns cooked with madras spices for a bold flavour.",
         "price": "£14.99",
         "allergens": ["Crustacean", "Milk", "Soya"],
         "tags": ["main", "seafood", "spicy"],
         "image": "/images/seafood/prawn-madras.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Sparkling Water",
               "image": "/images/drinks/sparkling-water.jpg"
             },
             {
               "name": "Mango Mania",
               "image": "/images/drinks/mango-mania.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Ice Cream",
               "image": "/images/desserts/ice-cream.jpg"
             }
           ]
         }
       },
       {
         "name": "Achaari Prawn Karahi",
         "description": "A classic prawn curry blending sweet and pickled flavours.",
         "price": "£14.99",
         "allergens": ["Crustacean", "Mustard", "Soya"],
         "tags": ["main", "seafood"],
         "image": "/images/seafood/achaari-prawn-karahi.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Virgin Lime Mojito",
               "image": "/images/drinks/virgin-lime-mojito.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       }
     ]
   },
   {
     "category": "Village Specials",
     "items": [
       {
         "name": "Keema Karahi",
         "description": "Minced meat cooked with peas, ginger, chilli, onions, ghee and traditional spices.",
         "price": "£11.99",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "lamb", "speciality"],
         "image": "/images/specials/keema-karahi.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "SV Special Cheesecake",
               "image": "/images/desserts/sv-special-cheesecake.jpg"
             }
           ]
         }
       },
       {
         "name": "Lahori Nihari",
         "description": "Lamb shank slowly cooked overnight in traditional spices.",
         "price": "£13.99",
         "allergens": ["Gluten", "Soya"],
         "tags": ["main", "lamb", "slow-cooked"],
         "image": "/images/specials/lahori-nihari.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Karak Chai",
               "image": "/images/drinks/karak-chai.jpg"
             },
             {
               "name": "Apple Cooler",
               "image": "/images/drinks/apple-cooler.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Nawabi Qulfi",
               "image": "/images/desserts/nawabi-qulfi.jpg"
             }
           ]
         }
       },
       {
         "name": "Shahi Haleem",
         "description": "Traditional dish prepared with lentils, lamb and spices.",
         "price": "£12.99",
         "allergens": ["Gluten", "Milk", "Soya"],
         "tags": ["main", "lamb", "lentils"],
         "image": "/images/specials/shahi-haleem.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Kheer",
               "image": "/images/desserts/kheer.jpg"
             }
           ]
         }
       },
       {
         "name": "Maghaz Masala",
         "description": "Lamb brain cooked with spices for rich flavour. Weekend special.",
         "price": "£12.99",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "lamb", "speciality"],
         "image": "/images/specials/maghaz-masala.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Mint Mojito",
               "image": "/images/drinks/virgin-lime-mojito.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       },
       {
         "name": "Paaya",
         "description": "Slow cooked goat feet in a unique blend of flavours.",
         "price": "£9.99",
         "allergens": ["Gluten", "Soya"],
         "tags": ["main", "lamb", "traditional"],
         "image": "/images/specials/paaya.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Karak Chai",
               "image": "/images/drinks/karak-chai.jpg"
             },
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Falooda",
               "image": "/images/desserts/lahori-falooda.jpg"
             }
           ]
         }
       },
       {
         "name": "Charsi Lamb",
         "description": "Freshly cooked lamb with herbs and spices. Cooked to order.",
         "price": "£25.99 (1/2 kg) / £36.99 (1 kg)",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "lamb", "speciality"],
         "image": "/images/specials/charsi-lamb.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Billionaire Daiquiri",
               "image": "/images/drinks/billionaire-daiquiri.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Lakhnawi Halwa",
               "image": "/images/desserts/lakhnawi-halwa.jpg"
             }
           ]
         }
       },
       {
         "name": "Charsi Chicken",
         "description": "Freshly cooked chicken with herbs and spices. Cooked to order.",
         "price": "£22.99 (1 kg)",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "chicken", "speciality"],
         "image": "/images/specials/charsi-chicken.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Lychee Martini",
               "image": "/images/drinks/lychee-martini.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "New York Style Cheesecake",
               "image": "/images/desserts/new-york-style-cheesecake.jpg"
             }
           ]
         }
       },
       {
         "name": "Balochi Tikka",
         "description": "Juicy chicken marinated in bold Balochi spices and chargrilled.",
         "price": "£6.99",
         "allergens": [],
         "tags": ["starter", "grilled", "chicken", "spicy"],
         "image": "/images/specials/balochi-tikka.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Passion Fruit Mojito",
               "image": "/images/drinks/passion-fruit-mojito.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [
             {
               "name": "Chicken Jalfrezi",
               "image": "/images/mains/chicken-jalfrezi.jpg"
             }
           ],
           "desserts": [
             {
               "name": "SV Special Cheesecake",
               "image": "/images/desserts/sv-special-cheesecake.jpg"
             }
           ]
         }
       },
       {
         "name": "Matka Ghosht",
         "description": "Lamb slow-cooked in a clay pot with aromatic spices for a deep earthy flavour.",
         "price": "£17.99 (Medium) / £24.99 (Large)",
         "allergens": [],
         "tags": ["main", "lamb", "clay-pot", "speciality"],
         "image": "/images/specials/matka-ghosht.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "The Atomic",
               "image": "/images/drinks/the-atomic.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Falooda",
               "image": "/images/desserts/lahori-falooda.jpg"
             }
           ]
         }
       },
       {
         "name": "Chicken Mandi",
         "description": "Fragrant rice served with tender slow-cooked chicken in Middle Eastern spices.",
         "price": "£13.99 (Medium) / £19.99 (Large)",
         "allergens": [],
         "tags": ["main", "chicken", "rice"],
         "image": "/images/specials/chicken-mandi.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Mango Mania",
               "image": "/images/drinks/mango-mania.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       }
     ]
   },
   {
     "category": "Biryani & Rice",
     "items": [
       {
         "name": "Plain Steamed or Pilao Rice",
         "description": "Simple and fragrant rice, perfect as a side.",
         "price": "£3.99",
         "allergens": ["Milk"],
         "tags": ["side", "rice"],
         "image": "/images/rice/plain-steamed-pilao-rice.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Still Water",
               "image": "/images/drinks/still-water.jpg"
             },
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             }
           ],
           "mains": [
             {
               "name": "Village Special Tarka Daal",
               "image": "/images/mains/village-special-tarka-daal.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Kheer",
               "image": "/images/desserts/kheer.jpg"
             }
           ]
         }
       },
       {
         "name": "Egg Fried Rice",
         "description": "Rice stir-fried with eggs, peppers and mixed vegetables.",
         "price": "£6.99",
         "allergens": ["Egg", "Milk", "Soya"],
         "tags": ["side", "rice"],
         "image": "/images/rice/egg-fried-rice.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [
             {
               "name": "Chicken Karahi",
               "image": "/images/mains/afghani-chicken-karahi.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       },
       {
         "name": "Vegetable Biryani",
         "description": "A simple yet flavourful biryani full of Pakistani spices.",
         "price": "£6.99",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "rice", "veg"],
         "image": "/images/rice/vegetable-biryani.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Mango Mania",
               "image": "/images/drinks/mango-mania.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Kheer",
               "image": "/images/desserts/kheer.jpg"
             }
           ]
         }
       },
       {
         "name": "Chicken Biryani",
         "description": "Traditional biryani made with chicken, spices, yoghurt, herbs and fragrant rice.",
         "price": "£8.99",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "rice", "chicken"],
         "image": "/images/rice/chicken-biryani.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Passion Fruit Mojito",
               "image": "/images/drinks/passion-fruit-mojito.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Falooda",
               "image": "/images/desserts/lahori-falooda.jpg"
             }
           ]
         }
       },
       {
         "name": "Lamb Biryani",
         "description": "Traditional biryani made with lamb, spices, tomatoes, yoghurt and fragrant rice.",
         "price": "£9.99",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "rice", "lamb"],
         "image": "/images/rice/lamb-biryani.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       },
       {
         "name": "Chicken Tikka Biryani",
         "description": "Grilled chicken pieces cooked with fragrant rice and spices.",
         "price": "£9.99",
         "allergens": ["Milk", "Soya"],
         "tags": ["main", "rice", "chicken"],
         "image": "/images/rice/chicken-tikka-biryani.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Apple Cooler",
               "image": "/images/drinks/apple-cooler.jpg"
             },
             {
               "name": "The Atomic",
               "image": "/images/drinks/the-atomic.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Nawabi Qulfi",
               "image": "/images/desserts/nawabi-qulfi.jpg"
             }
           ]
         }
       },
       {
         "name": "Prawn Biryani",
         "description": "Grilled prawns with rice cooked in a blend of traditional spices.",
         "price": "£11.99",
         "allergens": ["Crustacean", "Milk", "Soya"],
         "tags": ["main", "rice", "prawns"],
         "image": "/images/rice/prawn-biryani.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Blue Lagoon",
               "image": "/images/drinks/blue-lagoon.jpg"
             },
             {
               "name": "Virgin Lime Mojito",
               "image": "/images/drinks/virgin-lime-mojito.jpg"
             }
           ],
           "mains": [],
           "desserts": [
             {
               "name": "Ice Cream",
               "image": "/images/desserts/ice-cream.jpg"
             }
           ]
         }
       }
     ]
   },
   {
     "category": "Breads",
     "items": [
       {
         "name": "Naan",
         "description": "Traditional flatbread cooked in a tandoor.",
         "price": "£1.60",
         "allergens": ["Egg", "Gluten", "Sesame"],
         "tags": ["bread", "side"],
         "image": "/images/breads/naan.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Water",
               "image": "/images/drinks/still-water.jpg"
             },
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             }
           ],
           "mains": [
             {
               "name": "Chicken Karahi",
               "image": "/images/mains/afghani-chicken-karahi.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       },
       {
         "name": "Butter Naan",
         "description": "Soft tandoori naan topped with butter.",
         "price": "£1.80",
         "allergens": ["Egg", "Gluten", "Milk"],
         "tags": ["bread", "side"],
         "image": "/images/breads/butter-naan.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Karak Chai",
               "image": "/images/drinks/karak-chai.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [
             {
               "name": "Butter Chicken",
               "image": "/images/mains/butter-chicken.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Ice Cream",
               "image": "/images/desserts/ice-cream.jpg"
             }
           ]
         }
       },
       {
         "name": "Roti",
         "description": "Wholemeal wheat flour cooked in a tandoor.",
         "price": "£1.60",
         "allergens": ["Gluten"],
         "tags": ["bread", "side", "veg"],
         "image": "/images/breads/roti.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             },
             {
               "name": "Still Water",
               "image": "/images/drinks/still-water.jpg"
             }
           ],
           "mains": [
             {
               "name": "Saag Gosht",
               "image": "/images/mains/saag-gosht.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Kheer",
               "image": "/images/desserts/kheer.jpg"
             }
           ]
         }
       },
       {
         "name": "Butter Roti",
         "description": "Wholemeal roti topped with butter.",
         "price": "£1.80",
         "allergens": ["Gluten", "Milk"],
         "tags": ["bread", "side"],
         "image": "/images/breads/butter-roti.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             },
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             }
           ],
           "mains": [
             {
               "name": "Lamb Korma",
               "image": "/images/mains/lamb-korma.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       },
       {
         "name": "Kulcha",
         "description": "Leavened flatbread topped with butter and sesame seeds.",
         "price": "£2.50",
         "allergens": ["Egg", "Gluten", "Sesame", "Milk"],
         "tags": ["bread", "side"],
         "image": "/images/breads/kulcha.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [
             {
               "name": "Balti Chicken",
               "image": "/images/mains/balti-chicken.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Nawabi Qulfi",
               "image": "/images/desserts/nawabi-qulfi.jpg"
             }
           ]
         }
       },
       {
         "name": "Chilli Naan",
         "description": "Tandoori naan topped with fresh green chillies.",
         "price": "£2.50",
         "allergens": ["Egg", "Gluten", "Milk"],
         "tags": ["bread", "spicy"],
         "image": "/images/breads/chilli-naan.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Sparkling Water",
               "image": "/images/drinks/sparkling-water.jpg"
             },
             {
               "name": "The Atomic",
               "image": "/images/drinks/the-atomic.jpg"
             }
           ],
           "mains": [
             {
               "name": "Chicken Vindaloo",
               "image": "/images/mains/chicken-vindaloo.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Ice Cream",
               "image": "/images/desserts/ice-cream.jpg"
             }
           ]
         }
       },
       {
         "name": "Garlic Naan",
         "description": "Tandoori naan topped with garlic.",
         "price": "£2.99",
         "allergens": ["Egg", "Gluten", "Milk"],
         "tags": ["bread"],
         "image": "/images/breads/garlic-naan.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Mint Mojito",
               "image": "/images/drinks/virgin-lime-mojito.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [
             {
               "name": "Lamb Bhoona",
               "image": "/images/mains/lamb-bhoona.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Kheer",
               "image": "/images/desserts/kheer.jpg"
             }
           ]
         }
       },
       {
         "name": "Rogni Naan",
         "description": "Mughlai naan bread topped with sesame seeds and butter.",
         "price": "£2.99",
         "allergens": ["Egg", "Gluten", "Sesame", "Milk"],
         "tags": ["bread", "speciality"],
         "image": "/images/breads/rogni-naan.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             },
             {
               "name": "Still Water",
               "image": "/images/drinks/still-water.jpg"
             }
           ],
           "mains": [
             {
               "name": "Nihari",
               "image": "/images/mains/lahori-nihari.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Milk Cake",
               "image": "/images/desserts/milk-cake.jpg"
             }
           ]
         }
       },
       {
         "name": "Tandoori Paratha",
         "description": "The king of breads — crispy, flaky and fresh.",
         "price": "£2.99",
         "allergens": ["Egg", "Gluten", "Milk"],
         "tags": ["bread", "crispy"],
         "image": "/images/breads/tandoori-paratha.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Karak Chai",
               "image": "/images/drinks/karak-chai.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [
             {
               "name": "Keema Karahi",
               "image": "/images/mains/keema-karahi.jpg"
             }
           ],
           "desserts": [
             {
               "name": "Lakhnawi Halwa",
               "image": "/images/desserts/lakhnawi-halwa.jpg"
             }
           ]
         }
       }
     ]
   },
   {
     "category": "Desserts",
     "items": [
       {
         "name": "Nawabi Qulfi",
         "description": "Traditional frozen dessert made with whole milk, cream and cardamom, available in mango, pistachio or malai.",
         "price": "£3.99",
         "allergens": ["Nuts", "Milk"],
         "tags": ["dessert", "cold"],
         "image": "/images/desserts/nawabi-qulfi.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             },
             {
               "name": "Lassi",
               "image": "/images/drinks/lassi.jpg"
             }
           ],
           "mains": [
             {
               "name": "Chicken Biryani",
               "image": "/images/mains/chicken-biryani.jpg"
             }
           ],
           "desserts": []
         }
       },
       {
         "name": "Ice Cream",
         "description": "Two scoops available in vanilla, chocolate or strawberry.",
         "price": "£3.99",
         "allergens": ["Egg", "Gluten", "Nuts", "Milk"],
         "tags": ["dessert", "cold"],
         "image": "/images/desserts/ice-cream.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Coffee",
               "image": "/images/drinks/coffee.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [
             {
               "name": "Prawn Biryani",
               "image": "/images/mains/prawn-biryani.jpg"
             }
           ],
           "desserts": []
         }
       },
       {
         "name": "Lakhnawi Halwa",
         "description": "Rich carrot dessert prepared with grated carrots, cream and ghee.",
         "price": "£5.99",
         "allergens": ["Gluten", "Nuts", "Milk"],
         "tags": ["dessert", "warm"],
         "image": "/images/desserts/lakhnawi-halwa.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Karak Chai",
               "image": "/images/drinks/karak-chai.jpg"
             },
             {
               "name": "Coffee",
               "image": "/images/drinks/coffee.jpg"
             }
           ],
           "mains": [
             {
               "name": "Nihari",
               "image": "/images/mains/lahori-nihari.jpg"
             }
           ],
           "desserts": []
         }
       },
       {
         "name": "Lahori Falooda",
         "description": "A traditional dessert with rose syrup, vermicelli, basil seeds and milk, served with kulfi.",
         "price": "£5.99",
         "allergens": ["Gluten", "Milk"],
         "tags": ["dessert", "cold", "speciality"],
         "image": "/images/desserts/lahori-falooda.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Mango Mania",
               "image": "/images/drinks/mango-mania.jpg"
             },
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             }
           ],
           "mains": [
             {
               "name": "Chicken Tikka Biryani",
               "image": "/images/mains/chicken-tikka-biryani.jpg"
             }
           ],
           "desserts": []
         }
       },
       {
         "name": "Kheer",
         "description": "Traditional rice pudding made with almonds and coconut.",
         "price": "£4.99",
         "allergens": ["Nuts", "Milk"],
         "tags": ["dessert", "traditional"],
         "image": "/images/desserts/kheer.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Tea",
               "image": "/images/drinks/tea.jpg"
             },
             {
               "name": "Soft Drinks",
               "image": "/images/drinks/soft-drinks.jpg"
             }
           ],
           "mains": [
             {
               "name": "Saag Aloo",
               "image": "/images/mains/saag-aloo.jpg"
             }
           ],
           "desserts": []
         }
       },
       {
         "name": "New York Style Cheesecake",
         "description": "Creamy cheesecake with a buttery crust, available in Biscoff or Ferrero flavours.",
         "price": "£6.99",
         "allergens": ["Nuts", "Milk"],
         "tags": ["dessert", "cake"],
         "image": "/images/desserts/new-york-style-cheesecake.jpg",
         "suggestions": {
           "drinks": [
             {
               "name": "Coffee",
               "image": "/images/drinks/coffee.jpg"
             },
             {
               "name": "Mocha",
               "image": "/images/drinks/mocha.jpg"
             }
           ],
           "mains": [
             {
               "name": "Butter Chicken",
               "image": "/images/mains/butter-chicken.jpg"
             }
           ],
           "desserts": []
         }
       }
     ]
   }
  
]


export default menu;
