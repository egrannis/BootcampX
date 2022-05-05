const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query select is written as we would write SQL query
// pool.query is a function that accepts an SQL query as a Javascript string. 
// Using the ` backtick, we can write it multi-line
// the function RETURNS A PROMISE that contains our result when the query is successful

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

