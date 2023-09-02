import {Post} from "./entities/Post";
import {__prod__} from "./constatns";
import {MikroORM} from "@mikro-orm/core";
import path from 'path'

// const config = {
//     user: 'your_username',
//     host: 'your_host',
//     database: 'your_database',
//     password: 'your_password', // Make sure it's a string and properly enclosed in quotes.
//     port: 5432,
// };

export default  {
    migrations: {
            path: path.join(__dirname,'./migrations'),
            pattern: /^[w-]+\d+\.[tj]s$/,

    },

    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];