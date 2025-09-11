require('dotenv').config()
const express = require('express');
const menuRoutes = require('./routes/menu-routes');
const connectToDB = require('./database/db')

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB;
app.use(express.json());
app.use('/api/menu', menuRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on the PORT: ${PORT}`);  
})

