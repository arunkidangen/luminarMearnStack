// function functionname(parameters){
//     function definition
    
//     return value;
// }

function add(num1,num2){
    let res=num1+num2;
    return res;
}

//console.log(add(10,20));
var res =add(10,20);
console.log(res);

//cube 
function cubeNum(num){
    return num**3;
}
console.log(cubeNum(10));

function squareOfNum(num){
    Math.sqrt(num);
    
}
console.log(squareOfNum(2));

function factorial(n) {
    var result=1;
      
    for (var i = 2; i <= n; i++)
    result = result * i;
    return result;
}
console.log(factorial(5));