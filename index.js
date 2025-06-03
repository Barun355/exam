import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: "*"
}
))
app.use(express.json())
app.use(cookieParser())


import hunt2025 from "./routers/Hunt2025.js"

app.use("/api/2025", hunt2025);

app.listen(8000, () => {
    console.log("server running on https://localhost:8000")
})