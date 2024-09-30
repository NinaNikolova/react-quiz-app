export const mysql6 = [
  {
    index: 1,
    question: "Which SQL clause is used to combine rows from two or more tables based on a related column?",
    choices: [
      "JOIN",
      "MERGE",
      "UNION",
      "COMBINE",
    ],
    correctAnswer: "JOIN",
    imageURL: 'https://www.w3schools.com/sql/img_inner_join.png',
  },
  {
    index: 2,
    question: "What type of join returns all rows from the left table and matching rows from the right table?",
    choices: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN",
    ],
    correctAnswer: "LEFT JOIN",
    imageURL: 'https://www.dofactory.com/img/sql/sql-left-join.png',
  },
  {
    index: 3,
    question: "Which SQL clause is used to filter records in a subquery?",
    choices: [
      "WHERE",
      "HAVING",
      "FILTER",
      "SELECT",
    ],
    correctAnswer: "WHERE",
    imageURL: null,
  },
  {
    index: 4,
    question: "What is an index in a MySQL database?",
    choices: [
      "A function used to aggregate data",
      "A clause used to limit the number of rows returned",
      "A data structure that improves the speed of data retrieval operations",
      "A type of join used to combine tables",
    ],
    correctAnswer: "A data structure that improves the speed of data retrieval operations",
    imageURL: null,
  },
  {
    index: 5,
    question: "How do you perform an INNER JOIN between two tables 'employees' and 'departments' on the 'department_id' column?",
    choices: [
      "SELECT * FROM employees AS e JOIN departments AS d ON e.department_id = d.department_id;",
      "SELECT * FROM employees JOIN departments WHERE employees.department_id = departments.department_id;",
      "SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.department_id;",
      "SELECT * FROM employees, departments WHERE employees.department_id = departments.department_id;",
    ],
    correctAnswer: "SELECT * FROM employees AS e JOIN departments AS d ON e.department_id = d.department_id;",
    imageURL: null,
  },
  {
    index: 6,
    question: "What is a subquery in SQL?",
    choices: [
      "A query that modifies table structure",
      "A query nested inside another query",
      "A query that performs a join operation",
      "A query that creates an index",

    ],
    correctAnswer: "A query nested inside another query",
    imageURL: null,
  },
  {
    index: 7,
    question: "How do you create an index on a column named 'username' in a table 'users'?",
    choices: [
      "CREATE INDEX users(username);",
      "INDEX username ON users;",
      "CREATE INDEX idx_username ON users(username);",
      "ADD INDEX idx_username ON users(username);",
    ],
    correctAnswer: "CREATE INDEX idx_username ON users(username);",
    imageURL: null,
  },
  {
    index: 8,
    question: "Which type of join returns all rows from both tables, with matching rows from both sides where available?",
    choices: [
      "LEFT JOIN",
      "FULL JOIN(OUTER JOIN)",
      "RIGHT JOIN",
      "INNER JOIN",
    ],
    correctAnswer: "FULL JOIN(OUTER JOIN)",
    imageURL: 'https://fthiella.github.io/images/full-outer-join.gif',
  },
  {
    index: 9,
    question: "How can you use a subquery to find employees who earn more than the average salary?",
    choices: [
      "SELECT * FROM employees WHERE salary > AVG(salary);",
      "SELECT * FROM employees WHERE salary > MAX(salary);",
      "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
      "SELECT * FROM employees WHERE salary > (SELECT SUM(salary) FROM employees);",
    ],
    correctAnswer: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
    imageURL: null,
  },
  {
    index: 10,
    question: "What is the result of performing a Cartesian product between two tables- example: SELECT e.name, d.depatment FROM employees AS e, depatments AS d?",
    choices: [
      "It combines rows from two tables based on a matching condition",
      "It returns the common rows between two tables",
      "It pairs every row from the first table with every row from the second table",
      "It filters rows from two tables using a WHERE clause"
    ],
    correctAnswer: "It pairs every row from the first table with every row from the second table",
    imageURL: 'https://d2jdgazzki9vjm.cloudfront.net/mysql/images/mysql-cross-join.png',
  },
  {
    index: 11,
    question: "Are INNER JOIN and JOIN equivalent in SQL?",
    choices: [
      "No, JOIN returns all rows from both tables, while INNER JOIN returns only matching rows",
      "Yes, JOIN is the default and performs an INNER JOIN by default",
      "No, JOIN combines tables without any condition, while INNER JOIN requires a condition",
      "Yes, but JOIN is faster than INNER JOIN"
    ],
    correctAnswer: "Yes, JOIN is the default and performs an INNER JOIN by default",
    imageURL: 'https://www.w3schools.com/sql/img_inner_join.png',
  },
  {
    index: 12,
    question: "What does it mean when FULL JOIN is not implemented in MySQL?",
    choices: [
      "It means FULL JOIN is faster in MySQL compared to other databases",
      "It means MySQL does not natively support a FULL JOIN to combine matching and non-matching rows from two tables",
      "It means MySQL supports FULL JOIN only for specific data types",
      "It means FULL JOIN can be used in MySQL without any limitations"
    ],
    correctAnswer: "It means MySQL does not natively support a FULL JOIN to combine matching and non-matching rows from two tables",
    imageURL: 'https://fthiella.github.io/images/full-outer-join.gif',
  },
  {
    index: 13,
    question: "What type of JOIN is used in the following SQL query?\nSELECT e.name, m.name FROM employees e JOIN employees m ON e.manager_id=m.employee_id;",
    choices: [
      "INNER JOIN",
      "LEFT JOIN",
      "FULL JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: "INNER JOIN",
    imageURL: 'https://www.w3schools.com/sql/img_inner_join.png',
  },
  {
    index: 14,
    question: "How can you simulate a FULL JOIN in MySQL since it is not natively supported?",
    choices: [
      "By using only a LEFT JOIN",
      "By using a UNION of LEFT JOIN and RIGHT JOIN",
      "By using a CROSS JOIN with a condition",
      "By using an INNER JOIN followed by a WHERE clause"
    ],
    correctAnswer: "By using a UNION of LEFT JOIN and RIGHT JOIN",
    imageURL: 'https://www.w3schools.com/Sql/img_full_outer_join.png',
  },
  {
    index: 15,
    question: "What is a CROSS JOIN in SQL?",
    choices: [
      "It returns only the matching rows from two tables based on a condition",
      "It returns rows from the first table that have corresponding rows in the second table",
      "It pairs every row from the first table with every row from the second table, creating a Cartesian product. This is equivalent to a JOIN without an ON condition",
      "It combines rows from two tables based on a primary key"
    ],
    correctAnswer: "It pairs every row from the first table with every row from the second table, creating a Cartesian product. This is equivalent to a JOIN without an ON condition",
    imageURL: 'https://d2jdgazzki9vjm.cloudfront.net/mysql/images/mysql-cross-join.png',
  },
  {
    index: 16,
    question: "What is a clustered index in a MySQL database?",
    choices: [
      "An index that defines the physical order in which data is stored in a table.",
      "An index that stores data separately from the index structure.",
      "An index that allows multiple indices on a table.",
      "An index used only with foreign keys.",
    ],
    correctAnswer: "An index that defines the physical order in which data is stored in a table.",
    imageURL: null,
  },
  {
    index: 17,
    question: "What is a non-clustered index in a MySQL database?",
    choices: [
      "An index that defines the physical order of the data in the table.",
      "An index stored separately from the table data, with pointers to the actual rows.",
      "An index that can only be applied to primary keys.",
      "An index that modifies the physical storage order of the data.",
    ],
    correctAnswer: "An index stored separately from the table data, with pointers to the actual rows.",
    imageURL: null,
  },
  {
    index: 18,
    question: "Which of the following is a downside of using non-clustered indexes in MySQL?",
    choices: [
      "They can only be used on primary key columns.",
      "They store data in the same physical order as the table, slowing down updates.",
      "They take up additional storage space and can slow down insert, update, and delete operations.",
      "A table can have only one non-clustered index, which limits flexibility.",
    ],
    correctAnswer: "They take up additional storage space and can slow down insert, update, and delete operations.",
    imageURL: null,
  },

];