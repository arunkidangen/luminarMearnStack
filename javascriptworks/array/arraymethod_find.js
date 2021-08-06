//find 

// returns first occurence
//only one param needed


//filter returns all occurences

var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
    ["006","complan",300,40]
]


console.log(products.find(item => item[1] == 'complan'));
//  returns ["001","complan",275,50]

console.log(products.filter(item => item[1] == 'complan'));

//  returns ["001","complan",275,50] ["006","complan",300,40]



