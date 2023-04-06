import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  number: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Entry = mongoose.model("Entry", schema);
