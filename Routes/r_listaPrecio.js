//Third packages or modules
const { Router } = require("express");

//Own modules
const {
  createListPrecio,
  deleteLista,
  getListas,
  updateListaPrecio,
} = require("../Controllers/listaPrecios");

//init
const router = Router();

//Doesn't require id
router.route("/lprecios").get(getListas).post(createListPrecio);

//Requires id
router.route("/lprecios/:id").put(updateListaPrecio).delete(deleteLista);

//Full info of prices

module.exports = router;