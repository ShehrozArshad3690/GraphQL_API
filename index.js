import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));
  app.listen(port, () => console.log(`http://localhost:${port}`));
}
startServer();
