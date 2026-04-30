type ChaiOrder = {
    type: string; 
    suger: number; 
    strong: boolean
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder){
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}


/*
Erro code:

type CupSize = "small" | "large";

class Chai implements CupSize{

}
*/

// Use interface
interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}

// type Responce = {ok: true} | {ok: false}
// class myRes implements Responce{
//     ok: boolean = true
// }

interface Responce  {
    ok: true | false
}
class myRes implements Responce{
    ok: boolean = true
}

// Union
// Literal types
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t)
}

// Intersection
type BaseChai = {
    teaLeaves: number
}
type Extra = {masala: number}

type MasalaChai1 = BaseChai & Extra

const cup: MasalaChai1 ={
    teaLeaves: 2,
    masala: 1
}

// optional
type User = {
    username: string,
    bio?: string
}

const u1: User = {username: "Tanmay"}
const u2: User = {username: "Shreyashi", bio: "hitesh.ai"}

type Config = {
    readonly appName: string;
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "ChaiCode" // It is not allow, reasonly use only one time declear