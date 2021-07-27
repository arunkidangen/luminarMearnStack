//console.log(tes);    

//identifires
//variablename,classname,function name
// var, let ,const : used to set variables
// var age=25;

// var company_name="luminar technolabs";
// console.log("company name is"+company_name); // '+' -> concatnation
// console.log("company name is",company_name);
// var location_name="kakkanad";
// console.log(`our copmany ${company_name} is located in ${location_name}`);

var u_name="Arun";
var age="25";
//variables is used to represent a memory location
console.log(`hai i am ${u_name} here ${age} years old`);
//var overriding possible, global scope
//const  constant variables
//let overriding possible, scope block level scope
for ( var i= 0; i < 10; i++) {
    console.log("inside"+ i);
    console.log("inside"+ i);
     
    
}
console.log(i); // i= 10

// for ( let i= 0; i < 10; i++) {
//     console.log("inside"+ i);
     
//  }
//  console.log(i); // i= 10

//  for ( const i= 0; i < 10; i++) {
//     console.log("inside"+ i);
     
//  }
//  console.log(i); // type error value of i cant be changed