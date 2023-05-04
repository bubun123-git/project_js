// Get the form and table elements
const expenseForm = document.querySelector('form');
const expenseTable = document.querySelector('#expense-list');

// Initialize the expenses array
let expenses = [];

// Get the expense data from local storage
if (localStorage.getItem('expenses')) {
    expenses = JSON.parse(localStorage.getItem('expenses'));
}

// Function to add an expense to the expenses array and local storage
function addExpense(description, amount, date) {
    // Create a new expense object
    const expense = {
        description,
        amount,
        date
    };

    // Add the expense to the expenses array
    expenses.push(expense);

    // Store the updated expenses array in local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Update the table with the new expense
    updateTable();
}

// Function to update the table with the expense data
function updateTable() {
    // Clear the table body
    expenseTable.innerHTML = '';

    // Add each expense to the table
    expenses.forEach(expense => {
        const row = document.createElement('tr');
        const description = document.createElement('td');
        const amount = document.createElement('td');
        const date = document.createElement('td');

        description.textContent = expense.description;
        amount.textContent = expense.amount;
        date.textContent = expense.date;

        row.appendChild(description);
        row.appendChild(amount);
        row.appendChild(date);

        expenseTable.appendChild(row);
    });
}

