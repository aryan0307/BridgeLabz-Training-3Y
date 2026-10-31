// Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingTransactionDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingTransactionDataError";
    }
}

class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        // Set a VS Code breakpoint on the next line to inspect each entry.
        console.log("Checking transaction:", transaction);

        if (transaction === null) {
            throw new NullTransactionError("Transaction entry is null.");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingTransactionDataError("Transaction is missing id or amount.");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalidTransactions.push({
            transaction,
            errorType: error.name,
            message: error.message
        });
        console.error(`${error.name}: ${error.message}`);
    }
}

console.log("VALID TRANSACTIONS:", validTransactions);
console.log("INVALID TRANSACTIONS:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
