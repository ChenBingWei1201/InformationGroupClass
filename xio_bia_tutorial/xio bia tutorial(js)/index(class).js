// class

class Phone 
{
    constructor(name, year, waterpoof)
    {
        this.name = name;
        this.year = year;
        this.waterpoof = waterpoof;
    };
    phone_age()
    {
        return 2022 - this.year;
    }
}

var phone1 = new Phone("soni", 2018, true);
var phone2 = new Phone("asuz", 2020, true);
var phone3 = new Phone("orange", 2017, false);
var phone4 = new Phone("oops", 2010, false);
var phone = [phone1, phone2, phone3, phone4];
for (var i = 0; i < phone.length; i++)
    document.write(phone[i].name + "<br/>" + phone[i].year + "<br/>" +
                   phone[i].waterpoof + "<br/>" + phone[i].phone_age() + "<br/>");
