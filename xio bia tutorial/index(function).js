// function
function hello(name, age){
    document.write("你好" + name + "你今年" + age + "歲");
}

// hello("小白", 20);

function add(num1, num2){
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2); // 轉換成整數
    document.write(num1 + num2); // 印出num1+num2
    document.write("<br/>")
    return 10; // 碰到return就直接回傳然後結束
    // function subtract(num1, num2) 一樣無法巢狀定義func.
}
var num1 = prompt("Please enter number 1: ");
var num2 = prompt("Please enter number 2: ");
sum = add(num1, num2) // sum = 10;
document.write(sum);  // 印出10
