// Structuring empty expenses object
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
});
