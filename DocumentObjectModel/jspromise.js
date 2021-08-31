var mypro= new Promise((resolve,reject) =>{
    let attendance=60;
    if (attendance>50){
        resolve("you are eligible for certification")
    }
})

mypro.then(res =>console.log(res)); //.then handles the success case
mypro.catch(err => console.log(err)); //.catch handles error case