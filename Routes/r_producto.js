const { Router } = require("express");
const router = Router();

const {
  createProducto,
  deleteProducto,
  getProducto,
  updateProducto,
  getProductos,
} = require("../Controllers/producto");

router.route("/productos").get(getProductos).post(createProducto);

router
  .route("/productos/:id")
  .get(getProducto)
  .put(updateProducto)
  .delete(deleteProducto);
 
  

module.exports = router;
