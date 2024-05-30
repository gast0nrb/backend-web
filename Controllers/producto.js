const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProducto = async (req, res, next) => {
  {
    ("codigo");
  }
  try {
    const newProducto = await prisma.pRODUCTO.create({
      data: req.body,
    });
    res.status(201).json({
      data: {
        created: true,
        producto: req.body,
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

const getProductos = async (req, res, next) => {
  try {
    const productos = await prisma.pRODUCTO.findMany({
      include: {
        SUBCATEGORIA: {
          include: {
            CATEGORIA: true,
          },
        },
        PRECIO: {
          include: {
            LISTA_PRECIO: true,
          },
        },
      },
    });
    res.status(200).json({
      data: {
        lenght: productos.length,
        productos,
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

const getProducto = async (req, res, next) => {
  try {
    const producto = await prisma.pRODUCTO.findUnique({
      where: {
        codigo: req.params.id,
      },
      include: {
        SUBCATEGORIA: {
          include: {
            CATEGORIA: true,
          },
        },
        PRECIO: {
          include: {
            LISTA_PRECIO: true,
          },
        },
      },
    });
    if (producto.length == 0) {
      res.status(404).json({
        data: {
          length: producto.length,
          errorName: `Data not founded with the id ${req.params.id}`,
        },
      });
    }
    res.status(200).json({
      data: {
        length: producto.length,
        producto,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteProducto = async (req, res, next) => {
  try {
    const producto = await prisma.pRODUCTO.delete({
      where: {
        codigo: req.params.id,
      },
    });

    if (producto.length == 0) {
      res.status(404).json({
        data: {
          length: producto.length,
          errorName: `Data not found with the id ${req.params.id}`,
        },
      });
    }

    res.status(200).json({
      deleted: true,
      producto: req.params.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateProducto = async (req, res, next) => {
  try {
    const producto = await prisma.pRODUCTO.update({
      where: {
        codigo: req.params.id,
      },
      data: req.body,
    });
    if (producto.length == 0) {
      res.status(404).json({
        data: {
          length: 0,
          errorName: `Data not found with the id ${req.params.id}`,
        },
      });
    }
    res.status(200).json({
      updated: true,
      data: req.body,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto,
};
