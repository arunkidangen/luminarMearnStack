var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,21000,"qa"]
]

var maxSal=0;
for (let emp of employees){

    if(emp[3]>maxSal)
    maxSal=emp[3]
}

console.log(maxSal);