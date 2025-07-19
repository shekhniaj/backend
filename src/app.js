import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

// Allowing request from frontend URL
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// Allowing to accept json
app.use(express.json({limit: "16kb"}))
// to make url readable
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())


export { app }