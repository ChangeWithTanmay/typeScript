let responce: any = "42";

// Forcefull type assertion
let numericLength: number = (responce as string).length;

type Book = {
  name: string;
};

let bookString = `{"name":"Who move my cheese"}`;
// Not sure. It is 100% object
let bookObject1 = JSON.parse(bookString);
console.log(bookObject1);

// It is no doubt, it is 100 percent Object.
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

// Type Asserson
const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase() it is error

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// Tey catch block
try {

} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}


const data: unknown = "chai aur code"
const strData: string = data as string

type Role = "admin" | "user" | "superAdmin"

function redirectBaseOnRole(role:Role):void{
    if(role === "admin"){
        console.log("redirect to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("redirect to user dashboard")
        return
    }
    role;
}

function neverReturn(): never{
    while(true){}
}