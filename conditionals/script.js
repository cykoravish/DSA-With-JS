// 1. valid voter
const ans = Number(prompt("what is your age ?"));
if (isNaN(ans)) {
  alert("enter valid number");
} else if (ans >= 18) {
  alert("you can vote");
} else {
  alert("you can not vote");
}
