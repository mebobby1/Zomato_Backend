import express from "express";
import userRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/err.js";
import { config } from "dotenv";

export const app = express();

config({
    path:"./data/config.env"
})

app.use(express.json())
app.use(cookieParser());


app.use("/api/v1",userRouter)

app.use(ErrorMiddleware);


