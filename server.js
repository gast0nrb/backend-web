//Third modules packages
const express = require("express");
require('dotenv').config()

//Own modules packages
const testConn = require("./DB/conn")
const r_categoria = require("./Routes/r_categoria")


const app = express();

//Dev variables

const port = process.env.PORT || 8000;

//Test database connection
testConn();


//Middlewares
app.use(express.json())


//Routes
app.use("/api/v1", r_categoria);


app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`))
