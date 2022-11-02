// 2D array & nested loop

var number = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8]
];

document.write(number[2][0] + "<br/>");

for (var i = 0; i < number.length; i++)
{
    for (var j = 0; j < number[i].length; j++)
        document.write(number[i][j] + " ");
    document.write("<br/>");
}   
