const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCategoria = async (req, res, next) => {
  try {
    const newCategoria = await prisma.cATEGORIA.create({
        data : {
            nombre : req.body.nombre
        }
    });
    res.status(201).json({
      data: {
        created: true,
        categoria: req.body,
      },
    });
  } catch (err) {
    console.log(err)
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
        len: categorias.length,
        categorias: categorias,
      },
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      data: {
        error : err
      },
    });
  }
};

const getCategoria = async(req, res, next) => {
    try {
      console.log(req.params.id)
       const categorias = await prisma.cATEGORIA.findUnique({
        where : {
          id : parseInt(req.params.id)
        }
      })
       if(categorias.length == 0) {
        res.status(404).json({
            data : {
               length : categorias.length,
               errorName : `Data not founded with the id ${req.params.id}`
            }
        })
       }
       res.status(200).json({
        data : {
            len : categorias.length,
            categorias
        }
       })
    } catch (err) {
      console.log(err)
       res.status(500).json({
           error : err
       }) 
    }
}

module.exports = {createCategoria, getCategorias, getCategoria};
