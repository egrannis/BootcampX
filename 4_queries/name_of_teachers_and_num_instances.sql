-- We need to know which teachers actually assisted students during any cohort, and how many assistances they did for that cohort.

-- Instruction
-- Perform the same query as before, but include the number of assistances as well.

SELECT teachers.name AS teacher, cohorts.name AS cohort, count(assistance_requests.*) AS total_assistances
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher;