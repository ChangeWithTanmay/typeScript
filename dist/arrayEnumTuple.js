// Array Decleration
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];
const cities = ["Dilhi", "Jaipur"];
// cities.push("Pune")
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
// Tuples
let chaiTuple;
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"] Not allow
let userInfo;
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];
const location = [28.66, 32.22];
const chaiItems = ["Masala", 25];
// Enums
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CENCELLED"] = 102] = "CENCELLED"; // 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER); // It is allow
// makeChai("masala") Not allow
var RendomEnum;
(function (RendomEnum) {
    RendomEnum[RendomEnum["ID"] = 1] = "ID";
    RendomEnum["NAME"] = "chai";
})(RendomEnum || (RendomEnum = {}));
var Sugers;
(function (Sugers) {
    Sugers[Sugers["LOW"] = 1] = "LOW";
    Sugers[Sugers["MEDIUM"] = 2] = "MEDIUM";
    Sugers[Sugers["HIGH"] = 3] = "HIGH";
})(Sugers || (Sugers = {}));
const s = Sugers.HIGH;
let t = ["chai", 10];
t.push("extra");
export {};
//# sourceMappingURL=arrayEnumTuple.js.map