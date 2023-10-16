function BankAccount(accountName, accountNumber, balance=0){
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.deposit =(amount)=>{
        this.balance+=amount
    }


    this.withdraw =(amount)=>{
        this.balance-=amount
    }
}

const hariAccount = new BankAccount("Hari", 1201201201, 1000);
const RamAccount = new BankAccount("Ram", 1201201201, 1000);

console.log(hariAccount);
console.log(RamAccount);

// ProtoType comes to the pictrue

function Persion(name,proffession){
    this.name = name;
    this.proffession = proffession;
    
    // this.city = (cityName)=>{
    //     this.cityName = cityName;
    // }
}


const Ram = new Persion("Ram","Software Developer");
const Varun = new Persion("Varun","Tester");
Persion.prototype.city = function(cityName){
    this.cityName = cityName;
}

Persion.prototype.age = 45;
Ram.city("Hyderabad")
console.log(Ram);
console.log(Varun);
 