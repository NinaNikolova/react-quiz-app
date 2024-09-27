export const mysql6 = [
  {
    question: "Which SQL clause is used to combine rows from two or more tables based on a related column?",
    choices: [
      "JOIN",
      "MERGE",
      "UNION",
      "COMBINE",
    ],
    correctAnswer: "JOIN",
  },
  {
    question: "What type of join returns all rows from the left table and matching rows from the right table?",
    choices: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN",
    ],
    correctAnswer: "LEFT JOIN",
  },
  {
    question: "Which SQL clause is used to filter records in a subquery?",
    choices: [
      "WHERE",
      "HAVING",
      "FILTER",
      "SELECT",
    ],
    correctAnswer: "WHERE",
  },
  {
    question: "What is an index in a MySQL database?",
    choices: [
      "A function used to aggregate data",
      "A clause used to limit the number of rows returned",
      "A data structure that improves the speed of data retrieval operations",
      "A type of join used to combine tables",
    ],
    correctAnswer: "A data structure that improves the speed of data retrieval operations",
  },
  {
    question: "How do you perform an INNER JOIN between two tables 'employees' and 'departments' on the 'department_id' column?",
    choices: [
      "SELECT * FROM employees AS e JOIN departments AS d ON e.department_id = d.department_id;",
      "SELECT * FROM employees JOIN departments WHERE employees.department_id = departments.department_id;",
      "SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.department_id;",
      "SELECT * FROM employees, departments WHERE employees.department_id = departments.department_id;",
    ],
    correctAnswer: "SELECT * FROM employees AS e JOIN departments AS d ON e.department_id = d.department_id;",
  },
  {
    question: "What is a subquery in SQL?",
    choices: [
      "A query that modifies table structure",
      "A query nested inside another query",
      "A query that performs a join operation",
      "A query that creates an index",

    ],
    correctAnswer: "A query nested inside another query",
  },
  {
    question: "How do you create an index on a column named 'username' in a table 'users'?",
    choices: [
      "CREATE INDEX users(username);",
      "INDEX username ON users;",
      "CREATE INDEX idx_username ON users(username);",
      "ADD INDEX idx_username ON users(username);",
    ],
    correctAnswer: "CREATE INDEX idx_username ON users(username);",
  },
  {
    question: "Which type of join returns all rows from both tables, with matching rows from both sides where available?",
    choices: [
      "LEFT JOIN",
      "FULL JOIN(OUTER JOIN)",
      "RIGHT JOIN",
      "INNER JOIN",
    ],
    correctAnswer: "FULL JOIN(OUTER JOIN)",
  },
  {
    question: "How can you use a subquery to find employees who earn more than the average salary?",
    choices: [
      "SELECT * FROM employees WHERE salary > AVG(salary);",
      "SELECT * FROM employees WHERE salary > MAX(salary);",
      "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
      "SELECT * FROM employees WHERE salary > (SELECT SUM(salary) FROM employees);",
    ],
    correctAnswer: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
  },
  {
    question: "What is the result of performing a Cartesian product between two tables- example: SELECT e.name, d.depatment FROM employees AS e, depatments AS d?",
    choices: [
      "It combines rows from two tables based on a matching condition",
      "It returns the common rows between two tables",
      "It pairs every row from the first table with every row from the second table",
      "It filters rows from two tables using a WHERE clause"
    ],
    correctAnswer: "It pairs every row from the first table with every row from the second table"
  },
  {
    question: "Are INNER JOIN and JOIN equivalent in SQL?",
    choices: [
      "No, JOIN returns all rows from both tables, while INNER JOIN returns only matching rows",
      "Yes, JOIN is the default and performs an INNER JOIN by default",
      "No, JOIN combines tables without any condition, while INNER JOIN requires a condition",
      "Yes, but JOIN is faster than INNER JOIN"
    ],
    correctAnswer: "Yes, JOIN is the default and performs an INNER JOIN by default"
  },
  {
    question: "What does it mean when FULL JOIN is not implemented in MySQL?",
    choices: [
      "It means FULL JOIN is faster in MySQL compared to other databases",
      "It means MySQL does not natively support a FULL JOIN to combine matching and non-matching rows from two tables",
      "It means MySQL supports FULL JOIN only for specific data types",
      "It means FULL JOIN can be used in MySQL without any limitations"
    ],
    correctAnswer: "It means MySQL does not natively support a FULL JOIN to combine matching and non-matching rows from two tables"
  },
  {
    question: "What type of JOIN is used in the following SQL query?\nSELECT e.name, m.name FROM employees e JOIN employees m ON e.manager_id=m.employee_id;",
    choices: [
      "INNER JOIN",
      "LEFT JOIN",
      "FULL JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: "INNER JOIN"
  },


];