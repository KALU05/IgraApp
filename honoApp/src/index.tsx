import { Hono } from "hono";
import {Counter} from "./components/Button";
import { css, cx, keyframes, Style } from 'hono/css'
const app = new Hono()


app.get('/', (c) => {
  const BodyClass = css`
  background-color: orange;
  color: white;
  padding: 1rem;
`
/*se debe usar las comilla invertidas y la palabra reservada css para aplicar estilos ademas de pone en el head
la palabra reservada <Style/>.El primer paso es poner -->import { css, cx, keyframes, Style } from 'hono/css'
*/
  return c.html(    
    <html>
      <head>
        <Style/>
      </head>
    <body class={BodyClass}>
      <h1>De a poquito :v</h1>
      <Counter/>
    </body>
    </html>)
})

export default app