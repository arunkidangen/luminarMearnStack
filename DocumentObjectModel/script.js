function displayValue(num){
    inpt.value+=num;
}

function clearBox(){
    inpt.value="";
}
function evaluateExpr(){
    let result=eval(inpt.value);
    inpt.value=result;
}
function removeElement(){
    let data= inpt.value.slice(0,-1);
    inpt.value=data;
}