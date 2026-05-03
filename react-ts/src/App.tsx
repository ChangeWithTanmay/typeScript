import './App.css'
import { ChaiCard } from './component/ChaiCard'
import { Counter } from './component/Counter'

import type { Chai } from './types'
import { ChaiList } from './component/ChaiList'
import { OrderForm } from './component/OrderForm'
import { Card } from './component/Card'

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 25 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 15 },
  { id: 4, name: "Milk", price: 20 },
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard
          name="Head Phones"
          price={5000}
          isSpecial={true}
        />
        <ChaiCard
          name="iPhone"
          price={75000}
        // isSpecial={true}
        />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.cups)
          }}
        />
      </div>

      <div>
        <Card
          title='Hello chai and typeScript'
          footer={<button onClick={() => (window.open("https://youtu.be/moz7Dx9pK3I?si=JHYf0Ch7Fiy6gvEA", "_blank", "noopener,noreferrer"))}>Click</button>}
        />
      </div>
    </>
  )
}

export default App
