const bookModel = require("../models/book");



const addNewBook = async (req, res) => {
  try {
    const newBookFromData = req.body;
    const newlyCreatedBook = await bookModel.create(newBookFromData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating book",
      error: error.message,
    });
  }
};




const getSingleBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookDetailsById = await bookModel.findById(bookId);
    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message:
          "Book With The Current ID Is Not Present Plsease Try With Different Id",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book Details Fetched Successfully",
      data: bookDetailsById,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching books",
      error: error.message,
    });
  }
};




const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookModel.find();
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "All Books Fetched Successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Books Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching books",
      error: error.message,
    });
  }
};




const updateBook = async (req, res) => {
  try {
    const updatedBookFromData = req.body;
    const updatedBook = await bookModel.findByIdAndUpdate(
      req.params.id,
      updatedBookFromData,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error: Something Went Wrong",
      error: error.message,
    });
  }
};




const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deleteBook = await bookModel.findByIdAndDelete(getCurrentBookID);

    if (!deleteBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deleteBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while deleting book",
      error: error.message,
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
