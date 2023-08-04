var expenses = [];
var totalAmount = 0;
// SELECTING ELEMENTS
var categorySelect = document.getElementById("category-select");
var dateInput = document.getElementById("date-input");
var amountInput = document.getElementById("amount-input");
var addBtn = document.getElementById("add-btn");
var expensesTableBody = document.getElementById("expense-table-body");
var totalAmountCell = document.getElementById("total-amount");
// BUTTON ADD EVENT CLICKED
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var category = categorySelect.value;
    var amount = Number(amountInput.value);
    var date = dateInput.value;
    if (amount <= 0) {
        alert("Please enter the correct amount! ❌");
        return;
    }
    if (date === "") {
        alert("Choose your expense date 📅");
        return;
    }
    // PUSH TO EXPENSES ARRAY
    expenses.push({ category: category, date: date, amount: amount });
    // TOTAL THE AMOUNT & INSERT TO TOTAL CELL
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount.toString();
    // INSERT FORM CONTENT TO TABLE BODY
    var newRow = expensesTableBody.insertRow();
    var categoryCell = newRow.insertCell();
    var dateCell = newRow.insertCell();
    var amountCell = newRow.insertCell();
    var deleteCell = newRow.insertCell();
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    // DELETE BUTTON EVENT
    deleteBtn.addEventListener("click", function () {
        var rowIndex = newRow.rowIndex - 1;
        var expense = expenses[rowIndex];
        if (expense) {
            expenses.splice(rowIndex, 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount.toString();
            expensesTableBody.removeChild(newRow);
        }
    });
    var expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    dateCell.textContent = expense.date;
    amountCell.textContent = expense.amount.toString();
    deleteCell.appendChild(deleteBtn);
    //   console.log(expenses);
});
