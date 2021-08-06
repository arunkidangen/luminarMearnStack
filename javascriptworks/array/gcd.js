var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
return gcd(b, a % b);
};
console.log(gcd(1263262,553443));


var num1=1263262;
var num2=553443;
while (num1 != num2)   
{  
    if (num1 > num2)  
        {  
        num1 = num1 - num2;   
        }  
    else  
        {  
            num2 = num2 - num1; 
            }     
              
}   
console.log( num2);