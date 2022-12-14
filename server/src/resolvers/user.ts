import { Resolver, Query } from "type-graphql";


@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hello";
  }

  @Query(() => String)
  bye() {
    return "bye";
  }
}

