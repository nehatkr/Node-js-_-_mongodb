const express = require('express')

const {  getAllMenus,
  getSingleMenu,
  addNewMenu,
  updateMenu,
  deleteMenu,} = require('../controllers/menu-controller')

  const route = express.Router();
  
  // all routes that are reslated to menu only
route.get("/get", getAllMenus);
route.get("/get/:id", getSingleMenu);
route.post("/add", addNewMenu);
route.put("/update/:id", updateMenu);
route.delete("/delete/:id", deleteMenu);


module.exports = route;