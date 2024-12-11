import { Hono } from "hono";
import { Counter } from "./components/Button";
import {BodyClass} from "./components/styles";
import { Style } from "hono/css";
import "./input.css"
import "./output.css"

const app = new Hono()

app.get("/",(c) => {
return c.html(
  <html>
    <head>
      <Style/>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class={BodyClass}>
    <h1 class="text-6xl font-bold sm:text-2xl ">
    Hello world!
    
    </h1>
      <Counter/>
    </body>
  </html>
)
})
export default app