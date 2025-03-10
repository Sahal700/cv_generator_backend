const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: "root",
  password: "123456789",
  database: 'cv',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promisify queries for async/await support
pool.query = util.promisify(pool.query);

module.exports = pool;