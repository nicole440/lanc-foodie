/** Creates a Postgres client to enable queries to DB */
const { Pool } = require('pg');
require('dotenv').config();

  const pool = new Pool({
    host: dbenvironment.env.PG_HOST,
    port: dbenvironment.env.PG_PORT,
    user: dbenvironment.env.PG_USER,
    password: dbenvironment.env.PG_PASSWORD,
    database: dbenvironment.env.PG_DATABASE,
  });
  
  pool.query('SELECT * FROM establishments', (err, res) => {
    console.log(err, res);
    pool.end();
  });