const {Router} = require("express")


//imports propios
const {createPrice, updatePrice} = require("../Controllers/precio")


//Instancia 
const router = Router()



router.route("/precio/producto").post(createPrice)
.put(updatePrice)


module.exports = router;
