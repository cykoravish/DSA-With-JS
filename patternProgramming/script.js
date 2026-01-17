// console.log("hello")
// console.log("world")

//node js environment specific
// process.stdout.write("hello")
// process.stdout.write(" world")

// let a = prompt("what is your name ?")
// console.log(a);

// node js specific
const prompt = require("prompt-sync")();

// let a = prompt("what is your name ?");
// process.stdout.write(a)

// 1. print 5 starts on different lines
// console.log("⭐")
// console.log("⭐")
// console.log("⭐")
// console.log("⭐")
// console.log("⭐")

// 2. print 5 starts in same line
// process.stdout.write("⭐")
// process.stdout.write("⭐")
// process.stdout.write("⭐")
// process.stdout.write("⭐")
// process.stdout.write("⭐")

//3. print stars on user input
// const starCount = Number(prompt("enter the number of stars you wanna print ?"));
// for (let i = 0; i < starCount; i++) {
//   process.stdout.write("⭐");
// }

//4. print equal rows and column on user input
// const starCount = Number(
//   prompt("enter the number of stars you wanna print in equal rows and column ?")
// );
// for (let i = 0; i < starCount; i++) {
//   for (let j = 0; j < starCount; j++) {
//     process.stdout.write("⭐");
//   }
//   console.log("")
// }

//5. make right angle triangle with stars
// let count = 5;
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5 - count; j++) {
//     process.stdout.write("⭐");
//   }
//   count--;
//   console.log();
// }

//another method for right angle triangle
// let n = Number(prompt("enter the number for right angle triangle"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("⭐");
//   }
//   console.log();
// }

// 6. right angle triangle pattern with numbers
// let n = Number(prompt("enter the number for right angle triangle"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String(j + " "));
//   }
//   console.log();
// }

// 7. right angle triangle pattern with alphabets
// let n = Number(prompt("enter the number for right angle triangle"));
// let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(String(alphabets[j] + " "));
//   }
//   console.log();
// }

// another method
// let n = Number(prompt("enter the number for right angle triangle"));
// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

//8. make inverted right angle triangle
// let n = Number(prompt("enter your number"));
// for (let i = 0; i < n; i++) {
//   for(let j = n; j > i; j--){
//     process.stdout.write("⭐")
//   }
//   console.log()
// }

//9. print => *******
// let stars = "";
// for(let i = 0; i<7; i++){
//     stars += "*"
// }
// console.log(stars)

//10. print
// *****
// *****
// *****
// *****

// for (let row = 0; row < 5; row++) {
//   let stars = "";
//   for (let col = 0; col < 5; col++) {
//     stars += "*"
//   }
//   console.log(stars)
// }

//11. Print a rectangle of 3 rows and 7 columns.

// for (let row = 0; row < 3; row++) {
//   let stars = "";
//   for (let col = 0; col < 7; col++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
