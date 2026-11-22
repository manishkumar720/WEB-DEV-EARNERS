// function outter() {
//     const random = () => {
//         console.log(this);
//     }
//     random()
// }

// outter();
// // product();
// // random()

// console.log(this);

function product(name, price) {
  this.name = name;
  this.price = price;
  return this;
}

const p1 = new product("Iphone 1956 ultra pro max plus", 64598562);

const p2 = new product("Samsung 3251 galaxy fold", 249847456);

// console.log(p1);
// console.log(p2.name);

class User {
  country = "india"; // defult property
  constructor(name, country) {
    this.name = name; // instance property
    this.name = country; // instance property
  }

  printName() {
    // instance property
    console.log(this.name);
  }
}

const u1 = new User("Manish", "India");
const u2 = new User("Dipak", "India");

// u1.name = "Name updated";
// console.log(u1);

class BankAccount {
  #balance; // this is private property
  static totalBankAccount = 0;
  constructor(initialBalance) {
    this.#balance = initialBalance;
    this.totalBankAccount++;
  }

  get() {
    console.log(this.#balance);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Bhai tere pass itne paise nhi hai");
      return;
    }

    this.#balance = this.#balance - amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log(
        "Bhai pagal samajh rahe ho kya, mujhe aate hai kaise kaam nikalwate hai",
      );
      return;
    }
    this.#balance = this.#balance + amount;
  }

  calculateTAx() {
    console.log("calculating tax...");
  }
}

let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);

// acc1.get()
// acc1.withdraw(500)
// acc1.get()
// acc1.deposit(25000)
// acc1.get()
// acc1.withdraw(14000)
// acc1.get()

// acc1.#balance = 12345672 // private field `#balance` must be declared in an enclosing class

acc1.get();

acc1.deposit(-111);
acc1.get();

console.log(BankAccount.totalBankAccount);