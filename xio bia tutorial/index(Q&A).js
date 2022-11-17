// making a Questioning and Answering mechine

var questions = [  // array
    {   // 0th element of array 
        prompt : "What the color of banana? \n (a)blue \n (b)yellow \n (c)red",  
        answer : "b"
    },
    {   // 1st element of array
        prompt : "What the color of strawberry? \n (a)blue \n (b)yellow \n (c)red",
        answer : "a"
    },
    {   // 2nd element of array
        prompt : "What the color of grape? \n (a)purple \n (b)yellow \n (c)red",
        answer : "a"
    },
    {   // 3rd element of array
        prompt : "What the color of watermelon? \n (a)blue \n (b)yellow \n (c)green",
        answer : "c"
    }
]
var score = 0;
for (var i = 0; i < questions.length; i++)
{
    var input = prompt(questions[i].prompt);  // get the prompt of the ith element of the array 
    if (input == questions[i].answer)         // get the answer of the ith element of the array 
    {
        score++;
        alert("答對了!");
    }   
    else
    {
        alert("答錯了!");
    }
}

alert("總共答對了" + score + "題");