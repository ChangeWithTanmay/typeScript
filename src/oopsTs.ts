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

class Chai{
    public flavour: string = "Masala"

    private secretIngredience = "Cardamon"

    reveal(){
        return this.secretIngredience
    }

    
}

class Shop{
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

class Cup{
    readonly capacity:number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}


class ModernChai {
    private _sugar = 2

    // getter to value get
    get sugar(){
        return this._sugar
    }
    // setter to value set
    set sugar(value: number){
        if(value>5) throw new Error("Too sweet")
            this._sugar = value
    }
}

const c = new ModernChai()
// c.sugar = 3 smothly run it.
// c.sugar = 6 send error 
// console.log(c.sugar)

class Ekchai{
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}
// console.log(Ekchai.shopName)

abstract class Drink{
    abstract make(): void
}

// Extends class write weys.
// #1
class MyChai extends Drink{
    make(): void {
        console.log("Brewing chai")
    }
}

class Heater{
    heat(){

    }
}
// #2
class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}