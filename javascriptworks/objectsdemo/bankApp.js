class Bank{
    accountCreate(acno,acc_type,balance){
        this.acno=acno;
        this.acc_type=acc_type;
        this.balance=balance;
        
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`your account number ${this.acno} has credited with amount ${amount} aval balance ${this.balance}`);
    }
    balanceenquiry(){
    
       console.log(`your available balance is ${this.balance}`);
    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount
        }else{
console.log("insufficent amount ");
        }
        
    }
}


var obj = new Bank();
obj.accountCreate(1000,'savings',5000);
obj.deposit(2000);
obj.withdrawal(50000);
obj.balanceenquiry();