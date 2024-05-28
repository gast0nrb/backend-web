//Third modules packages
const express = require("express");
require('dotenv').config()

//Own modules packages
const testConn = require("./DB/conn")
const r_categoria = require("./Routes/r_categoria")
const r_subcategoria = require("./Routes/r_subcategoria")
const r_listaPrecio = require("./Routes/r_listaPrecio")

const app = express();

//Dev variables

const port = process.env.PORT || 8000;

//Test database connection
testConn();


//Middlewares
app.use(express.json())


//Routes
app.use("/api/v1", r_categoria);
app.use("/api/v1", r_subcategoria);
app.use("/api/v1", r_listaPrecio);


app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`))
