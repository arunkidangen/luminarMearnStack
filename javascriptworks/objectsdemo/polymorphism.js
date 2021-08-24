class calculation{
    add(){
        console.log('no arg');
    }
    add(param1){
        console.log('arg1');
    }
    add(param1, param2){
        console.log('2 args');
    }
    
}

var cal= new calculation();
cal.add();
cal.add(10,20);
cal.add(10);



// in js only last implemented method will be invoked 
// so we can use add(...param)