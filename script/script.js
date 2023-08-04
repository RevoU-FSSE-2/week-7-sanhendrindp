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
});
