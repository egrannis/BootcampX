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
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
});
