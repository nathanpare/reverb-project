const Pool = require('pg').Pool         

const pool = new Pool({
  user: 'development',
  
  host: 'localhost',
  
  database: 'spotifyclone',
  
  password: 'development',
  
  port: 5433
  
 })
 
module.exports = pool;