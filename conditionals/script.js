// 1. valid voter
// const ans = Number(prompt("what is your age ?"));
// if (isNaN(ans)) {
//   alert("enter valid number");
// } else if (ans >= 18) {
//   alert("you can vote");
// } else {
//   alert("you can not vote");
// }
//---------------------------------------------------

// 2. shop discount
// let amount = Number(prompt("What is the final amount ?"));
// let dis = 0;
// if (amount > 0 && amount <= 5000) {
//   dis;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// }
// console.log(amount - Math.floor((dis * amount) / 100));
//---------------------------------------------------

//3. unit calculator
// up to 100 => Rs. 4/unit
// 101 to 200 => Rs. 6/unit
// 201 to 400 => Rs. 8/unit
// more than 400 => Rs. 13/unit

// function checkUnitPrice(unit) {
//   let rs = 0;

//   for (let i = 1; i <= unit; i++) {
//     if (i <= 100) {
//       rs += 4;
//     } else if (i >= 101 && i <= 200) {
//       rs += 6;
//     } else if (i >= 201 && i <= 400) {
//       rs += 8;
//     } else {
//       rs += 13;
//     }
//   }
//   return rs;
// }
// console.log(checkUnitPrice(101))

// solution-2
// function checkUnitPrice(unit) {
//   let price = 0;
//   if (unit > 400) {
//     price = (unit - 400) * 13;
//     unit = 400;
//   }
//   if(unit > 200){
//     price += (unit - 200) * 8;
//     unit = 200
//   }
//   if(unit > 100){
//     price += (unit - 100) * 6;
//     unit = 100
//   }
//   if(unit > 0){
//     price += unit * 4;
//   }
//   return price;
// }
// console.log(checkUnitPrice(101))

// 4. INR denomination
//solution one
// function findDemoninations(amount) {
//   let denominations = [1, 2, 5, 10, 20, 50, 100, 200, 500];
//   let denom = [];
//   for (let i = denominations.length - 1; i >= 0; i--) {
//     while (amount >= denominations[i]) {
//       denom.push(denominations[i]);
//       amount = amount - denominations[i];
//     }
//   }
//   return denom;
// }
// console.log(findDemoninations(75));

// solution-2

// function findDenom(num) {
//   let remaining = num;
//   if (num >= 500) {
//     let notes500 = Math.floor(num / 500);
//     console.log(notes500);
//     remaining = num / 500;
//   }
//   if (num >= 200) {
//     let notes200 = Math.floor(num / 200);
//     console.log(notes200);
//     remaining = num / 200;
//   }
//   if (num >= 100) {
//     let notes100 = Math.floor(num / 100);
//     console.log(notes100);
//     remaining = num / 100;
//   }
//   if (num >= 50) {
//     let notes50 = Math.floor(num / 50);
//     console.log(notes50);
//     remaining = num / 50;
//   }
//   if (num >= 20) {
//     let notes20 = Math.floor(num / 20);
//     console.log(notes20);
//     remaining = num / 20;
//   }
//   if (num >= 10) {
//     let notes10 = Math.floor(num / 10);
//     console.log(notes10);
//     remaining = num / 10;
//   }
//   if (num >= 5) {
//     let notes5 = Math.floor(num / 5);
//     console.log(notes5);
//     remaining = num / 5;
//   }
//   if (num >= 2) {
//     let notes2 = Math.floor(num / 2);
//     console.log(notes2);
//     remaining = num / 2;
//   }
//   if (num >= 1) {
//     let notes1 = Math.floor(num / 1);
//     console.log(notes1);
//     remaining = num / 1;
//   }
// }

// findDenom(1100)