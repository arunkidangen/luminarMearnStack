var pattern ='BABCABB'
var character={};
//find first recurive character

for (let char of pattern){
 if(char in character){
     console.log("first occurence : " + char);
     break;
 }else{
     character[char] =1;
 }
}

//pattern.map( char => char in character ? console.log("first occurence" + char) : character[char] =1)