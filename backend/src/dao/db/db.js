const {
    PGPASSWORD,
    PGDATABASE,
    PGPORT,
    PGUSER,
    PGHOST,
} = require("../../config/globals");
const { Client } = require("pg");

const client = new Client({
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: PGPORT,
});

getConnection = async() => {
    try {
        await client.connect();

        return "Connection success";
    } catch (error) {
        return `Connection failed: ${error}`;
    }
};

module.exports = { getConnection, client };