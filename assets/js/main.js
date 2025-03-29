const data = {
  hot_drinks: [
    { item: "Espresso", price: 50 },
    { item: "Cappucino", price: 100 },
    { item: "Americano", price: 70 },
    { item: "Nescafe", price: 100 },
    { item: "White Mocha", price: 120 },
    { item: "Latte", price: 100 },
    { item: "Latte Machiato", price: 120 },
    { item: "Caramel Latte", price: 120 },
    { item: "Vanilla Latte", price: 120 },
    { item: "Spanish Latte", price: 120 },
    { item: "Irish Latte", price: 120 },
    { item: "Hot Chocolate", price: 100 },
    { item: "Tea", price: 50 },
  ],
  cold_drinks: [
    { item: "Frappuccino", price: 300 },
    { item: "Caramel Frappuccino", price: 300 },
    { item: "Vanilla Frappuccino", price: 300 },
    { item: "Mocha Frappuccino", price: 300 },
    { item: "White Mocha Frappuccino", price: 300 },
    { item: "French Frappe", price: 300 },
    { item: "Pinacolada", price: 280  },
    { item: "Mohito", price: 250 },
    { item: "Rakwaty Drink", price: 200 },
    { item: "Water", price: 25 },
  ],
  ice_coffee: [
    { item: "Caramel Ice Latte", price: 250 },
    { item: "Vanilla Ice Latte", price: 250 },
    { item: "Mocha Ice Latte", price: 250 },
    { item: "White Mocha Ice Latte", price: 250 },
    { item: "Spanish Ice Latte", price: 250 },
  ],
  ice_tea: [
    { item: "Peach Ice Tea", price: 200 },
    { item: "Lime Ice Tea", price: 200 },
    { item: "Passion Fruit Ice Tea", price: 200 },
  ],
  milkshakes: [
    { item: "Vanilla Milkshake", price: 300 },
    { item: "Chocolate Milkshake", price: 300 },
    { item: "Strawberry Milkshake", price: 300 },
    { item: "Lotus Milkshake", price: 300 },
    { item: "Orea Cookies Milkshake", price: 300 },
    { item: "Nescafe Milkshake", price: 300 },
    { item: "Blueberry Milkshake", price: 300 },
    { item: "Brownie Milkshake", price: 300 },
    { item: "Coconut", price: 280 },
  ],
  smoothies: [
    { item: "Peach Smoothie", price: 300 },
    { item: "Mango Smoothie", price: 300 },
    { item: "Strawberry Smoothie", price: 300 },
    { item: "Blueberry Smoothie", price: 300 },
    { item: "Passion Fruit Smoothie", price: 300 },
  ],
  ground_coffee: [
    { item: "Original Blend", price: 900 },
    { item: "Masabat Blend", price: 850 },
  ],
  nuts_candy: [
    { item: "Original Nuts (1KG)", price: 550 },
    { item: "Extra Nuts (200g)", price: 300 },
    { item: "Gummies (200g)", price: 110 },
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
