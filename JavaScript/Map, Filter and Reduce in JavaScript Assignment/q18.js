const amount = [
    { amount: 500 }, 
    { amount: 1000 }, 
    { amount: 750 }
];

const totalAmount = amount.reduce((acc, {amount}) => {
  return acc + amount;
}, 0);

console.log(totalAmount);
