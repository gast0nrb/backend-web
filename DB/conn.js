const { PrismaClient } = require("@prisma/client") 
const prisma = new PrismaClient()

const testConnection = async () => {
    try {
        await prisma.$connect()
        console.log("Connection is okey!")
        await prisma.$disconnect()
    } catch(e) {
        await prisma.$disconnect()
        console.log(e)
        console.log("Conenction problem!")
    }
}


module.exports = testConnection;