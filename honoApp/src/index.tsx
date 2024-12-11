import { Hono } from "hono";
import { Div } from "./components/div";
import {BodyClass} from "./components/styles";
import { Style } from "hono/css";
import "./input.css"
import "./output.css"

const app = new Hono()

app.get("/",(c) => {
return c.html(
  <html>
    <head>
      <title>Crazy Words</title>
      <Style/>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class={BodyClass}>
    <h1 class="text-6xl text-orange-300 m-3 font-bold sm:text-2xl">API Crazy Words!</h1>
      <Div/>
    </body>
  </html>
)
})
export default app