const path = require("path");
const router = require("express").Router();

const Books = require("./api/books");
const Google = require("./api/google");

// API Routes
router.use("/api/books", Books);
router.use("/api/google", Google);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
