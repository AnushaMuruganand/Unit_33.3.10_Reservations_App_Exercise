/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://test_user:mypassword@localhost/lunchly");

db.connect();

module.exports = db;
