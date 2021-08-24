class Parent{
    phone(){
        console.log('inside parent class phone method');
    }
}

//single inheritance
class Child extends Parent{

}

var child = new Child();
child.phone();


//multi level inheritance
class Parent1{
    m1(){
        console.log('inside m1');
    }
}
class Child{
    m2(){
        console.log('inside m2');
    }
}
class SubChild{
    m3(){
        console.log('inside m3');
    }
}


