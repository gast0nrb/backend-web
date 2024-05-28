const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCategoria = async (req, res, next) => {
  try {
    const newCategoria = await prisma.cATEGORIA.create({
      data: {
        nombre: req.body.nombre,
      },
    });
    res.status(201).json({
      data: {
        created: true,
        categoria: req.body,
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

const getCategorias = async (req, res, next) => {
  try {
    const categorias = await prisma.cATEGORIA.findMany();
    res.status(200).json({
      data: {
        lenght: categorias.length,
        categorias: categorias,
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

const getCategoria = async (req, res, next) => {
  try {
    const categorias = await prisma.cATEGORIA.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (categorias.length == 0) {
      res.status(404).json({
        data: {
          length: categorias.length,
          errorName: `Data not founded with the id ${req.params.id}`,
        },
      });
    }
    res.status(200).json({
      data: {
        length: categorias.length,
        categorias,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
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

const updateCategoria = async (req, res, next) => {
  try {
    const categoria = await prisma.cATEGORIA.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        nombre: req.body.nombre,
      },
    });
    if (categoria.length == 0) {
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
        name: req.body.nombre,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getSubcategoriasByCategoria = async (req, res, next) => {
  try {
    const sub = await prisma.sUBCATEGORIA.findMany({
      where: {
        fk_categoria: parseInt(req.params.id),
      },
    });

    res.status(200).json({
      data: {
        length: sub.length,
        subcategoria: sub,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createCategoria,
  getCategorias,
  getCategoria,
  deleteCategoria,
  updateCategoria,
  getSubcategoriasByCategoria
};
