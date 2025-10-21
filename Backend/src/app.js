import express from "express"
const app = express()
import cors from "cors"

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials : true
}))

import { promptRouter } from "./routes/prompt.route.js"

app.use("/ai/code-review", promptRouter)

export default app