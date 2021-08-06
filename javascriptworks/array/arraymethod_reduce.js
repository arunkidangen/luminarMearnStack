var arr =[10,11,12,13,14,15,16,17]

//reduce
// two parameters required

//sum
var sum=arr.reduce((num1,num2) => num1+num2)
console.log(sum);

//min
var min=arr.reduce((num1,num2) => num1<num2?num1:num2)
console.log(min);

//max

var max=arr.reduce((num1,num2) => num1>num2?num1:num2)
console.log(max);


var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]


var lowcost =products.reduce((product1, product2) => product1[2]>product2[2]?product2:product1)
console.log(lowcost);

var costly =products.reduce((product1, product2) => product1[2]<product2[2]?product2:product1)
console.log(costly);


//more stock

var costly =products.reduce((product1, product2) => product1[3]<product2[3]?product2:product1)
console.log(costly);
