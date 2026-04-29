let nums: number[] = [1, 2, 3];
// console.log(nums)

let names: string[] = ["apple", "banana", "car"]
// console.log(names)

let trues: boolean[] = [true, false, true]
// console.log(trues)

let anys: any[] = ["apple", true, 1, "banana"]
// console.log(anys)

let tuple: [string, number] = ["age", 20]

let user: { name: string, age: number } = {
    name: "John",
    age: 22
}
// console.log(user)


let user2: { name: string, age: number, value: any } = {

    name: "John",
    age: 22,
    value: {
        name: "John",
        age: 22
    }
}

// console.log(user2)

let user3: { name: string, age: number, value: object } = {

    name: "John",
    age: 22,
    value: {
        name: "John",
        age: 22
    }
}

// console.log(user3)

let user4: { name: string, age: number, value: string[], marks: number[], present: boolean[], default: any } = {

    name: "John",
    age: 22,
    value: ["apple", "banana", "tomato"],
    marks: [14, 50, 20],
    present: [true, false, false],
    default: []
}

// console.log(user4)


function add(a: number, b:number): number{
    return a+b;
}