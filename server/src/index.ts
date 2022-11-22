import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import { COOKIE_NAME, __prod__ } from "./constants";


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

  let redisStore = connectRedis(session);
  var redis = new Redis();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  redis.connect().catch(console.error);

  app.use(
    session({
      name: COOKIE_NAME,
      store: new redisStore({
        client: redis as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: __prod__, // cokie only works in https
        sameSite: "lax", //csrf
      },
      saveUninitialized: false,
      secret: "asdfjksljfklsjafsdf",
      resave: false,
    })
  );


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
