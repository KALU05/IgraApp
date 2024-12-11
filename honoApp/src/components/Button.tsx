import { useState } from 'hono/jsx'
import { buttonStyle } from './styles'
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button class={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export {Counter}
