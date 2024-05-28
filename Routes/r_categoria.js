const { Router } = require("express");
const {
  createCategoria,
  getCategorias,
  getCategoria,
  deleteCategoria,
  updateCategoria,
  getSubcategoriasByCategoria,
} = require("../Controllers/categoria");
const router = Router();


//Routes without id /categoria
router.route("/categorias").post(createCategoria).get(getCategorias);

//By id routes /categoria/:id
router
  .route("/categorias/:id")
  .get(getCategoria)
  .delete(deleteCategoria)
  .put(updateCategoria);

//Nest route /categorias/subcategorias
router.route("/categorias/:id/subcategorias").get(getSubcategoriasByCategoria);

module.exports = router;
