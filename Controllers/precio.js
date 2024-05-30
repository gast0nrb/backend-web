const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPrice = async (req, res, next) => {
  try {
    const newPrice = await prisma.pRECIO.create({
      data: req.body,
    });
    res.status(201).json({
      data: {
        created: true,
        precio: req.body,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: {
        created: false,
        error: err,
      },
    });
  }
};

const deleteCategoria = async (req, res, next) => {
  try {
    const categoria = await prisma.cATEGORIA.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (categoria.length == 0) {
      res.status(404).json({
        data: {
          length: categoria.length,
          errorName: `Data not found with the id ${req.params.id}`,
        },
      });
    }

    res.status(200).json({
      deleted: true,
      categoria: req.params.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

/**
 * Expect 2 parameters 
 * req.query
 * idprod = id del producto
 * idlist = id de la lista
 */
const updatePrice = async (req, res, next) => {
  try {
    console.log(req.query)
    const price = await prisma.pRECIO.update({
      where : {
      },
      data : req.body
    })
    res.status(200).json({
      updated: true,
      data: req.body
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createPrice,
  updatePrice,
};
