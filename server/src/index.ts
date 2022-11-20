import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "./resolvers/user";
import { User } from "./entities/User";

export const ormConnection = new DataSource({
  type: "postgres",
  database: "keydestroyer",
  username: "postgres",
  password: "Admin123",
  logging: true,
  synchronize: true,
  entities: [User],
});

const main = async () => {
  // init type orm connection
  ormConnection.initialize();
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }), // passing objects, something like props
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    // cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
