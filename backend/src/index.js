import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import { connectDB } from './lib/db.js'
import cookieParser from "cookie-parser"

dotenv.config();
const app = express();


app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
    connectDB();
})