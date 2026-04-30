const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredience: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredience: ["ginger", "tea leaves"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "Steel" };
smallCup = bigCup;
// console.log(smallCup)

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

// console.log(chaiBrew)

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaiCode",
  password: "1234",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  item: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (update: Partial<Chai>) => {
  console.log("updating chai with", update);
};

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});

// not require
type ChaiOrder = {
  name?: string;
  quantity?: number;
};

// Rquired use to change: not require type value/parameter to require parameter
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log("Order: ", order);
};

placeOrder({ name: "Tanmay", quantity: 1 });


// Pick
type Chaai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chaai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}


type ChaiNew = {
    name: string,
    price: number,
    isHot: boolean,
    secrectIngredients: string
};

type PublicChai = Omit<ChaiNew, "secrectIngredients">;

const newChai: PublicChai ={
    name: "Jeera Chai",
    price: 200,
    isHot: true,
    // secrectIngredients: "paper" // give error
}