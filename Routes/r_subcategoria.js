const { Router } = require("express");

const {
  createSubCategoria,
  deleteSubCategoria,
  getProductsBySubcategoria,
  getSubCategorias,
  updateSubCategoria,
} = require("../Controllers/subcategoria");

//Init the router
const router = Router();

router
  .route("/subcategorias/:id")
  .put(updateSubCategoria)
  .delete(deleteSubCategoria);

router.route("/subcategorias").get(getSubCategorias).post(createSubCategoria);

router.route("/subcategorias/:id/productos").get(getProductsBySubcategoria);

module.exports = router;
