const Menu = require("../models/menu");

const getAllMenus = async (req, res) => {
  try {
    const AllMenu = await Menu.find({});
    if (AllMenu.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of item fetched successfully",
        data: AllMenu,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No item is found in the Database/collection",
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
const getSingleMenu = async (req, res) => {
    try {
      const getCurrentMenuId = req.params.id;
      const MenuDetailsById = await Menu.findById(getCurrentMenuId);
      if (!MenuDetailsById) {
        return res.status(404).json({
          success: false,
          message:
            "Book with the given id is not present! Please try with some other Id ",
        });
      } else {
        res.status(200).json({
          success: true,
          data: MenuDetailsById,
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
const addNewMenu = async (req, res) => {
   try {
      const newMenuFromData = req.body;
      const newlyCreatedMenu = await Menu.create(newMenuFromData);
      if (newMenuFromData) {
        res.status(201).json({
          success: true,
          message: "Item added successfully",
          data: newlyCreatedMenu,
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
const updateMenu = async (req, res) => {
      try{
          const updatedMenuFromData = req.body;
          const getMenuId = req.params.is;
          const updatedMenu = await Menu.findByIdAndUpdate(getMenuId, updatedMenuFromData, {
              new : true,
          } )
          if (!updatedMenu) {
              res.status(404).json({
                  success : false,
                  message : 'Item is not found with this ID',
              })
          }else{
              res.status(200).json({
                  success : true,
                  message: 'Menu updated successfully',
                  data : updatedMenu,
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
const deleteMenu = async (req, res) => {
   try{
          const getCurrentMenuId = req.params.id;
          const deletedMenu = await Menu.findByIdAndDelete(getCurrentMenuId);
          if (!deletedMenu) {
              res.status(404).json({
                  success : false,
                  message : 'Item is not found with this ID',
              })
          }else{
              res.status(200).json({
                  success : true,
                  data : deletedMenu,
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
  getAllMenus,
  getSingleMenu,
  addNewMenu,
  updateMenu,
  deleteMenu,
};
