const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'development',

  host: 'localhost',

  database: 'spotifyclone',

  password: 'development',

  port: 5432

})

module.exports = pool;