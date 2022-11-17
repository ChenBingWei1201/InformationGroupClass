// object 物件
// key:value
// 鍵 : 值
// 好像 C++ 的 struct!
var person = {
    name : "小白",
    age : 23,
    is_male : true,
    print_name : function()
    {
        document.write(this.name); // person.name
        // document 其實也是物件，而write是其中的func.
    }
};

document.write(person.age);
person.print_name();


// 其實js內的所有東西都可視為物件
var phrase = "hello";
phrase.length;  // 取得phrase物件內的length屬性

document.write("<br/>");

// 利用 object 表達現實生活中的東西
var movie = 
{
    title:"刻在你心裡的名字",
    maker:"氧氣電影",
    duration:114,
    actors:
    [                    // 物件內也可放陣列, 物件用{}
        {                       // 陣列內也可放物件, 陣列用[]
            name:"陳昊森",      // 用 ,(逗號)隔開物件(不是;分號!)
            age:24,            // 陣列元素間也是用 ,(逗號)隔開!
            is_male:true
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true
        }
    ]
};

document.write(movie.actors[1].name);