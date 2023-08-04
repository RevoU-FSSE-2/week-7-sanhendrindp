let expenses: object = [];
let totalAmount: number = 0;

const categorySelect = document.getElementById(
  "category-select"
) as HTMLSelectElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const amountInput = document.getElementById("amount-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const expensesTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");
