var num=4;
for(row=1;row<=4;row++){
    let str="";
    for(let space=4;space>row;space--){
        str+=" ";
    }
    for(let star=1;star<=row;star++){
     str+="* "
    }
    console.log(str);
}