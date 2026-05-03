import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { ChaiCard } from './component/ChaiCard';
import { Counter } from './component/Counter';
import { ChaiList } from './component/ChaiList';
import { OrderForm } from './component/OrderForm';
const menu = [
    { id: 1, name: "Masala", price: 25 },
    { id: 2, name: "Ginger", price: 50 },
    { id: 3, name: "Lemon", price: 15 },
    { id: 4, name: "Milk", price: 20 },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("h1", { children: "Vite + React" }), _jsx(ChaiCard, { name: "Head Phones", price: 5000, isSpecial: true }), _jsx(ChaiCard, { name: "iPhone", price: 75000 })] }), _jsx("div", { children: _jsx(Counter, {}) }), _jsx("div", { children: _jsx(ChaiList, { items: menu }) }), _jsx("div", { children: _jsx(OrderForm, { onSubmit: (order) => {
                        console.log("Placed", order.name, order.cups);
                    } }) })] }));
}
export default App;
//# sourceMappingURL=App.js.map