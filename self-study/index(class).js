// class

class Phone 
{
    constructor(ID, year, waterpoof)
    {
        this.ID = ID;
        this.year = year;
        this.waterpoof = waterpoof;
    }
    phone_age()
    {
        return 2022 - this.year;
    }
}

var phone1 = new Phone("soni", 2018, true);
var phone2 = new Phone("asuz", 2020, true);
var phone3 = new Phone("orange", 2017, false);
var phone4 = new Phone("oops", 2010, false);

document.write(phone1.ID);