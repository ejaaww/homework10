const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',      
  port: 5432,             
  database: 'moviesdatabase', 
  user: 'postgres',    
  password: 'Fahrezar77'   
});

module.exports = db;

