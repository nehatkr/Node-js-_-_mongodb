const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");
// create express routes
const route = express.Router();

// all routes that are reslated to book only
route.get("/get", getAllBooks);
route.get("/get/:id", getSingleBookById);
route.post("/add", addNewBook);
route.put("/update/:id", updateBook);
route.delete("/delete/:id", deleteBook);


module.exports = route;