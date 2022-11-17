// how to get elements in html
// document.write(); // window is a global object, but need not to be written.
// window.document.write();

// var a = 123;
// window.document.write(window.a);

var h1 = document.getElementById("header");
//console.log(h1); // print h1 in f12 console
h1.innerText = "xio bai is so handsome";
h1.style.color = "red"; 
h1.style.backgroundColor = "blue";

var link = document.getElementById("link");
link.href = "https://amazon.com";

