import express from "express";
import { config } from "dotenv";
import entryRouter from "./routes/Entry.js";
import cors from "cors";

export const app = express();
//using middleware
app.use(express.json());

//using routes
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/task", taskRouter);
app.use("/api", entryRouter);
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
config({
  path: "./data/config.env",
});

app.get("/", (req, res) => {
  res.send("Nice working");
});
