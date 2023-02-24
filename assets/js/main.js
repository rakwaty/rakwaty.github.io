const data = {
  hot_drinks: [
    { item: "Espresso", price: 25 },
    { item: "Cappucino", price: 40 },
    { item: "Americano", price: 30 },
    { item: "Nescafe", price: 40 },
    { item: "White Mocha", price: 80 },
    { item: "Latte", price: 80 },
    { item: "Latte Machiato", price: 80 },
    { item: "Caramel Latte", price: 80 },
    { item: "Vanilla Latte", price: 80 },
    { item: "Spanish Latte", price: 80 },
    { item: "Irish Latte", price: 80 },
    { item: "Hot Chocolate", price: 80 },
    { item: "Tea", price: 20 },
  ],
  cold_drinks: [
    { item: "Frappuccino", price: 120 },
    { item: "Caramel Frappuccino", price: 120 },
    { item: "Vanilla Frappuccino", price: 120 },
    { item: "Mocha Frappuccino", price: 120 },
    { item: "White Mocha Frappuccino", price: 120 },
    { item: "French Frappe", price: 120 },
    { item: "Water", price: 15 },
  ],
  ice_coffee: [
    { item: "Caramel Ice Latte", price: 80 },
    { item: "Vanilla Ice Latte", price: 80 },
    { item: "Mocha Ice Latte", price: 80 },
    { item: "White Mocha Ice Latte", price: 80 },
    { item: "Spanish Ice Latte", price: 80 },
  ],
  ice_tea: [
    { item: "Peach Ice Tea", price: 100 },
    { item: "Lime Ice Tea", price: 100 },
    { item: "Passion Fruit Ice Tea", price: 100 },
  ],
  milkshakes: [
    { item: "Vanilla Milkshake", price: 120 },
    { item: "Chocolate Milkshake", price: 120 },
    { item: "Strawberry Milkshake", price: 120 },
    { item: "Lotus Milkshake", price: 120 },
    { item: "Orea Cookies Milkshake", price: 120 },
    { item: "Nescafe Milkshake", price: 120 },
    { item: "Blueberry Milkshake", price: 120 },
  ],
  smoothies: [
    { item: "Peach Smoothie", price: 120 },
    { item: "Mango Smoothie", price: 120 },
    { item: "Strawberry Smoothie", price: 120 },
    { item: "Blueberry Smoothie", price: 120 },
    { item: "Passion Fruit Smoothie", price: 120 },
  ],
  ground_coffee: [
    { item: "Original Blend", price: 380 },
    { item: "Masabat Blend", price: 340 },
  ],
  nuts_candy: [
    { item: "Original Nuts (1KG)", price: 350 },
    { item: "Extra Nuts (200g)", price: 200
 },
    { item: "Gummies (200g)", price: 70 },
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
