import { jsx as _jsx } from "react/jsx-runtime";
import { ChaiCard } from "./ChaiCard";
export function ChaiList({ items }) {
    return (_jsx("div", { children: items.map((chai) => (_jsx(ChaiCard, { name: chai.name, price: chai.price, isSpecial: chai.price > 3 }, chai.id))) }));
}
//# sourceMappingURL=ChaiList.js.map