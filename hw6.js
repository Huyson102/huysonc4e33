
//E1:
let demo = document.getElementById("demo-a");
let btnDemo = document.getElementById("btn-demo");
let inputDemo = document.getElementById("demo-input");

btnDemo.addEventListener("click",()=>{
    inputDemo.value += href;
})

//E2:
let solor = document.getElementById("solor");
let btnDelete = document.getElementById("btnDelete");

btnDelete.addEventListener("click", () => {
    solor[solor.selectedIndex].remove();
})

//E3:
let table = document.getElementById("table");
let Input = document.getElementById("input");

Input.addEventListener("click", () => {
    let row = Number(prompt("Input Row Number "));
    let colu = Number(prompt("Input Colume Number "));
    let con = prompt("Input new ");

    table.rows[row-1].cells[colu-1].innerHTML = con;
})


