//Parent class
class User {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  showDetails = () => {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
  };
}

//Child class
class Bank extends User {
  constructor(name, age, gender) {
    super(name, age, gender);
    this.balance = 0;
  }

  deposit = (amount) => {
    this.amount = amount;
    this.balance = this.balance + this.amount;
    console.log(
      `\nDeposit: ${this.amount} \nAccount Name: ${this.name} \nAccount balance has been updated: LKR.${this.balance}\n `
    );
  };

  withdraw = (amount) => {
    this.amount = amount;
    let withdrawalFee = 5;
    if (this.amount > this.balance) {
      console.log(
        `Withdraw: ${this.amount} \nInsufficient balance !! \nBalance avilable: ${this.balance}\n`
      );
    } else {
      this.balance = this.balance - (this.amount + withdrawalFee);
      console.log(
        `Withdraw: ${this.amount} \nAccount Name: ${this.name} \nAccount balance has been updated: LKR.${this.balance}\n`
      );
    }
  };

  viewBalance = () => {
    console.log("Personal details");
    this.showDetails();
    console.log(`Account Balance Available: ${this.balance}`);
  };
}

const John = new Bank("John", 33, "male");
John.deposit(1000);
John.withdraw(500);
John.withdraw(500);
John.viewBalance();

const Emily = new Bank("Emily", 27, "female");
Emily.deposit(500);
Emily.withdraw(300);
Emily.viewBalance();
