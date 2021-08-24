class person{

    constructor(age,name){ // name is always constructor
        this.age=age;
        this.name=name
    }
    printPerson(){
        console.log(this.name+'--'+this.age);
    }
}


var obj = new person(25,'Arun');
obj.printPerson();