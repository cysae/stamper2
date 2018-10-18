"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: `http://stamp-Publi-JWKX08TP3UEH-619597303.eu-west-1.elb.amazonaws.com`
});
exports.prisma = new exports.Prisma();
