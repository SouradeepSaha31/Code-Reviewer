import app from "./src/app.js"
import dotenv from "dotenv"
dotenv.config()

app.listen(process.env.PORT, (req, res) => {
    console.log(`app is running on port http://localhost:${process.env.PORT}`)
})