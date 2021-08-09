// //key value pair

// //{key: value,key1:value2}

// //fetch objects using key

// var person ={name:"ajay", age:25, height :165}

// //print name of person

// //keys : name, age, height

// console.log(person.name);
// console.log(person.age);
 
// //add gender 
// person["gender"] ="male";
// console.log(person);

// //update height

// person.height=180;

// console.log(person.height);



var employee={
    eid : "50",
    e_name : "ram",
    desig : "developer",
    salary : 5000
}

//print emp name
console.log(employee.e_name);

//check for experience if not add exp:1 else current exp+1

console.log("exp" in employee ? employee.exp+=1 : employee.exp=1);
console.log(employee);

// iterate

for (let key in employee){
    console.log(`${key} -> ${employee[key]}`);
}