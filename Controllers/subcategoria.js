const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSubCategoria = async (req, res, next) => {
  try {
    const newSubcategoria = await prisma.sUBCATEGORIA.create({
      data: {
        nombre: req.body.nombre,
        fk_categoria : parseInt(req.body.fk_categoria)
      },
    });
    res.status(201).json({
      data: {
        created: true,
        subcategoria: req.body,
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

const getSubCategorias = async (req, res, next) => {
  try {
    const subcategorias = await prisma.sUBCATEGORIA.findMany();
    res.status(200).json({
      data: {
        lenght: subcategorias.length,
        subcategorias
        },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: {
        error: err,
      },
    });
  }
};

const deleteSubCategoria = async (req, res, next) => {
  try {
    const subcategoria = await prisma.sUBCATEGORIA.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (subcategoria.length == 0) {
      res.status(404).json({
        data: {
          length: subcategoria.length,
          errorName: `Data not found with the id ${req.params.id}`,
        },
      });
    }

    res.status(200).json({
      deleted: true,
      subcategoria: req.params.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateSubCategoria = async (req, res, next) => {
  try {
    const subcategoria = await prisma.sUBCATEGORIA.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body
    });
    if (subcategoria.length == 0) {
      res.status(404).json({
        data: {
          length: 0,
          errorName: `Data not found with the id ${req.params.id}`,
        },
      });
    }
    res.status(200).json({
      updated: true,
      data: {
        name: req.body,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getProductsBySubcategoria = async (req, res, next) => {
  try {
    const sub = await prisma.pRODUCTO.findMany({
      where: {
        fk_subcategoria: parseInt(req.params.id),
      },
    });

    res.status(200).json({
      data: {
        length: sub.length,
        productos : sub,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).jspon({
      error: err,
    });
  }
};

module.exports = {
createSubCategoria,
deleteSubCategoria,
getProductsBySubcategoria,
getSubCategorias,
updateSubCategoria
};
