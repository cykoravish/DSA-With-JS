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
const starCount = Number(prompt("enter the number of stars you wanna print ?"));
for (let i = 0; i < starCount; i++) {
  process.stdout.write("⭐");
}
