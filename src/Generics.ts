function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavor: "Ginger"})

function pair<A, B>(a: A, b:B): [A, B]{
    return [a, b]
}

// console.log(pair("12", "45"))
// console.log(pair(12, 45))

// Generic Interface

interface Box<T>{
    content: T
}

const numberBox: Box<number> = {
    content: 10
}

const numberBox1: Box<string> = {
    content: "Masala"
}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}