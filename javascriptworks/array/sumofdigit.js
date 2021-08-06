var num=123;
var sum=0;
while (num!=0){
    let i=num%10;
    sum+=i;
    num=Math.floor(num/10);
}
console.log(sum);