function getChai(kind) {
    if (typeof (kind) === 'string') {
        return `Making ${kind} chai`;
    }
    return `Chai order: ${kind}`;
}
// Truthiness
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderSize(size) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size == "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
class KulhadChai {
    surve() {
        return `Servign kuller chai`;
    }
}
class CuttingChai {
    surve() {
        return `Servign Cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.surve();
    }
}
// gard making return true false
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.suger}`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elachi":
            return `ElachiChai Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        return `Masala Chai`;
    }
}
export {};
// function isStringArray(arr: unknown): arr is string[]{
// }
//# sourceMappingURL=typeNarrowing.js.map