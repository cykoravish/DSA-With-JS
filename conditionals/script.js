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
// solution one
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
// console.log(findDemoninations(1100));

// solution-2
// function findDenom(num) {
//   let remaining = num;
//   if (remaining >= 500) {
//     let notes500 = Math.floor(remaining / 500);
//     console.log("notes 500: ", notes500);
//     remaining = remaining % 500;
//   }
//   if (remaining >= 200) {
//     let notes200 = Math.floor(remaining / 200);
//     console.log("notes 200: ", notes200);
//     remaining = remaining % 200;
//   }
//   if (remaining >= 100) {
//     let notes100 = Math.floor(remaining / 100);
//     console.log("notes 100: ", notes100);
//     remaining = remaining % 100;
//   }
//   if (remaining >= 50) {
//     let notes50 = Math.floor(remaining / 50);
//     console.log("notes 50: ", notes50);
//     remaining = remaining % 50;
//   }
//   if (remaining >= 20) {
//     let notes20 = Math.floor(remaining / 20);
//     console.log("notes 20: ", notes20);
//     remaining = remaining % 20;
//   }
//   if (remaining >= 10) {
//     let notes10 = Math.floor(remaining / 10);
//     console.log("notes 10: ", notes10);
//     remaining = remaining % 10;
//   }
//   if (remaining >= 5) {
//     let notes5 = Math.floor(remaining / 5);
//     console.log("notes 5: ", notes5);
//     remaining = remaining % 5;
//   }
//   if (remaining >= 2) {
//     let notes2 = Math.floor(remaining / 2);
//     console.log("notes 2: ", notes2);
//     remaining = remaining % 2;
//   }
//   if (remaining >= 1) {
//     let notes1 = Math.floor(remaining / 1);
//     console.log("notes 1: ", notes1);
//     remaining = remaining % 1;
//   }
// }
// findDenom(150);
