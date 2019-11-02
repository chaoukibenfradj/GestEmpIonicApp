function docInit() {
    //Init used vars
    window.totalSalary = 0;
    window.nbItems = 0;
    document.getElementById('totalEmp').innerText = window.nbItems;
    document.getElementById('totalSalary').innerText = window.totalSalary;
}

function addItem() {
    //Append new element to the list
    const ionItem = document.createElement('ion-item');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const salary = document.getElementById('salary').value;
    ionItem.innerText = `Nom : ${name} - Age : ${age} - Salaire : ${salary}`;
    document.getElementById('listEmp').appendChild(ionItem);
    window.nbItems += 1;
    window.totalSalary += Number(salary);
    document.getElementById('totalEmp').innerText = window.nbItems;
    document.getElementById('totalSalary').innerText = window.totalSalary;
}

function resetForm() {
    //Reset form elements value
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('salary').value = "";
}