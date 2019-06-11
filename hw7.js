window.onload = async () => {
    let employeeData = await getData('http://dummy.restapiexample.com/api/v1/employees');
    await showInfo(employeeData);
    showSalary(employeeData);
}

let getData = async () => {
    const response = await fetch(`http://dummy.restapiexample.com/api/v1/employees`);
    const data = await response.json();
    return data;
}

let showInfo = (data) => {
    let employeeName = document.getElementById("employee_info");
    for (i = 0; i < data.length; i++) {
        employeeName.innerHTML += `<li id ="employee-${i}">${data[i].employee_name}</li>`;
    }

}

// let goSalary = (data) => {
    
//     for (i = 0; i < data.length; i++) {
//         console.log(data[i].employee_salary)
//         let employee = document.getElementById(`employee-${i}`);
//         let employee_salary = document.getElementById('employee_salary');

//         employee.addEventListener("click", () => {
//             console.log(data[i]);
//             employee_salary.innerHTML = "";
//             let employeeinfo =`<span>Salary : ${data[i].employee_salary}</span>`;
//             employee_salary.innerHTML += employeeinfo;

//         });
//     }
// }
