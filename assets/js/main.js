const data = {
  hot_drinks: [
    { item: "Espresso", price: 12 },
    { item: "Cappucino", price: 25 },
    { item: "Americano", price: 15 },
    { item: "Nescafe", price: 25 },
    { item: "White Mocha", price: 40 },
    { item: "Latte", price: 40 },
    { item: "Latte Machiato", price: 40 },
    { item: "Caramel Latte", price: 40 },
    { item: "Vanilla Latte", price: 40 },
    { item: "Spanish Latte", price: 40 },
    { item: "Irish Latte", price: 40 },
    { item: "Hot Chocolate", price: 40 },
    { item: "Tea", price: 15 },
  ],
  cold_drinks: [
    { item: "Frappuccino", price: 70 },
    { item: "Caramel Frappuccino", price: 70 },
    { item: "Vanilla Frappuccino", price: 70 },
    { item: "Mocha Frappuccino", price: 70 },
    { item: "White Mocha Frappuccino", price: 70 },
    { item: "French Frappe", price: 70 },
    { item: "Water", price: 8 },
  ],
  ice_coffee: [
    { item: "Caramel Ice Latte", price: 50 },
    { item: "Vanilla Ice Latte", price: 50 },
    { item: "Mocha Ice Latte", price: 50 },
    { item: "White Mocha Ice Latte", price: 50 },
    { item: "Spanish Ice Latte", price: 50 },
  ],
  ice_tea: [
    { item: "Peach Ice Tea", price: 50 },
    { item: "Lime Ice Tea", price: 50 },
    { item: "Passion Fruit Ice Tea", price: 50 },
  ],
  milkshakes: [
    { item: "Vanilla Milkshake", price: 70 },
    { item: "Chocolate Milkshake", price: 70 },
    { item: "Strawberry Milkshake", price: 70 },
    { item: "Lotus Milkshake", price: 70 },
    { item: "Orea Cookies Milkshake", price: 70 },
    { item: "Nescafe Milkshake", price: 70 },
    { item: "Blueberry Milkshake", price: 70 },
  ],
  smoothies: [
    { item: "Peach Smoothie", price: 70 },
    { item: "Mango Smoothie", price: 70 },
    { item: "Strawberry Smoothie", price: 70 },
    { item: "Blueberry Smoothie", price: 70 },
    { item: "Passion Fruit Smoothie", price: 70 },
  ],
  ground_coffee: [
    { item: "Original Blend", price: 240 },
    { item: "Masabat Blend", price: 210 },
  ],
  crepe: [
    { item: "Chocolate", price: 60 },
    { item: "White Chocolate", price: 65 },
    { item: "Lotus", price: 75 },
    { item: "Sandwich", price: 90 },
  ],
  pancake: [
    { item: "Chocolate", price: 70 },
    { item: "White Chocolate", price: 70 },
    { item: "Lotus", price: 90 },
    { item: "Fettuccine Chocolate", price: 70 },
    { item: "Fettuccine Lotus", price: 80 },
  ],
  nuts_candy: [
    { item: "Original Nuts (1KG)", price: 220 },
    { item: "Extra Nuts (200g)", price: 160
 },
    { item: "Gummies (200g)", price: 44 },
  ],
};

function transformCategTitle(value) {
  let title = value;
  if (title.includes("_")) {
    title = title.replace("_", " ");
  }
  if (title.includes("nuts")) {
    title = title.replace(" ", " & ");
  }
  title = title.toUpperCase();
  return title;
}

function navbar(e) {
  let items = document.getElementsByClassName("categItems")[0];
  let innerHtmlValue = [];

  let title = transformCategTitle(e);

  {
    e === "crepe" || e === "pancake"
      ? innerHtmlValue.push(
          `<div class="m-0 p-0 mb-3"><span class="h3">${title}</span><small class="ms-2">Oreo, KitKat, Crunch: <span class="fst-italic">Extra 15,000</span></small></div>`
        )
      : innerHtmlValue.push(`<h3 class="mb-3">${title}</h3>`);
  }

  data[e].map((el) => {
    innerHtmlValue.push(
      `<div id="${e}" class="d-flex justify-content-start align-content-center lh-sm"><p class="item text-nowrap align-self-center">${el.item}</p><p class="dots"></p>`
    );

    {
      e === "crepe" && el.item !== "Sandwich"
        ? innerHtmlValue.push(
            `<p class="price align-self-center mb-0">${
              el.price - 15
            }<span class="curr">.000/S</span><br />${
              el.price
            }<span class="curr">.000/L</span></p></div>`
          )
        : innerHtmlValue.push(
            `<p class="price">${el.price}<span class="curr">.000</span></p></div>`
          );
    }
  });

  items.innerHTML = innerHtmlValue;
}

navbar("hot_drinks");
