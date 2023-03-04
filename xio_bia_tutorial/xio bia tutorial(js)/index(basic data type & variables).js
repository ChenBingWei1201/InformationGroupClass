// basic data type & variables

// string 
"xio bia"

// number
87
160
160.55555

// boolean
true  
false

// variables (container of object)
// only English alphabet, numbers, $, or _
// begining of variables can't be numbers
var my_name = "xio bi";
var my_age = 87;
var my_gender = true;

document.write(my_name);
document.write("<br/>");
document.write(my_age);
document.write("<br/>");
document.write(my_gender);
document.write("<span/>");
document.write("<br/>");
my_name = "xio he"
// make good use of variables so that 
// we can regulate our data more efficiently
document.write("hansome " + my_name);
document.write("<br/>");
my_name = "xio bi"
document.write("My name is " + my_name);
document.write("<br/>");


// string 
var phrase = "Hello" + " World ";
var text = "haha";
document.write(phrase + text);
document.write("<br/>");
document.write(phrase.length); // string's length
document.write("<br/>");
document.write(phrase.toUpperCase("e")); // 全變大寫
document.write("<br/>");
document.write(phrase.toLowerCase()); // 全變小寫
document.write("<br/>");
document.write(phrase.charAt(1)); // 印出那個位子的字母
document.write("<br/>");
document.write(phrase.indexOf("l")); // 沒有的字元回傳-1
document.write(phrase.substring(2,7));