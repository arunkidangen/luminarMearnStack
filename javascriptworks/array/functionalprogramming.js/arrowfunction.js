// //  => arrow function - nameless function annonymous function


// // funtion add(num1,num2){
// //     num1+num2;      
// // }


// var add= (num1,num2) => num1+num2

// var sub= (num1,num2) => num1-num2

// var cube = (num) => num**3
// var mul =(num) => num*2 


// let add =(num1,num2) =>{
//     let s=num1+num2;
//     return s;
// }

// let sublarge=(num1,num2) => num1>num2?num1-num2:num1-num2;

// return largest number
let greatest = (num1,num2) => num1>num2?num1:num2
console.log(greatest(2,3));

// odd or even 
let numCheck=(num1) => num1%2==0?"even":"odd";
console.log(numCheck(10));