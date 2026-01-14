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
// var pr = prompt("kaha tk add karwaoge add ?");
// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);
//   console.log(n);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       var sum = 0;
//       for (var i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("should be +ve and more than 0");
//     }
//   }
// }

// 2. factorial using loop
// var pr = prompt("find factorial");
// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       let facto = 1;
//       for (var i = 2; i <= n; i++) {
//         facto = facto * i;
//       }
//       console.log(facto);
//     } else if (n === 0 || n === 1) {
//       console.log(1);
//     } else {
//       console.log("should be +ve and more than 0");
//     }
//   }
// }

// 3. factor of number
// var pr = prompt("find factorial");
// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       for (var i = 1; i <= Math.floor(n/2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("should be positive and more than 0");
//     }
//   }
// }

// 4. finding prime number

// function isPrime(num) {
//   if (num <= 1) {
//     return  `${num} is not prime number`;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return `${num} is not prime number`;
//     }
//   }
//   return `${num} is a prime number`;
// }
// console.log(isPrime(50));

//5. break and continue
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
// for (let i = 0; i < 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }
