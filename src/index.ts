import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import schema from "./graphql/typeDefs";
import { graphqlUploadExpress } from "graphql-upload";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;
const server = new ApolloServer({ csrfPrevention: false, schema });

async function startServer() {
  await server.start();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(graphqlUploadExpress({ maxFileSize: 10 * 1024 * 1024 }));
  app.use(express.static("../public/images"));
  app.use("/graphql", expressMiddleware(server));
  app.listen(port, () => console.log(`http://localhost:${port}`));
}
startServer();
