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
let tea;
tea = {
    name: "ginger Tea",
    price: 25,
    isHot: true,
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredience: ["ginger", "tea leaves"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "Steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u = {
    username: "chaiCode",
    password: "1234",
};
const updateChai = (update) => {
    console.log("updating chai with", update);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
// Rquired use to change: not require type value/parameter to require parameter
const placeOrder = (order) => {
    console.log("Order: ", order);
};
placeOrder({ name: "Tanmay", quantity: 1 });
const chaiInfo = {
    name: "Lemon Tea",
    price: 30
};
const newChai = {
    name: "Jeera Chai",
    price: 200,
    isHot: true,
    // secrectIngredients: "paper" // give error
};
export {};
//# sourceMappingURL=objectTs.js.map