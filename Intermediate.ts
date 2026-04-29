type User = {
    name: string,
    age: number
}

// Union Types
let id: number | string;

// Optional + Default
type Product = {
    name: string,
    price: number,
    discount?: number
}

interface Rectangle {
    height: number,
    width: number
}

interface colorRectangle extends Rectangle{
    color: string
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

const yellowRectangle : colorRectangle ={
    height: 20,
    width: 20,
    color: "Red"
}

enum Role {
    ADMIN,
    USER,
    GUEST
}

function identityString(value: string): string {
    return value;
}

function identityNumber(value: number): number{
    return value
}

function identity<T>(value: T): T{
    return value
}

console.log(identity<string>("Tanmay"))

console.log(identity<number>(12))

function pair<A, B>(a: A, b:B): [A, B]{
    return [a, b]
}

console.log(pair<string, number>("Tanmay", 22))

function getLength<T extends {length: number}>(x:T): number{
    return x.length
} 

console.log(getLength<string>("Tanmay"))
console.log(getLength<number[]>([1, 2, 3, 4]))

function getFirst1(arr: number[]): number | undefined {
    return arr[0];
}

console.log(getFirst1([45, 46])); // 45

function getFirst<T>(arr: T[]): T | undefined {
    return arr[0]
}



console.log(getFirst<string>(["Ta", "pa", "Cca", "Bcc"]))