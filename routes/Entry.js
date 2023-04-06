import express from "express";
import { register } from "./../controllers/entry.js";

const router = express.Router();

router.post("/new", register);
export default router;
