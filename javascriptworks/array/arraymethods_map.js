//map()
//filter()
//reduce ()
//sort()
//some()
//find()



//map()

var arr1=[2,3,4,5,6]

function square(num){
    return num**2;
}

var sq=(num) => num**2

// console.log(arr1.map(square));
// console.log(arr1.map(sq));
console.log(arr1.map((num) => num**2));

console.log(arr1.map(num => num**3));

var names=["ram","ravi","arun"]
console.log(names.map( name=>name.toUpperCase()));


var numArr=[2,3,4,6,7,8]


console.log(numArr.map(num => {
    if(num<5){
        return num-1;
    }else{
       return num+1;
    }
}));

console.log(numArr.map(num => num<5?num-1: num+1))



var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,21000,"qa"]
]
//names
console.log(employees.map( emp => emp[1]));
 // desgination
 console.log(employees.map( emp => emp[4]));