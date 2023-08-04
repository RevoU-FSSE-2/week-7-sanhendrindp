"use strict";
let expenses = [];
let totalAmount = 0;
// SELECTING ELEMENTS
const categorySelect = document.getElementById("category-select");
const dateInput = document.getElementById("date-input");
const amountInput = document.getElementById("amount-input");
const addBtn = document.getElementById("add-btn");
const expensesTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");
// BUTTON ADD EVENT CLICKED
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
    if (amount <= 0) {
        alert("Please enter the correct amount! ❌");
        return;
    }
    if (date === "") {
        alert("Choose your expense date 📅");
        return;
    }
    // PUSH TO EXPENSES ARRAY
    expenses.push({ category, date, amount });
    // TOTAL THE AMOUNT & INSERT TO TOTAL CELL
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount.toString();
    // INSERT FORM CONTENT TO TABLE BODY
    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    // DELETE BUTTON EVENT
    deleteBtn.addEventListener("click", function () {
        const rowIndex = newRow.rowIndex - 1;
        const expense = expenses[rowIndex];
        if (expense) {
            expenses.splice(rowIndex, 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount.toString();
            expensesTableBody.removeChild(newRow);
        }
    });
});
