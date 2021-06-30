const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "aaddmmiinn",
    host: "localhost",
    port: 5432,
    database: "perndb"
});

module.exports = pool;