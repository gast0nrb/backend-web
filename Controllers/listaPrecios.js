const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createListPrecio = async (req, res, next) => {
  try {
    const newList = await prisma.lISTA_PRECIO.create({
      data: {
        nombre: req.body.nombre,
      },
    });
    res.status(201).json({
      data: {
        created: true,
        ListaPrecio: req.body,
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

const getListas = async (req, res, next) => {
  try {
    const listaPrecio = await prisma.lISTA_PRECIO.findMany();
    res.status(200).json({
      data: {
        lenght: listaPrecio.length,
        listaPrecio,
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

const deleteLista = async (req, res, next) => {
  try {
    const listaPrecio = await prisma.lISTA_PRECIO.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (listaPrecio.length == 0) {
      res.status(404).json({
        data: {
          length: listaPrecio.length,
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

const updateListaPrecio = async (req, res, next) => {
  try {
    const listaPrecio = await prisma.lISTA_PRECIO.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        nombre: req.body.nombre,
      },
    });
    if (listaPrecio.length == 0) {
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
        nombre: req.body.nombre,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

//To-Do route /listaPrecio/precio/producto:id/subcategoria:id/categoria:id
//Can filter by any of those values only one filter

module.exports = {
  createListPrecio,
  deleteLista,
  getListas,
  updateListaPrecio,
};
