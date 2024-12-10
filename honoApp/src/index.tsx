import { Hono } from "hono";
import Counter from "./components/Button";
const app = new Hono()

const View = () =>{
  return(
    <html>
    <body>
      <h1>No ando piola xd</h1>
      <Counter/>
    </body>
    </html>
  )
}

app.get('/', (c) => {
  return c.html(<View/>)
})

export default app