class Bank {
    account_details = {
        1000: { acno: 1000, balance: 2000, username: "userone", password: "userone" },
        1001: { acno: 1001, balance: 3000, username: "usertwo", password: "usertwo" },
        1002: { acno: 1002, balance: 2002, username: "userthree", password: "userthree" },
        1003: { acno: 1003, balance: 20000, username: "userfour", password: "userfour" }



    }
    session={};

    //1004,2000,userfour,userfour
    accountCreate(acno, balance, username, password) {
        if (acno in this.account_details) {
            console.log("account already exist....");
        } else {
            this.account_details[acno] = { acno: acno, balance: balance, username: username, password: password }
            console.log("account Created");
            console.log(this.account_details);
        }
    }


    authenticate(acc_number, username, password) {
        if (acc_number in this.account_details) {
            if (this.account_details[acc_number].username == username) {
                if (this.account_details[acc_number].password == password) {
                   console.log('login success');
                   this.session['user']=acc_number;
                } else {
                    console.log('invalid password')
                }
            } else {
                console.log('invalid username');
            }
        } else {
            console.log('invalid account ');
        }
    }


    fundTranfer(from_accon, to_accno,amount){
        if(from_accon== this.session.user){
            console.log("user found");


            if(this.account_details[from_accon].balance>amount){
                this.account_details[from_accon].balance-=amount;
                this.account_details[to_accno].balance+=amount;
                console.log(`account ${to_accno} is credited with ${amount} from ${from_accon} `);
            }
        }else{
            console.log("Insufficent balance");
        }

    }

    balanceEnq(){
        if('user' in this.session){
            console.log(`your A/C balance is ${this.account_details[this.session['user']].balance}`);
        }
    } 

}





var obj = new Bank();

//obj.accountCreate(1004, 2000, "username", "password");
obj.authenticate(1000,"userone","userone");
obj.fundTranfer(1000,1003,10);

obj.balanceEnq();
