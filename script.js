let expense = 0;

let heading = document.querySelector("#heading");
heading.textContent = `Total Amount: ${expense}`;

let table = document.querySelector("#expenseTable");


let expenseList =[];   // Array of Items: Desc and Amount

function totalExpense(){
    let textAmount = document.querySelector("#input");
    let textDesc = document.querySelector("#itemDesc");

    let amountValue= textAmount.value;
    let itemDesc = textDesc.value;


    let expenseObject ={};  // Object of Items: Desc and Amount

    expenseObject.amount = amountValue;
    expenseObject.desc = itemDesc;
    expenseObject.moment= new Date();
    // expenseObject.moment= currentMoment;

    expenseList.push(expenseObject);  // Pushing Each Object to Array

    const value = parseInt(amountValue, 10)

    expense = expense + value;    

    let amountText= `Total Amount: ${expense}`;  // Total Amount Rendering from DOM

    heading.textContent = amountText;


//Create a Table from Expense Array

let tableHTML = expenseList.map((expense)=>{
        return`
        <li class="list-group-item d-flex justify-content-between">
							<div class="d-flex flex-column">
                            ${expense.desc}
								<small class="text-muted"> ${expense.moment.toLocaleDateString("en-US" ,{year:"numeric", 
                                month:"long", 
                                day:"numeric"})}</small>
							</div>
							<div>
								<span class="px-5">
                                ${expense.amount}
								</span>
								<button
                                    type="button"
                                    class="btn btn-outline-danger btn-sm"
                                    onclick="deleteItem(${expense.moment.valueOf()})">
                                <i class="fas fa-trash-alt"></i>
								</button>
							</div>
						</li>
        `
    })

    let finalTable = tableHTML.join("");

    table.innerHTML = finalTable;

}

function deleteItem(dateValue){
    const newArr=[];

    // console.log("Delete Item is called with Value: " + dateValue);

     for(let i=0; i<expenseList.length; i++){

        if(expenseList[i].moment.valueOf() !== dateValue){
                 newArr.push(expenseList[i]);
        }
     }
     let tableHTML = newArr.map((expense)=>{
        return`
        <li class="list-group-item d-flex justify-content-between">
							<div class="d-flex flex-column">
                            ${expense.desc}
								<small class="text-muted"> ${expense.moment.toLocaleDateString("en-US" ,{year:"numeric", 
                                month:"long", 
                                day:"numeric"})}</small>
							</div>
							<div>
								<span class="px-5">
                                ${expense.amount}
								</span>
								<button
                                    type="button"
                                    class="btn btn-outline-danger btn-sm"
                                    onclick="deleteItem(${expense.moment.valueOf()})">
                                <i class="fas fa-trash-alt"></i>
								</button>
							</div>
						</li>
        `
    })
    let finalTable = tableHTML.join("");

    table.innerHTML = finalTable;
    //  console.log(newArr)

 }

let c = document.querySelector("#btn");

c.addEventListener("click",totalExpense, false);