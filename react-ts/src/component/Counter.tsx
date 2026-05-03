import { useState } from "react"



export function Counter() {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <p>Cup orderded: {count}</p>
            <button
                onClick={() => setCount((c) => c + 1)}
            >Order one more</button>
        </div>
    )
}