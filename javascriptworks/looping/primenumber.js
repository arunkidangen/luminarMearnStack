var num=2;
var flag=0;
for (let i=2;i<num;i++){
     if(num % i == 0){
        flag++;
        break;
     }
}

console.log(flag==0?"prime number":"not prime");



for (let i=1;i<=3;i++){
    let res="";
    for (let j=1;j<=3;j++){
        res=res+i;
        
    }
    console.log(res);
}




for ( i = 1; i <= 4; i++) { // external loop
    let string = "";
  for (j = 1; j <= i; j++) { // internal loop
    string += "*";
  }
  console.log(string); 
}
