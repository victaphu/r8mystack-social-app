import mongoose from "mongoose";

const uri = process.env.DB_URI;

export function getMongoose() {
  mongoose.connect(uri)
}