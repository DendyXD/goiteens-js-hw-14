// Завдання 1

const user = {
    name: "joe",
    hobby: "drawing",
    premium: true
}

user.mood = "happy";

user.hobby = "skydiving";

user["premium"] = false

const keys = Object.keys(user)

for (const key of keys) {
    console.log(key, ":", user[key]);
}

// Завдання 2

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user));

// Завдання 3

const employeesTasks = {
    joe: 2,
    maksim: 10,
    billy: -4
}

function findBestEmployee(employees) {
    let employeeKeys = Object.entries(employees)

    let mostTasks = 0;

    let bestEmployee = "";

    for (const employee of employeeKeys) {
        if (mostTasks < employee[1]) {
            mostTasks = employee[1];
            bestEmployee = employee[0];
        }
    }

    return `${bestEmployee} став найкращим робітником. Його кількість виконанних завдань: ${mostTasks}`
}

console.log(findBestEmployee(employeesTasks));

// Завдання 4

const employeesSalary = {
    joe: 2500,
    maksim: 100,
    billy: 600
}

function countTotalSalary(employees) {
    let totalSalary = 0;

    let employeeKeys = Object.keys(employees);

    for (const key of employeeKeys) {
        totalSalary += employees[key];
    }

    return totalSalary
}

console.log(countTotalSalary(employeesSalary));

// Завдання 5

const objects = [{name: "bob", a: 4}, {price: 4000, name: "oleg", login: "8148138"}, {b: 8, data: null}]

function getAllPropValues(arr, prop) {
    let props = [];

    for (const el of arr) {
        if (el.hasOwnProperty(prop)) {
            props.push(el[prop]);
        }
    }

    return props;
}

console.log(getAllPropValues(objects, "name"));

// Завдання 6

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

function calculateTotalPrice(allProdcuts, productName) {

    for (const product of allProdcuts) {
        if (productName === product["name"]) {
            return product["price"] * product["quantity"];
        }
    }

    return "Цього товару не існує";
}

console.log(calculateTotalPrice(products, "Сканер"));

// Завдання 7

const select = document.querySelector("#select");

const input1 = document.querySelector("#input1");

const input2 = document.querySelector("#input2");

const input3 = document.querySelector("#input3");

let id = 0;

const account = {
  balance: 0,
  transactions: [],

    createTransaction(amount, type) {
        id += 1;
        return {amount: amount, type: type, id: id}
    },
    
    deposit(amount) {
        this.balance += amount;
        let transaction = this.createTransaction(amount, "deposit");
        this.transactions.push({ ...transaction })
        
        return console.log(`Транзакція пройшла успішно. До рахунку додано ${amount}. Рахунок становить: ${this.balance}`);
  },

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            return console.log("На рахунку не достатньо грошей");;
        }

        let transaction = this.createTransaction(amount, "withdraw");
        this.transactions.push({ ...transaction })
        
        return console.log(`Транзакція пройшла успішно. З рахунку знято ${amount}. Рахунок становить: ${this.balance}`);
  },

    getBalance() {
        return console.log(`Ваш баланс становить ${this.balance}`);
  },

    getTransactionDetails(id) {
        for (const transactionToFind of this.transactions) {
                if (id === transactionToFind["id"]) {
                return console.log(`Транзакція по айді ${id}:`,transactionToFind);
            }
        }
        
        return "Транзакцію не знайдено";
    },

    getTransactionTotal(type) {
        let transactionByType = [];
        
        for (const transactionToFind of this.transactions) {
            if (transactionToFind["type"] === type) {
                transactionByType.push(transactionToFind);
            }
        }

        return console.log(`Усі транзакції за типом ${select.value}:`, transactionByType);
  },
};

account.getBalance();