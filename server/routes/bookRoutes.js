const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBooks,
  getBookById,
} = require("../controllers/bookController");

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBooks);

module.exports = router;
