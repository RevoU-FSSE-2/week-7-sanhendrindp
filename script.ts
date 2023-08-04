// STRUCTURING EMPTY EXPENSES OBJECT
interface Expense {
  category: string;
  date: string;
  amount: number;
}

let expenses: Expense[] = [];
let totalAmount: number = 0;

// SELECTING ELEMENTS
const categorySelect = document.getElementById(
  "category-select"
) as HTMLSelectElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const amountInput = document.getElementById("amount-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const expensesTableBody = document.getElementById(
  "expense-table-body"
) as HTMLTableSectionElement;
const totalAmountCell = document.getElementById("total-amount") as HTMLElement;

// BUTTON ADD EVENT CLICKED
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const category: string = categorySelect.value;
  const amount: number = Number(amountInput.value);
  const date: string = dateInput.value;

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
