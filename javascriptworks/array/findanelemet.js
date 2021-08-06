
//linear search


var arr =[10,11,12,13,14,15]
var element =18;
var flag=0;
for (let num of arr){
    if (num == element){
        console.log('num found');
        break;
        flag++;
    }
}
console.log(flag==0?'number not found':'');
