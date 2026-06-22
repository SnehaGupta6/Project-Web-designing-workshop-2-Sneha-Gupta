let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

function addExpense(){

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if(name === "" || amount === "" || date === ""){
        alert("Please fill all fields");
        return;
    }

    let expense = {
        name,
        amount: Number(amount),
        category,
        date
    };

    expenses.push(expense);

    localStorage.setItem("expenses",
        JSON.stringify(expenses));

    displayExpenses();

    document.getElementById("name").value="";
    document.getElementById("amount").value="";
    document.getElementById("date").value="";
}

function displayExpenses(){

    let list =
    document.getElementById("expenseList");

    list.innerHTML="";

    let total = 0;

    expenses.forEach((expense,index)=>{

        total += expense.amount;

        list.innerHTML += `
        <tr>
            <td>${expense.name}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button
                class="delete-btn"
                onclick="deleteExpense(${index})">
                Delete
                </button>
            </td>
        </tr>`;
    });

    document.getElementById("total")
    .textContent = total;
}

function deleteExpense(index){

    expenses.splice(index,1);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    displayExpenses();
}