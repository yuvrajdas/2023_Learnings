/**
 * Constructor is special function in javascript used to create or initialize the object
 * To ceate constructor, function and new keyword is used and function name should be same as class name
*/

function BankAccount(accountName, accountNumber, balance=0){
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.balance = balance;
    
    this.deposit = (amount)=>{
        this.balance+=amount;
    }

    this.withdraw = (amount)=>{
        this.balance-=amount;
    }
}

const vinayAccount = new BankAccount("Vinay", 1234567890, 100);
vinayAccount.deposit(500);
vinayAccount.deposit(900);
console.log(vinayAccount);

const arunAccount = new BankAccount("Arun", 5452158785, 500);
arunAccount.deposit(100);
arunAccount.deposit(100);
arunAccount.withdraw(100);
console.log(arunAccount);