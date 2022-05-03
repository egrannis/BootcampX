SELECT cohorts.name AS cohort, COUNT(assignment_submissions.*) AS total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id -- student_id is referring to assignment_submissions table, the from
JOIN cohorts ON cohorts.id = cohort_id -- cohort_id here is referring to students table, the new "from" as a result of join
GROUP BY cohorts.name
ORDER BY total_submissions DESC;
