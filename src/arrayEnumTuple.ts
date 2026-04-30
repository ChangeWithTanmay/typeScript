// Array Decleration
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 25},
]

const cities: readonly string[] = ["Dilhi", "Jaipur"];
// cities.push("Pune")

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

// Tuples
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"] Not allow

let userInfo: [string, number,boolean?]
userInfo= ["hitesh", 100]
userInfo= ["hitesh", 100, true]

const location: readonly [number, number] = [28.66, 32.22]

const chaiItems: [name: string, price: number] = ["Masala", 25]

// Enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING =100,
    SERVED, // 101
    CENCELLED // 102
}

enum ChaiType {
    MASALA =  "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`)
}
makeChai(ChaiType.GINGER) // It is allow
// makeChai("masala") Not allow

enum RendomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugers {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugers.HIGH;

let t: [string, number] = ["chai", 10]
t.push("extra")