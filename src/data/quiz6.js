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
    question: "How do you perform an inner join between two tables 'employees' and 'departments' on the 'department_id' column?",
    choices: [
      "SELECT * FROM employees INNER JOIN departments ON employees.department_id = departments.department_id;",
      "SELECT * FROM employees JOIN departments WHERE employees.department_id = departments.department_id;",
      "SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.department_id;",
      "SELECT * FROM employees, departments WHERE employees.department_id = departments.department_id;",
    ],
    correctAnswer: "SELECT * FROM employees INNER JOIN departments ON employees.department_id = departments.department_id;",
  },
  {
    question: "Which SQL function can be used to get the maximum value of a column in a subquery?",
    choices: [
      "SUM()",
      "MAX()",
      "MIN()",

      "COUNT()",
    ],
    correctAnswer: "MAX()",
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
      "FULL JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
    ],
    correctAnswer: "FULL JOIN",
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
    question: "What is the purpose of using the 'EXISTS' keyword in a subquery?",
    choices: [
      "To join two tables based on a condition",
      "To check if a subquery returns any rows",
      "To create a new index",
      "To aggregate data from multiple columns",
    ],
    correctAnswer: "To check if a subquery returns any rows",
  },
];