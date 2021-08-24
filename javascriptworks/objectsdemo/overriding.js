class Parent{
    Phone(){
        console.log('samsung');
    }
}
class Child extends Parent{
    Phone(){
        super.phone(); //refers baseClass Methods
        console.log('apple');
    }
}

var child = new Child();
child.phone(); // logs iphone