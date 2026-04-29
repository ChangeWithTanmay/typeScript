// Craete variables
let username: string = 'Tanmay12';
let price: number = 15.50;
let isLoading: boolean = true;


// Challenge-2: Create an array of users with name + email

let users: { name: string, email: string }[] = [
    { name: "John", email: "john@gmail.com" },
    { name: "Alice", email: "alice@gmail.com" },
];

// console.log(users)

function greetUser (name: string, age: number): string{
    return `Hello ${name}, Age: ${age}`
}

// console.log(greetUser("Tanmay", 22))

// Create Discount

function createDiscount (priciple: number, persentage: number): number{
    return priciple - (priciple*persentage/100)
}

// console.log(`Now price is: ${createDiscount(1200, 50)}`);

// product type with optional rating
type Product = {
    name: string,
    type: string,
    price: number,
    isAvilable: boolean,
    rating?: number
}

function printProduct( product: Product): void {
    console.log(`name: ${product.name}`)
    console.log(`type: ${product.type}`)
    console.log(`price: ${product.price}`)
    console.log(`Avilable: ${product.isAvilable}`)

    if(product?.rating !== undefined){
        console.log(`Rating: ${product.rating}`)
    }
}

const p1: Product = {
    name: "Laptop",
    type: "Electronics",
    price: 1200,
    isAvilable: true
};

printProduct(p1)