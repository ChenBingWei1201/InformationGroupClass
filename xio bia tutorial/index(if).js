// if 
/*
    1.
    如果 肚子餓
        我就去吃飯
*/
var hungry = true;
if(hungry){
    document.write("我就去吃飯");
}

document.write("<br/>");
/*
    2.
    如果 今天下雨
        我就開車去上班
    否則
        我就走路去上班
*/
var rainy = false;
if(rainy){
    document.write("我就開車去上班");
}
else
    document.write("我就走路去上班");
// 單純一行可不用{}


document.write("<br/>");
/*
    3.
    如果 你考一百分
        我給你1000元
    或是如果 你考 80分以上
        我給你500元
    或是如果 你考 60分以上
        我給你100元
    否則
        你給我300元
*/
var score = 100;
if(score == 100)
    document.write("我給你1000元");
else if(score >= 80)
    document.write("我給你500元");
else if(score >= 60)
    document.write("我給你100元");
else
    document.write("你給我300元");
document.write("<br/>")
// && 且 
// || 或
// 加! 反面


function max_num(num1, num2, num3)
{
    var max = num1;
    if (num2 >= max)
    {
        if (num3 >= num2)
            max = num3;
        else
            max = num2;
    }
    else
    {
        if(num3 >= max)
            max = num3;
        else
            ;
    }
    return max;
}

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);
var num1 = prompt("Please enter number 1: ");
var num2 = prompt("Please enter number 2: ");
var num3 = prompt("Please enter number 3: ");
var max = max_num(num1, num2, num3);
document.write(max);