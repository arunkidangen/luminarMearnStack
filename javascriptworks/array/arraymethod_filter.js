var arr = [1,2,3,4,5,6,7,8,9,10]


//find even number
console.log(arr.filter(num => num%2==0));


var names=["ram","Ravi","arun"]

console.log(names.filter(name=> name[0] =='r' || name[0] =='R' || name[0].toUpperCase() =='R' ));


var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikil",1,21000,"qa"]
]
console.log(employees.filter(emp => emp[4]=='developer'));

//sal  >23000
console.log(employees.filter(emp => emp[3]>23000))
//sal >23000 && designation=de

console.log(employees.filter(emp => emp[3]>23000 && emp[4] == 'developer').map(emp => emp[1]))