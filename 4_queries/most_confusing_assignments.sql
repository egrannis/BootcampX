
SELECT assignments.id, name, day, chapter, count(assistance_requests.*) as total_requests
FROM assignments
JOIN assistance_requests ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;


-- Below is how I initially wrote things (longer) but query still worked

-- SELECT assignments.id AS id, assignments.day AS day, assignments.chapter AS chapter, assignments.name AS name, COUNT(assistance_requests.*) AS total_requests
-- FROM assistance_requests
-- JOIN assignments ON assignment_id = assignments.id
-- GROUP BY assignments.id
-- ORDER BY total_requests DESC;