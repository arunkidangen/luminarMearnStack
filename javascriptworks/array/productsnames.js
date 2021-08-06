var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names
console.log(+products.map(product => product[1]));


// print avaialable product name
console.log( products.filter(product => product[3]>0));


// print out of stock product details
console.log(products.filter(product => product[3]==0));

// list all products whose price > 250
console.log(products.filter(product => product[2]>250));
// low cost product


var productName="";
var productCost=0;
products.map(product=>{
    if(product[2]>productCost)
    productName=product[1]
})
console.log("low cost product  : "  +productName);
// is there any item available under 200
console.log( "item available under 200  : "+ products.filter( product => product[2]<200));