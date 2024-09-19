export const mysql4 = [
  {
    question: "Which SQL function is used to calculate the average value of a numeric column?",
    choices: [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MEDIAN()",
    ],
    correctAnswer: "AVG()",
  },
  {
    question: "What does the COUNT() function do in MySQL?",
    choices: [
      "Calculates the sum of a numeric column",
      "Finds the maximum value in a column",
      "Calculates the average of a numeric column",
      "Counts the number of rows in a result set",
    ],
    correctAnswer: "Counts the number of rows in a result set",
  },
  {
    question: "Which function would you use to find the highest value in a column?",
    choices: [
      "MAX()",
      "MIN()",
      "SUM()",
      "AVG()",
    ],
    correctAnswer: "MAX()",
  },
  {
    question: "How do you find the total sum of a column named 'price' in a table 'products'?",
    choices: [
      "SELECT SUM(price) INTO total FROM products;",
      "SELECT SUM(price) FROM products;",
      "SELECT TOTAL(price) FROM products;",
      "SELECT ADD(price) FROM products;",

    ],
    correctAnswer: "SELECT SUM(price) FROM products;",
  },
  {
    question: "Which SQL clause is used to group rows that have the same values into summary rows?",
    choices: [
      "ORDER BY",
      "GROUP BY",
      "HAVING",
      "JOIN",
    ],
    correctAnswer: "GROUP BY",
  },
  {
    question: "What does the HAVING clause do in MySQL?",
    choices: [
      "Sorts the result set",
      "Limits the number of rows returned",
      "Joins tables based on a condition",
      "Filters groups of rows after GROUP BY is applied",
    ],
    correctAnswer: "Filters groups of rows after GROUP BY is applied",
  },
  {
    question: "How would you get the number of orders placed by each customer from a table named 'orders'?",
    choices: [
      "SELECT customer_id, SUM(*) FROM orders GROUP BY customer_id;",
      "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
      "SELECT customer_id, MAX(*) FROM orders GROUP BY customer_id;",
      "SELECT customer_id, AVG(*) FROM orders GROUP BY customer_id;",
    ],
    correctAnswer: "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
  },
  {
    question: "Which function returns the lowest value in a column?",
    choices: [
      "SUM()",
      "MIN()",
      "MAX()",
      "AVG()",
    ],
    correctAnswer: "MIN()",
  },
  {
    question: "What does the SUM() function calculate in MySQL?",
    choices: [
      "The number of rows in a table",
      "The highest value in a numeric column",
      "The total sum of a numeric column",
      "The average value of a numeric column",
    ],
    correctAnswer: "The total sum of a numeric column",
  },
  {
    question: "How can you find the average salary of employees in a table named 'employees'?",
    choices: [
      "SELECT MEAN(salary) FROM employees;",
      "SELECT AVG(salary) FROM employees;",
      "SELECT AVERAGE(salary) FROM employees;",
      "SELECT MEDIAN(salary) FROM employees;",
    ],
    correctAnswer: "SELECT AVG(salary) FROM employees;",
  },
  {
    question: "What is the purpose of using the DISTINCT keyword with aggregate functions?",
    choices: [
      "To ensure unique values are considered in the aggregation",
      "To sort the results in ascending order",
      "To combine multiple tables into one",
      "To update existing records",
    ],
    correctAnswer: "To ensure unique values are considered in the aggregation",
  },
];