import "graphql-import-node";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import { typeDefs } from "graphql-scalars";
import { resolvers } from "./resolvers/resolvers";

import * as User from "./schemas/schema.graphql";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [...typeDefs, User],
  resolvers,
});

export default schema;
