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
// the function RETURNS A PROMISE that contains our result when the query is successfu

const text = `SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort 
  FROM students 
  JOIN cohorts ON cohort_id = cohorts.id 
  WHERE cohorts.name LIKE $1 
  LIMIT $2`
const values = [process.argv[2], process.argv[3] || 5];

pool.query(text, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
