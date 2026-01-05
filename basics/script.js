//0. variable declared with var can be used before declaration so we will use let or const
// console.log(a);
// var a;

// 1. sum of two integer
// let a = 10;
// let b = 20;
// console.log(a + b);
// -----------------------------------------------

//2. Relation between number and string

// "10" => string
// 10 => number

// let a = 12;
// let b = "13";
// console.log(a+b) //concatination
// console.log(a-b) //substraction
// console.log(typeof (a+b)) //string
// console.log(typeof (a-b)) //number
// -----------------------------------------------

// 3. sum and message
// let a = 10;
// let b = 20;
// console.log("sum of 10 and 20 is " + a + b);
// console.log("sum of 10 and 20 is ", (a + b)); // (bracket have more priority)
// console.log(a + b + " is sum of 10 and 20")
// -----------------------------------------------

//4. type coersion
// console.log(1 + "1");
// console.log(1 - 1);
// console.log(1 * "1");
// console.log("1" / "1");
// console.log("1" / 1);
// -----------------------------------------------

//5. Accept and print the answer
// let age1 = prompt("what is your age");
// let age2 = Number(prompt("what is your age")); //type casting or type conversion
// console.log(typeof age1, age1);
// console.log(typeof age2, age2);
// console.log(typeof NaN, Number("baby"));
// -----------------------------------------------

//6. swap two variables via 3 methods
// let a = 10;
// let b = 20;
// method-1
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a, b);

// method 2
// [a, b] = [b, a];
// console.log(a, b);

//method 3
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);
// -----------------------------------------------

//7. Arithmetic operators
// let a = 12;
// let b = 22;
// console.log(a / b);
// console.log(5 / 2);
// console.log(Math.floor(5 / 2));
// console.log(5 % 2);
// console.log(2 % 5);
// -----------------------------------------------

//8. Relational operator
// console.log(10 > 5);
// console.log(10 >= 5);
// console.log(10 < 7);
// console.log(10 !== 10);
// var a = 12; //assignment operator
// ==
// ===
//-----------------------------------------------

//9. Logical operator ( && || )
// console.log(10 > 6 && 5 < 9);
// console.log(10 < 6 && 5 < 9);
// console.log(10 > 6 && 5 < 9 && 0 < 5);
//-----------------------------------------------

//10. unary operator (++ --)
// let i = 11;
// i = i++ + ++i; // 11 + 13
// console.log(i);

// let a = true;
// a++
// console.log(a)

// console.log(6++) //error

// let a = 10;
// let b = ++(a++); //error
//-----------------------------------------------

//11. Math function
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.1));
// console.log(Math.trunc(10.25));
// console.log(Math.pow(2, 5));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-16));
// console.log(Math.max(-16, 25, 10, 50));
// console.log(Math.min(-16, 25, 10, 50));
// console.log(Math.random());
//-----------------------------------------------

//12. calculate area and perimeter of rectangle
// let a = 5;
// let b = 7;
// console.log(a * b);
// console.log(2 * (a + b));
