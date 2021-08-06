var arr=[2,3,4,5,6,7]
var sum=10;
// var pair="";
// var current=0;
// for(let i=0;i<arr.length;i++){
//     for (let j=i+1; j<=arr.length; j++){

//         if (arr[i]+arr[j] ==sum){
//             pair=arr[i]+","+arr[j];
           
//             current++;

//         }
//         if(current >0){
            
//         }
//     }
// }
// console.log(pair);

var low=0,upper=arr.length-1;

while(low<upper){
    let total=arr[low]+arr[upper];
    if (sum== total){
        
        console.log(arr[low],arr[upper]);
        break;
    }else if(total>sum){
        upper--;
    }else{
        low ++;
    }
}