interface Chai{
    flavor: string,
    price: number
    milk?: boolean
}

const masala: Chai = {
    flavor:  "Masala",
    price:  20
}

interface Shop{
    readonly id:number,
    name: string
}

const s: Shop = {id: 1, name: "Chaicode caffe"}


interface DiscountCalculator{
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine =  {
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop")
    },
}

interface ChaiRatings {
    [flavor: string]: number
}

const ratings: ChaiRatings ={
    masala: 1.5,
    ginger: 2.5
}

// 

interface User {
    name: string
}

interface User{
    age: number
}

const u: User = {
    name: "Tanmay",
    age: 21
}

// interface extends
interface A {a: string}
interface B {b: string}

interface C extends A, B{}