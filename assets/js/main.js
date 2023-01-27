const data = {
  hot_drinks: [
    { item: "Espresso", price: 15 },
    { item: "Cappucino", price: 35 },
    { item: "Americano", price: 30 },
    { item: "Nescafe", price: 35 },
    { item: "White Mocha", price: 60 },
    { item: "Latte", price: 50 },
    { item: "Latte Machiato", price: 60 },
    { item: "Caramel Latte", price: 60 },
    { item: "Vanilla Latte", price: 60 },
    { item: "Spanish Latte", price: 60 },
    { item: "Irish Latte", price: 60 },
    { item: "Hot Chocolate", price: 50 },
    { item: "Tea", price: 20 },
  ],
  cold_drinks: [
    { item: "Frappuccino", price: 80 },
    { item: "Caramel Frappuccino", price: 80 },
    { item: "Vanilla Frappuccino", price: 80 },
    { item: "Mocha Frappuccino", price: 80 },
    { item: "White Mocha Frappuccino", price: 80 },
    { item: "French Frappe", price: 80 },
    { item: "Water", price: 10 },
  ],
  ice_coffee: [
    { item: "Caramel Ice Latte", price: 60 },
    { item: "Vanilla Ice Latte", price: 60 },
    { item: "Mocha Ice Latte", price: 60 },
    { item: "White Mocha Ice Latte", price: 60 },
    { item: "Spanish Ice Latte", price: 60 },
  ],
  ice_tea: [
    { item: "Peach Ice Tea", price: 60 },
    { item: "Lime Ice Tea", price: 60 },
    { item: "Passion Fruit Ice Tea", price: 60 },
  ],
  milkshakes: [
    { item: "Vanilla Milkshake", price: 80 },
    { item: "Chocolate Milkshake", price: 80 },
    { item: "Strawberry Milkshake", price: 80 },
    { item: "Lotus Milkshake", price: 80 },
    { item: "Orea Cookies Milkshake", price: 80 },
    { item: "Nescafe Milkshake", price: 80 },
    { item: "Blueberry Milkshake", price: 80 },
  ],
  smoothies: [
    { item: "Peach Smoothie", price: 80 },
    { item: "Mango Smoothie", price: 80 },
    { item: "Strawberry Smoothie", price: 80 },
    { item: "Blueberry Smoothie", price: 80 },
    { item: "Passion Fruit Smoothie", price: 80 },
  ],
  ground_coffee: [
    { item: "Original Blend", price: 280 },
    { item: "Masabat Blend", price: 240 },
  ],
  crepe: [
    { item: "Chocolate", price: 70 },
    { item: "White Chocolate", price: 75 },
    { item: "Lotus", price: 85 },
    { item: "Sandwich", price: 100 },
  ],
  pancake: [
    { item: "Chocolate", price: 80 },
    { item: "White Chocolate", price: 80 },
    { item: "Lotus", price: 100 },
    { item: "Fettuccine Chocolate", price: 80 },
    { item: "Fettuccine Lotus", price: 90 },
  ],
  nuts_candy: [
    { item: "Original Nuts (1KG)", price: 250 },
    { item: "Extra Nuts (200g)", price: 160
 },
    { item: "Gummies (200g)", price: 50 },
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
