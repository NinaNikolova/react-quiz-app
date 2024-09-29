export const mysql4 = [
  {
    index: 1,
    question: "Which SQL function is used to calculate the average value of a numeric column?",
    choices: [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MEDIAN()",
    ],
    correctAnswer: "AVG()",
    imageURL: null,
  },
  {
    index: 2,
    question: "Which function would you use to find the highest value in a column?",
    choices: [
      "MAX()",
      "MIN()",
      "SUM()",
      "AVG()",
    ],
    correctAnswer: "MAX()",
    imageURL: null,
  },
  {
    index: 3,
    question: "What does the HAVING clause do in MySQL?",
    choices: [
      "Sorts the result set",
      "Limits the number of rows returned",
      "Joins tables based on a condition",
      "Filters groups of rows after GROUP BY is applied",
    ],
    correctAnswer: "Filters groups of rows after GROUP BY is applied",
    imageURL: null,
  },
  {
    index: 4,
    question: "How would you get the number of orders placed by each customer from a table named 'orders'?",
    choices: [
      "SELECT customer_id, SUM(*) FROM orders GROUP BY customer_id;",
      "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
      "SELECT customer_id, MAX(*) FROM orders GROUP BY customer_id;",
      "SELECT customer_id, AVG(*) FROM orders GROUP BY customer_id;",
    ],
    correctAnswer: "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
    imageURL: null,
  },
  {
    index: 5,
    question: "Which function returns the lowest value in a column?",
    choices: [
      "SUM()",
      "MIN()",
      "MAX()",
      "AVG()",
    ],
    correctAnswer: "MIN()",
    imageURL: null,
  },
  {
    index: 6,
    question: "What does the SUM() function calculate in MySQL?",
    choices: [
      "The number of rows in a table",
      "The highest value in a numeric column",
      "The total sum of a numeric column",
      "The average value of a numeric column",
    ],
    correctAnswer: "The total sum of a numeric column",
    imageURL: null,
  },
  {
    index: 7,
    question: "How can you find the average salary of employees in a table named 'employees'?",
    choices: [
      "SELECT MEAN(salary) FROM employees;",
      "SELECT AVG(salary) FROM employees;",
      "SELECT AVERAGE(salary) FROM employees;",
      "SELECT MEDIAN(salary) FROM employees;",
    ],
    correctAnswer: "SELECT AVG(salary) FROM employees;",
    imageURL: null,
  },
  {
    index: 8,
    question: "What is the purpose of using the DISTINCT keyword with aggregate functions?",
    choices: [
      "To ensure unique values are considered in the aggregation",
      "To sort the results in ascending order",
      "To combine multiple tables into one",
      "To update existing records",
    ],
    correctAnswer: "To ensure unique values are considered in the aggregation",
    imageURL: null,
  },
  {
    index: 9,
    question: "What does the term 'grouping' refer to in MySQL?",
    choices: [
      "Grouping allows taking data into separate groups based on a common property.",
      "Sorting rows in a particular order.",
      "Filtering rows based on certain conditions.",
      "Creating a new table from existing tables."
    ],
    correctAnswer: "Grouping allows taking data into separate groups based on a common property.",
    imageURL: null,
  },
  {
    index: 10,
    question: "Does the `COUNT` function in MySQL include `NULL` values when counting rows?",
    choices: [
      "Yes, `COUNT` includes `NULL` values.",
      "No, `COUNT` ignores `NULL` values.",
      "`COUNT` counts `NULL` values only in certain cases.",
      "`COUNT` throws an error if there are `NULL` values."
    ],
    correctAnswer: "No, `COUNT` ignores `NULL` values.",
    imageURL: null,
  },
  {
    index: 11,
    question: "What is the main difference between the `HAVING` and `WHERE` clauses in MySQL?",
    choices: [
      "`HAVING` filters rows before grouping, while `WHERE` filters groups after aggregation.",
      "`WHERE` is only used with aggregate functions, while `HAVING` is used for any condition.",
      "`HAVING` and `WHERE` perform the same function and can be used interchangeably.",
      "`WHERE` filters rows before grouping, while `HAVING` filters groups after aggregation.",
    ],
    correctAnswer: "`WHERE` filters rows before grouping, while `HAVING` filters groups after aggregation.",
    imageURL: null,
  },
  {
    index: 12,
    question: "In which clauses can you use an alias in MySQL?",
    choices: [
      "Aliases can be used in the WHERE clause, HAVING clause, ORDER BY clause, and GROUP BY clause.",
      "Aliases can be used in the HAVING clause, ORDER BY clause, and GROUP BY clause, but not in the WHERE clause.",
      "Aliases can be used in the WHERE clause and ORDER BY clause, but not in the HAVING clause or GROUP BY clause.",
      "Aliases can only be used in the ORDER BY clause.",
    ],
    correctAnswer: "Aliases can be used in the HAVING clause, ORDER BY clause, and GROUP BY clause, but not in the WHERE clause.",
    imageURL: null,
  },
  {
    index: 13,
    question: "What is the correct order in which SQL clauses should be written in a MySQL query?",
    choices: [
      "SELECT, FROM, JOIN, WHERE, LIMIT, GROUP BY, HAVING, ORDER BY",
      "SELECT, FROM, WHERE, JOIN, GROUP BY, HAVING, ORDER BY, LIMIT",
      "SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT",
      "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, JOIN",
    ],
    correctAnswer: "SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT"
  }
];