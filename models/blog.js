const mongoose = require("mongoose");
const Postschema = new mongoose.Schema({
  imagename: { type: String },
  author: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number },
  Date: { type: String },
});
const Post = mongoose.model("Postinfo", Postschema);
module.exports = Post;
