import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
export function OrderForm({ onSubmit }) {
    const [name, setName] = useState("Masala");
    const [cups, setCups] = useState(1);
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ name, cups });
    }
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { children: "Chai Name" }), _jsx("input", { value: name, onChange: (e) => setName(e.target.value) }), _jsx("label", { children: "Cups " }), _jsx("input", { value: cups, onChange: (e) => setCups(Number(e.target.value)) }), _jsx("button", { type: 'submit', children: "Place Order" })] }));
}
//# sourceMappingURL=OrderForm.js.map