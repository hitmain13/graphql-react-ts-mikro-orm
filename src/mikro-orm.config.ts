import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), 
    pattern: "!(*.d).{js,ts}", 
  },
  entities: [Post],
  user: "postgres",
  password: "postgres",
  dbName: "mikro-orm",
  type: "postgresql",
  debug: !__prod__,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
