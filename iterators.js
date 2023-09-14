// * .forEach

// const tripLocation = ["London", "bali", "Amsterdam", "Paris"];

// tripLocation.forEach(function (value, idx) {
//   console.log(idx, value);
// });

// const prices = [20, 15, 30, 40, 55];

// prices.forEach((price, idx) => {
//   console.log(idx, price);
// });

// * .map

// const list = [1, 2, 3, 4, 5];

// const multipliedList = list.map((value) => {
//   return value * 2;
// });

// console.log(list);
// console.log(multipliedList);

const prices = [20, 15, 30, 40, 55];

const newPrices = prices.map((price, idx) => {
  //   console.log(idx, price * 1.1);
  return price * 1.1;
});

// console.log(prices);
// console.log(newPrices);

// *.filter

// const list = [1, 2, 3, 4, 5];

// const newList = list.filter((value) => {
//   return value % 2 === 0;
// });

// console.log(newList);

// const premiumPrices = newPrices.filter((price) => {
//   return price > 30;
// });

// console.log(premiumPrices);

// * .reduce

// const sum = list.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// }, 5);

// console.log(sum);

// const sumPrice = newPrices.reduce((prevVal, price) => {
//   return prevVal + price;
// });

// console.log("New Price: ", newPrices);
// console.log("Sum Price: ", sumPrice);
