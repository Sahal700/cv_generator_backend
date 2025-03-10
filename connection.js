const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'cv',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promisify queries for async/await support
pool.query = util.promisify(pool.query);

module.exports = pool;