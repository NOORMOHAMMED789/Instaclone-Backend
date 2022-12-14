const express = require("express");
const router = express.Router();
const Post = require("../models/blog");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title,
    content,
  });

  post.save();
});

router.route("/postdata").get((req, res) => {
  Post.find().then((founddata) => res.json(founddata));
});

module.exports = router;
