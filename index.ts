class User {
    fName: string;
    lName: string;
    private email: string;
    private phone: string;
    age: string;
    constructor(fName: string, lName: string, email: string, phone: string, age: string) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
        this.age = age;
    }
    userIntro() {
        return `hi i'm ${this.lName} ${this.fName} and i'm ${this.age} years old`
    }
}
function printInput(arr: string[]): void {
    if (arr[0] != 'addToTableBtn' && arr[0] != 'resetAddToTableBtn') {
        document.getElementById('formToTable-form').innerHTML +=
            `<div class='inputElementContainer' id='${arr[0]}Div'></div>`
        document.getElementById(`${arr[0]}Div`).innerHTML +=
            `<label class='label' for='${arr[0]}' id='${arr[0]}Label'>${arr[1]}:</label>`
        document.getElementById(`${arr[0]}Label`).innerHTML +=
            `<span class='alert' id='${arr[0]}Alert'></span>`
        document.getElementById(`${arr[0]}Div`).innerHTML +=
            `<input class='input' name='${arr[0]}' id='${arr[0]}' type='${arr[2]}'>`
    }
    else {
        document.getElementById('formToTable-form').innerHTML +=
            `<button id='${arr[0]}' type="${arr[2]}">${arr[1]}</button>`;
    }
}
function addToTable(): void {
    let fName: string = (<HTMLInputElement>document.getElementById('firstNameInput')).value;
    let lName: string = (<HTMLInputElement>document.getElementById('lastNameInput')).value;
    let email: string = (<HTMLInputElement>document.getElementById('emailInput')).value;
    let phone: string = (<HTMLInputElement>document.getElementById('telInput')).value;
    let age: string = (<HTMLInputElement>document.getElementById('ageInput')).value;
    USERS.push(new User(fName, lName, email, phone, age));
    printRow('formToTable-Table', USERS[USERS.length - 1]);
}
function printRow(id: string, user: {}): void {
    let row: string = `<tr id='${user['fName']}'>`;
    for (const key in user) {
        if (Object.prototype.hasOwnProperty.call(user, key)) {
            row += `<td>${user[key]}</td>`;
        }
    }
    row += `</tr>`;
    document.getElementById(id).innerHTML += row;
}
const USER_TABLE_TITLE = new User('F.NAME', 'L.NAME', 'EMAIL', 'PHONE NUMBER', 'AGE');
const USERS: any[] = [USER_TABLE_TITLE];
const INPUTS_ATT_ARR: any[] = [['firstNameInput', 'FIRST NAME', 'text'], ['lastNameInput', 'LAST NAME', 'text'], ['emailInput', 'EMAIL ADRESS', 'email'], ['telInput', 'PHONE NUMBER', 'tel'], ['ageInput', 'AGE', 'number'], ['resetAddToTableBtn', 'reset', 'reset'], ['addToTableBtn', 'sign Up', 'submit']];
document.getElementById('body').innerHTML += "<form id= 'formToTable-form' onsubmit='return false'></form>";
document.getElementById('body').innerHTML += "<table id='formToTable-Table'></table>";
INPUTS_ATT_ARR.forEach(printInput);
printRow('formToTable-Table', USER_TABLE_TITLE);
document.getElementById('addToTableBtn').addEventListener('click', addToTable);