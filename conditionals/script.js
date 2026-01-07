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

function checkUnitPrice(unit) {
  let rs = 0;

  for (let i = 1; i <= unit; i++) {
    if (i <= 100) {
      rs += 4;
    } else if (i >= 101 && i <= 200) {
      rs += 6;
    } else if (i >= 201 && i <= 400) {
      rs += 8;
    } else {
      rs += 13;
    }
  }
  return rs;
}
console.log(checkUnitPrice(101))
