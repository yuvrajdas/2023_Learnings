class BankAccount{
    accountName;
    accountNumber;
    #balance;

    constructor(accountName, accountNumber, balance = 0){
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    
}

class SavingAccount extends BankAccount{
    loanAmount;
    constructor(loanAmount, accountName, accountNumber, balance){
        super()
        this.loanAmount = loanAmount;
    }
}

const ramAccount = new SavingAccount(100000, "Ram", 1201201200, 0);
ramAccount.balance = 5000;
console.log(ramAccount);