import express from "express";
import userRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/err.js";
import { config } from "dotenv";
import cors from "cors";
export const app = express();

config({
    path:"./data/config.env"
})

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST","PUT", "DELETE"],
    credentials: true,
}))
console.log("FRONTEND_URL:",process.env.FRONTEND_URL)
app.use("/api/v1",userRouter)

app.use(ErrorMiddleware);


