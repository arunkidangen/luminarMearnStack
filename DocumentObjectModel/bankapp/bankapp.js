// // //local Storage  key, value
// // add => localStorage.setItem(key,value);
// // get => localStorage.getItem(key);

// //checking  => 'key' in localStorage
// // checking for token => 'token' in localStorage // true or false
// // checking for password => 'password' in localStorage // true or false



// // localStorage.key(index);
// // localStorage.removeItem(key);
// // localStorage.clear();


// // localStorage.setItem("username",'admin');
// // localStorage.setItem("password","admin@123");
// // localStorage.setItem("token","abc123");
// // localStorage.setItem("accesstoken","123edx");
// // localStorage.removeItem("accesstoken");
// //localStorage.clear();

// var person1 = { pname: 'ram', acc_no: '1000', balance: '2000', password: 'userone' };
// var person2 = { pname: 'rahul', acc_no: '1001', balance: '5000', password: 'usertwo' };

// localStorage.setItem(person1.acc_no, JSON.stringify(person1));
// localStorage.setItem(person2.acc_no, JSON.stringify(person2));
// // JSON.parse(localStorage.getItem(1000))

// function getBalance(accountNumber) {
//     if (accountNumber in localStorage) {
//         let user = JSON.parse(localStorage.getItem(accountNumber));
//         console.log(user.balance);
//     } else {
//         console.log('invalid account number');
//     }

// }


// function authenticate(accountNumber, password) {
//     if (accountNumber in localStorage) {
//         let user = JSON.parse(localStorage.getItem(accountNumber))
//         //console.log(user);
//         if (user.password == password && user.acc_no == accountNumber) {
//             console.log("login successfull");
//         } else {
//             console.log("invalid login");
//         }
//     }else{
//         console.log("invalid account , login failed");
//     }
// }
// function createAccount() {
//     let username = userName.value;
//     let password=password.value;
//     let acc_no = acc_number.value;
//     let balance = balance.value;
//     console.log(username, password, acc_no, balance);


// }



class Bank {
    createAccount() {
      
        let username = userName.value;
        let password = pwd.value;
        let acc_no = acc_number.value;
        let balance = blnc.value;
        if(username == "" || password == "" || acc_no == "" || balance == "" ){
            alert("Failed to account Created");
        }


        let user = { username, password, acc_no, balance }
        console.log(user);
        localStorage.setItem(user.acc_no, JSON.stringify(user));
        alert("account Created");
        location.href = 'banklogin.html';
        }

    authenticate() {
        let acno = accountNumber.value;
        let pwd = pswd.value;
        if (acno in localStorage) {
            let userData = JSON.parse(localStorage.getItem(acno))
            if (userData.acc_no == acno && userData.password == pwd) {

                sessionStorage.setItem(acno, JSON.stringify(userData))
                alert('Login Sucessfull')
                location.href = 'userhome.html'
            } else {
                alert('invalid  login')
            }
        } else {
            alert('invalid credentials, Login Failed');
        }
    }

    logout() {
        alert("logged out")
        sessionStorage.clear();
        location.href = "banklogin.html";
    }

    balanceEnquiry() {

        let userData = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
        //balanceId.innerHTML = 'Your Available Balance is '+ userData.balance;
        balanceId.innerHTML = `Your Available Balance is ${userData.balance}`;
    }


    fundTransfer() {
        let toAccount = accountId.value;
        let transferAmount = amountId.value;


        if (toAccount in localStorage) {
            let userData = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
            if (userData.balance >= transferAmount) {
                let toAccountUSer = JSON.parse(localStorage.getItem(toAccount));
                let fromAccountUSer = JSON.parse(localStorage.getItem(userData.acc_no))

                toAccountUSer.balance +=Number(transferAmount);
                fromAccountUSer.balance -=Number(transferAmount);
                
                localStorage.setItem(toAccountUSer.acc_no, JSON.stringify(toAccountUSer));
                localStorage.setItem(fromAccountUSer.acc_no, JSON.stringify(fromAccountUSer))
                sessionStorage.setItem(fromAccountUSer.acc_no, JSON.stringify(fromAccountUSer))
                alert("transaction complete..!!");
            }
            else {
                alert("insufficent amount");
            }
        } else {
            alert("invalid transaction ")
        }
    }
}

var bank = new Bank();