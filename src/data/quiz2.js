export const mysql2 = [
  {
    question: "What does CRUD stand for in the context of databases?",
    choices: [
      "Create, Remove, Update, Drop",
      "Create, Read, Update, Delete",
      "Connect, Read, Use, Delete",
      "Create, Rename, Undo, Drop",
    ],
    correctAnswer: "Create, Read, Update, Delete",
  },
  {
    question: "Which SQL command is used to add new records to a table?",
    choices: [
      "UPDATE",
      "CREATE",
      "INSERT",
      "ADD",
    ],
    correctAnswer: "INSERT",
  },
  {
    question: "How do you select all columns from a table named 'users' in MySQL?",
    choices: [
      "SELECT ALL FROM users;",
      "GET ALL FROM users;",
      "SHOW * FROM users;",
      "SELECT * FROM users;",
    ],
    correctAnswer: "SELECT * FROM users;",
  },
  {
    question: "What SQL command is used to modify existing records in a table?",
    choices: [
      "ALTER",
      "UPDATE",
      "MODIFY",
      "CHANGE",
    ],
    correctAnswer: "UPDATE",
  },
  {
    question: "Which clause is used to filter records in a SELECT query?",
    choices: [
      "IF",
      "WHERE",
      "HAVING",
      "FILTER",
    ],
    correctAnswer: "WHERE",
  },
  {
    question: "Which SQL statement is used to remove records from a table?",
    choices: [
      "DELETE",
      "REMOVE",
      "DROP",
      "ERASE",
    ],
    correctAnswer: "DELETE",
  },
  {
    question: "What SQL command would you use to remove an entire table?",
    choices: [
      "DELETE TABLE table_name;",
      "REMOVE TABLE table_name;",
      "DROP TABLE table_name;",
      "ERASE TABLE table_name;",
    ],
    correctAnswer: "DROP TABLE table_name;",
  },
  {
    question: "How do you update the 'name' column to 'John' for a user with id=5?",
    choices: [
      "UPDATE users SET name='John' WHERE id=5;",
      "SET users.name='John' WHERE id=5;",
      "MODIFY users.name='John' WHERE id=5;",
      "CHANGE users.name TO 'John' WHERE id=5;",
    ],
    correctAnswer: "UPDATE users SET name='John' WHERE id=5;",
  },
  {
    question: "Which SQL clause is used to sort the result set of a query?",
    choices: [
      "ORDER BY",
      "GROUP BY",
      "SORT BY",
      "FILTER BY",
    ],
    correctAnswer: "ORDER BY",
  },
  {
    question: "How would you delete all rows from a table without removing the table itself?",
    choices: [
      "DELETE * FROM table_name;",
      "TRUNCATE TABLE table_name;",
      "DROP ALL FROM table_name;",
      "REMOVE * FROM table_name;",
    ],
    correctAnswer: "TRUNCATE TABLE table_name;",
  },
  {
    question: "What is a projection in SQL?",
    choices: [
      "Selecting specific columns from a table",
      "Filtering rows based on a condition",
      "Combining rows from multiple tables",
      "Sorting rows in a table",
    ],
    correctAnswer: "Selecting specific columns from a table",
  },
  {
    question: "How do you specify multiple conditions in a WHERE clause?",
    choices: [
      "Using LIKE operators",
      "Using GROUP BY clause",
      "Using ORDER BY clause",
      "Using AND or OR operators",
    ],
    correctAnswer: "Using AND or OR operators",
  },
  {
    question: "What is the purpose of the CONCAT_WS() function?",
    choices: [
      "Combines multiple strings with a specified separator",
      "Combines strings without any separator",
      "Splits a string into multiple parts",
      "Converts a string to uppercase",
    ],
    correctAnswer: "Combines multiple strings with a specified separator",
  },
  {
    question: "Which keyword is used to remove duplicate values from the result set?",
    choices: [
      "ELIMINATE",
      "DISTINCT",
      "UNIQUE",
      "REMOVE",
    ],
    correctAnswer: "DISTINCT",
  },
  {
    question: "Which logical operator is used to negate a condition in MySQL?",
    choices: [
      "AND",
      "OR",
      "NOT",
      "XOR",
    ],
    correctAnswer: "NOT",
  },
  {
    question: "How does the BETWEEN operator function in SQL?",
    choices: [
      "Checks if a value is within a range",
      "Compares two values for equality",
      "Filters rows based on a specific condition",
      "Sorts rows in ascending order",
    ],
    correctAnswer: "Checks if a value is within a range",
  },
  {
    question: "What does the IN operator do in SQL?",
    choices: [
      "Checks if a value is greater than a specified value",
      "Filters rows based on a specific condition",
      "Sorts rows in descending order",
      "Checks if a value matches any value in a list",
    ],
    correctAnswer: "Checks if a value matches any value in a list",
  },
  {
    question: "What is NULL in SQL?",
    choices: [
      "A special value that means missing value",
      "A placeholder for zero",
      "A blank space",
      "An empty string",
    ],
    correctAnswer: "A special value that means missing value",
  },
  {
    question: "What does the ASC keyword specify in an ORDER BY clause?",
    choices: [
      "Descending order",
      "Ascending order, default",
      "A specific number of rows to return",
      "A specific range of values",
    ],
    correctAnswer: "Ascending order, default",
  },
  {
    question: "What does the DESC keyword specify in an ORDER BY clause?",
    choices: [
      "Descending order",
      "Ascending order",
      "The number of rows to return",
      "The range of values to filter",
    ],
    correctAnswer: "Descending order",
  },
  {
    question: "What is a view in MySQL?",
    choices: [
      "A virtual table made from other tables or joins",
      "A physical copy of a table",
      "A type of index",
      "A method for creating stored procedures",
    ],
    correctAnswer: "A virtual table made from other tables or joins",
  },
  {
    question: "Which SQL statement is used to limit the number of rows returned?",
    choices: [
      "LIMIT",
      "TOP",
      "ROWNUM",
      "FETCH",
    ],
    correctAnswer: "LIMIT",
  },
  {
    question: "What does the INSERT INTO statement do?",
    choices: [
      "Adds new records to a table",
      "Updates existing records in a table",
      "Deletes records from a table",
      "Creates a new table",
    ],
    correctAnswer: "Adds new records to a table",
  },
  {
    question: "What does the CREATE TABLE ... AS SELECT ... statement do?",
    choices: [
      "Creates a new table based on the results of a SELECT query",
      "Updates an existing table with new data",
      "Deletes a table",
      "Alters the structure of an existing table",
    ],
    correctAnswer: "Creates a new table based on the results of a SELECT query",
  },
  {
    question: "What is the purpose of the UPDATE statement in MySQL?",
    choices: [
      "Creates new records in a table",
      "Deletes records from a table",
      "Retrieves records from a table",
      "Modifies existing records in a table",
    ],
    correctAnswer: "Modifies existing records in a table",
  },
  {
    question: "What is the result of the following SQL statement: UPDATE `employees` SET `last_name` = 'Brown' WHERE `id` = 1?",
    choices: [
      "Inserts a new employee record with last name 'Brown'",
      "Updates the last name of the employee with id 1 to 'Brown'",
      "Deletes the employee with id 1",
      "Retrieves the employee record with ID 1",
    ],
    correctAnswer: "Updates the last name of the employee with id 1 to 'Brown'",
  },

];