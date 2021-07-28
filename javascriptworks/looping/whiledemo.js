// while(condition)
// stmt
// increment or decrement
// }


// print 4 to 0
// var i=4;
// while(i>=0){
//     console.log(i);
//     i--;   
// }

// //sum of n number
// var n=10;
// var sum=0;
// var i=1;
// while(i<=n){
// sum+=i;

// i++;
// }
// console.log(sum);


//sum of a number
// var num=123;

// var sum=0;
// while (num!=0){
//     var i;
//     i=num%10;
//     console.log(i);
//     sum+=i*i*i;// sum=i**3
//     num=Math.floor(num/10);
    

// }
// console.log(sum);



var num=123;

var sum=0;
while (num!=0){
    var i;
    i=num%10;
    
    num=Math.floor(num/10);
    sum=sum*10+i;
    console.log(sum);
    
}
