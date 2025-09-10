const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const allbook = await Book.find({});
    if (allbook?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of Book fetched successfully",
        data: allbook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Book is found in the Database/collection",
      });
    }
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! plz try again",
    });
  }
};
const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookID);
    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the given id is not present! Please try with some other Id ",
      });
    } else {
      res.status(200).json({
        success: true,
        data: bookDetailsById,
      });
    }
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! plz try again",
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! plz try again",
    });
  }
};
const updateBook = async (req, res) => {
    try{
        const updatedBookFormData = req.body;
        const getBookId = req.params.is;
        const updatedBook = await Book.findByIdAndUpdate(getBookId, updatedBookFormData, {
            new : true,
        } )
        if (!updatedBook) {
            res.status(404).json({
                success : false,
                message : 'Book is not found with this ID',
            })
        }else{
            res.status(200).json({
                success : true,
                message: 'Book updated successfully',
                data : updatedBook,
            })
        }
    }catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! plz try again",
    });
  }
};
const deleteBook = async (req, res) => {
    try{
        const getCurrentBookID = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
        if (!deletedBook) {
            res.status(404).json({
                success : false,
                message : 'Book is not found with this ID',
            })
        }else{
            res.status(200).json({
                success : true,
                data : deletedBook,
            })
        }
    }catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! plz try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
