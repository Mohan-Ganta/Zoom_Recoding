import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true, minlength: 8 },
  calls: {type:[String]},
});

export default new model("User", userSchema);
