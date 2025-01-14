// deposit , withdrow, getBalance

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: (amount) =>(balance += amount),
        withdraw: (amount) =>(balance -= amount),
        getBalance: () =>balance
    };
}
const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50)); // ?
console.log(myAccount.withdraw(30)); // ?
console.log(myAccount.getBalance()); // ?
