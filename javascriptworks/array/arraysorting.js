var arr1=[1,2,3,6,7,5]
var arr2=[5,4,3,1,2,6]

arr1.sort((num1,num2)=>num1-num2)
arr2.sort((num1,num2)=>num2-num1)
// console.log(arr1);
 console.log(arr2);



// if(arr1.length != arr2.length){
//     console.log("array not same");
// }else{
//     for(let i=0 ;i<=arr2.length;i++){
//         if(arr1[i] == arr2[i]){
//             continue;
//         }else{
           
//             console.log("not same");
//             break;
//         }
//     }
// }