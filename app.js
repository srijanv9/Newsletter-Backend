import express from "express";
import { config } from "dotenv";
import entryRouter from "./routes/Entry.js";
export const app = express();
//using middleware
app.use(express.json());

//using routes
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/task", taskRouter);
app.use("/api", entryRouter);

config({
  path: "./data/config.env",
});

app.get("/", (req, res) => {
  res.send("Nice working");
});
