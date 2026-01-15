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

//5. make right angle triangle
// let count = 5;
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5 - count; j++) {
//     process.stdout.write("⭐");
//   }
//   count--;
//   console.log();
// }

//another method for right angle triangle
let n = Number(prompt("enter the number for right angle triangle"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("⭐");
  }
  console.log();
}
