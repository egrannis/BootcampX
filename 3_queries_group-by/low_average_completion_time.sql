SELECT students.name AS student, AVG(assignment_submissions.duration) AS average_assignment_duration, AVG(assignments.duration) AS average_estimated_duration
FROM students
JOIN assignment_submissions ON students.id = student_id -- student_id here is referring to assignment_submissions
JOIN assignments ON assignments.id = assignment_id -- assignment_id here is assignment_submissions.assignment_id
WHERE end_date IS NULL -- students.end_date
GROUP BY student
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY average_assignment_duration;
