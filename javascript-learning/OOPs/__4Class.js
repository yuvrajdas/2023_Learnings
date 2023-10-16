class BankAccount{
    accountNumber;
    accountName;
    balance;

    constructor(accountName, accountNumber, balance=0){
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposite(amount){
        this.balance+=amount;
    }

    withdraw(amount){
        this.balance-=amount;
    }
}

const myAccount = new BankAccount("Mohan", 1201202123, 1000);
console.log(myAccount);