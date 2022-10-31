let propName = ["firstName"];

// Objects
let hobbit = {
  firstName: "",
  lastName: "",
};

hobbit.firstName = "Samwise";
hobbit.lastName = "Gamgee";
hobbit.isFellowship = "true";

console.log(hobbit);

let product = {
  description: "Describes Product",
  name: "Product Name",
  manufacturer: "WhoMadeIt Inc",
  price: 19.99,
  discount: 0.1,
  images: ["image1.jpg, image2.jpg"],
  size: {
    width: 30,
    length: 55,
  },
  getPrice: function () {
    // return price with discount
    return this.price - this.price * this.discount;
  },
};

product.size; // {width, length}
product.size.width; // 30

product.images[1]; //"image2.jpg"

product.getPrice();

let displayPrice = product.getPrice();

console.log(`${product.name} is ${displayPrice}`);

//Math

let num = 19.99;
Math.floor(num); //19
Math.ceil(num); //20
Math.round(num); //20
Math.max(12, 21, 19, 91); //91
Math.min(12, 21, 19, 91); //12

//Date

console.log(Date.now());
console.log(new Date().toLocaleDateString());

//Strings

let str = "Hello World"
str.length; //11