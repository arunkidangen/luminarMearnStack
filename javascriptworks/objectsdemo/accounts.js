var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}

    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}

    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}

    ]},
   
]


//check for  1005

//console.log(datas.some( accounts => accounts.acno==1005));

//find greater balance
//console.log(datas.reduce((acc1,acc2) => acc1.balance<acc2.balance? acc2: acc1));
//sort in descenting order

//datas.sort((acc1,acc2) => acc2.balance<acc1.balance).forEach(acc => console.log(acc.acno))


//debit transactions of acc number 1000

//datas.filter( account => account.acno == 1000).forEach(acc => console.log(acc.transactions))

//credit 

//datas.map(account =>account.transactions).filter(transaction => transaction.forEach(data => data.to==1000? console.log(data): ""))
 var paymentHistory=[];
datas.map(account => account.transactions).forEach(transaction=> {
    transaction.forEach(transfer =>{
        transfer.to==1000?paymentHistory.push(transfer): ""
    })
})

//console.log(credit_trans);
//payment history


datas.filter(account => account.acno==1000).map(data => paymentHistory.push(data.transactions))

console.log(paymentHistory);