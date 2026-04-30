function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);

}

makeChai("Masala Chai", 2);

function makeOrder(order: string){
    if(!order) return null
    return order
}

function logChai(): void{
    console.log("Chai is ready");
}

function orderChai1(type?: string){

}

function orderChai(type:string = "Masala"){

}

function createChai(order:{
    type: string;
    sugar:number;
    size: "small"|"large"
}): number {
    return 4
}