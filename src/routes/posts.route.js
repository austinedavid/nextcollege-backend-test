const express = require("express");
const router = express.Router();

const posts = [
  { id: 1, title: "React", desc: "introduction to react", creatorId: 1 },
  { id: 2, title: "Express", desc: "understanding express", creatorId: 2 },
  { id: 3, title: "Database", desc: "Introduction to mongodb", creatorId: 3 },
];

router.get("/posts", (req, res) => {
  return res.json(posts);
});

module.exports = router;
