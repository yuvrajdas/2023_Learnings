class BankAccount{
    accountNumber;
    accountName;
    balance;

    constructor(accountName, accountNumber, balance=0){
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

class SavaingAccount extends BankAccount{
    takeLoan;

    constructor(loanAmount, accountName, accountNumber, balance){
        super( accountName, accountNumber, balance);
        this.takeLoan = loanAmount
    }

}

const anilAccount = new SavaingAccount(100000, "Anil", 1245784512, 10);
console.log(anilAccount);