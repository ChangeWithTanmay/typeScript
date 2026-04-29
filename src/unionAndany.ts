// Union: two and more datetype is accepted, but datatype must be declear. And when enter two or more value must be require or simbol "|"

// basic
let subs: number | string = '10'

// Production level

// Cusstom datatype create.
let apiRequistStatus: 'pending' | 'success' | "error" = "pending";

// apiRequistStatus = "tanmay"; It is not allow, only access
apiRequistStatus = 'success'
apiRequistStatus = 'error'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'window'


// any: I don't care, which value is come or not.
const orders = ['12', '20', '28','42']

let currentorder: string | undefined;

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break;
    }
    currentorder = '11'
}

console.log(currentorder)