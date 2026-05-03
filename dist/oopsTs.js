/*
class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number){
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("masala", 1)
masalaChai.flavour = "masala"
*/
class Chai {
    flavour = "Masala";
    secretIngredience = "Cardamon";
    reveal() {
        return this.secretIngredience;
    }
}
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
class Walet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    // getter to value get
    get sugar() {
        return this._sugar;
    }
    // setter to value set
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const c = new ModernChai();
// c.sugar = 3 smothly run it.
// c.sugar = 6 send error 
// console.log(c.sugar)
class Ekchai {
    flavour;
    static shopName = "Chaicode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
// console.log(Ekchai.shopName)
class Drink {
}
// Extends class write weys.
// #1
class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}
class Heater {
    heat() {
    }
}
// #2
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oopsTs.js.map