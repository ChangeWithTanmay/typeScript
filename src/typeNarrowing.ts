function getChai(kind: string | number) {
    if(typeof(kind) === 'string'){
        return `Making ${kind} chai`
    }
    return `Chai order: ${kind}`
}

// Truthiness

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`;
}

function orderSize(size: "medium" | "small" | 'large' | number){
    if(size ==="small"){
        return `small cutting chai`
    }
    if(size =="medium" || size === "large"){
        return `make extra chai`
    }

    return `chai order #${size}`
}

class KulhadChai{
    surve(){
        return `Servign kuller chai`
    }
}

class CuttingChai{
    surve(){
        return `Servign Cutting chai`
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.surve()
    }
}

type ChaiOrder = {
    type: string,
    suger: number
}


// gard making return true false
function isChaiOrder(obj: any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.suger}`
    }
    return `Serving custom chai: ${item}`
}

// here 'type' is a keyword
type MasalaChai = {type: "masala"; spicelevel: number}
type GingerChai = {type: "ginger"; amount: number}
type ElachiChai = {type: "elachi"; aroma: number}

type Chai = MasalaChai|GingerChai|ElachiChai

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elachi":
            return `ElachiChai Chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        return `Masala Chai`
    }
}

// function isStringArray(arr: unknown): arr is string[]{

// }