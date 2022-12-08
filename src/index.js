const traveller = [
  { description: "Senior", Amount: 50 },
  { description: "Senior", Amount: 50 }
];

const sum = function (items, prop) {
  return items.reduce(function (a, b) {
    console.log(a, "m a hoon ", b[prop], "or m b hoon ");
    return a + b[prop];
  }, 0);
};

const travelerTotal = sum(traveller, "Amount");
console.log(travelerTotal);
