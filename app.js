class Items {
  constructor(itemName, itemPrice) {
    this.itemName = itemName;
    this.itemPrice = itemPrice;
  }
  cart() {
    return `${this.itemName} ${this.itemPrice}`;
  }
}

const Apples = new Items('Apples', 0.50);
const Banana = new Items('Banana', 2.50);
const Oranges = new Items('Oranges', 5.50);
const Pears = new Items('Pears', 0.60);



console.log(Apples.cart());
console.log(Banana.cart());
console.log(Oranges.cart());
console.log(Pears.cart());

for (const property in Apples) {
  console.log(property, ":", Apples[property]);
}

liItems = document.querySelector("li");
liItems.innerHTML = (Apples.cart());