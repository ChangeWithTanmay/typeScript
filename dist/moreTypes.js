let responce = "42";
// Forcefull type assertion
let numericLength = responce.length;
let bookString = `{"name":"Who move my cheese"}`;
// Not sure. It is 100% object
let bookObject1 = JSON.parse(bookString);
console.log(bookObject1);
// It is no doubt, it is 100 percent Object.
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
// Type Asserson
const inputElement = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase() it is error
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
// Tey catch block
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai aur code";
const strData = data;
function redirectBaseOnRole(role) {
    if (role === "admin") {
        console.log("redirect to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("redirect to user dashboard");
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
export {};
//# sourceMappingURL=moreTypes.js.map