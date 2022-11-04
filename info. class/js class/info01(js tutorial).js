// Array.forEach()
document.write("<h3>Array.forEach():</h3>");
const fruits = ["apple", "orange", "cherry", "mango"];
let txt = "";  // 定義txt是string;
fruits.forEach(myFunction1);
document.getElementById("demo1").innerHTML = txt;

function myFunction1(item, index) {
  txt += (index + 1) + ": " + item + "<br>";
}

// Array.include()
document.write("<h3>Array.include():</h3>");
document.write(fruits.includes("mango") + "<br/>"); // true 顯示的位置在125下面，順序最下面?跟code上下順序無關嗎?
console.log(fruits.includes("watermellon")); // false

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction2);
document.getElementById("demo2").innerHTML = sum;

function myFunction2(item) {
  sum += item;
}


var i = 0;
// Array.filter()
document.write("<h3>Array.filter():</h3>");
const over18 = numbers.filter(myFunction3);
// over18 就變成了新的array，裡面的值是從符合下面函數條件的數
function myFunction3(value, index, array) {
  return value > 18;
}
for (i = 0; i < over18.length; i++)
  document.write(over18[i]+ " ");
document.write("<br/>");

// Array.map()
document.write("<h3>Array.map():</h3>");
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction4);

function myFunction4(value, index, array) {
  return value * 2; // numbers2內元素的值=numbers1內的2倍
}
for (i = 0; i < numbers2.length; i++)
  document.write(numbers2[i]+ " ");
document.write("<br/>");

// Array.reduce()
document.write("<h3>Array.reduce():</h3>");
const numbers_2 = [45, 4, 9, 16, 25];
let sum_2 = numbers_2.reduce(myFunction5);

function myFunction5(total, value, index, array) {
  return total + value;
}
document.write(sum_2);
document.write("<br/>");

// Array.some()
document.write("<h3>Array.some():</h3>");
// The some() method check if some array values pass a test.
const numbers_3 = [45, 4, 9, 16, 25];
let someOver18 = numbers_3.some(myFunction6); // true

function myFunction6(value, index, array) {
  return value > 18;
}
document.write("someOver18: " + someOver18);
document.write("<br/>");

// Array.every()
document.write("<h3>Array.every():</h3>");
// The every() method check if all array values pass a test.
const numbers_4 = [45, 4, 9, 16, 25];
let allOver18 = numbers_4.every(myFunction7); // false

function myFunction7(value, index, array) {
  return value > 18;
}
document.write("allOver18: " + allOver18);
document.write("<br/>");

// Array.sort()
document.write("<h3>Array.sort():</h3>");
// 1.
const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
fruits_2.sort(); // Sorts the elements of fruits alphabetically
for (i = 0; i < fruits_2.length; i++)
  document.write(fruits_2[i]+ " ");
document.write("<br/>");
// 2.
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
for (i = 0; i < points.length; i++)
  document.write(points[i]+ " ");
document.write("<br/>");

// Array.from()
document.write("<h3>Array.from():</h3>");

const string = Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
for (i = 0; i < string.length; i++)
  document.write(string[i]+ " ");
document.write("<br/>");

// getElementById()
document.write("<h3>getElementById():</h3>");
document.write("The hyperlink to google has been changed.");
var link = document.getElementById("link");
link.href = "https://amazon.com";

// Adding Events Handlers
// function handle_click(element)
// {
//   // alert("叫你按就按啊?");
//   // console.log(element);
//   element.innerText = "按屁啊!";
//   element.style.color = "red";
// }

var btn = document.getElementById("btn");
btn.addEventListener("click", function()
{
  // alert("叫你按就按啊?");
  this.innerText = "按屁啊!";
  this.style.color = "red";
  this.style.backgroundColor = "blue";
})

var img = document.getElementById("img");
img.addEventListener("mouseover", function()
{
  this.src = "hotpot2.jpg";
  this.src.height ="400";
  this.src.width = "300"; 
})

img.addEventListener("mouseout", function()
{
  this.src = "hotpot1.jpg";
})