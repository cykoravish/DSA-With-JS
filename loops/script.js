// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 15; i++) {
//   console.log(i);
// }

//reverse loop
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// 1. sum of n natural number
// let n = Number(prompt("enter the number"));
// if (isNaN(n)) {
//   console.log("invalid input");
// } else {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

// another solution
var n = Number(prompt("kaha tk add karwaoge add ?"));

if (isNaN(n)) {
  console.log("invalid input");
} else {
  if (n > 0) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum = sum + i;
    }
    console.log(sum);
  } else {
    console.log("should be +ve and more than 0");
  }
}
