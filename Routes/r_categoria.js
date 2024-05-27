const {Router} = require("express");
const {createCategoria,getCategorias, getCategoria} = require("../Controllers/categoria")
const router = Router()

router.route("/categorias")
.post(createCategoria)
.get(getCategorias)

router.route("/categorias/:id").get(getCategoria)



module.exports = router;