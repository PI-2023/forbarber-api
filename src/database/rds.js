const { PrismaClient } = require("@prisma/client");
const RDS = new PrismaClient();
module.exports = { RDS };
