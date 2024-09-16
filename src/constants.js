export const jsQuizz = {
  mysql1: [
    {
      question: "What does the acronym SQL stand for?",
      choices: [
        "Structured Query Language",
        "System Query Language",
        "Structured Quick Language",
        "Sequential Query Language",
      ],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "Which of the following is not a valid SQL data type?",
      choices: [
        "VARCHAR",
        "INT",
        "BOOLEAN",
        "ARRAY",
      ],
      correctAnswer: "ARRAY",
    },
    {
      question: "What command is used to create a new database in MySQL?",
      choices: [
        "CREATE DATABASE",
        "NEW DATABASE",
        "ADD DATABASE",
        "MAKE DATABASE",
      ],
      correctAnswer: "CREATE DATABASE",
    },
    {
      question: "Which data type is used to store large amounts of text in MySQL?",
      choices: [
        "TEXT",
        "VARCHAR",
        "INT",
        "BLOB",
      ],
      correctAnswer: "TEXT",
    },
    {
      question: "What is the maximum length of a VARCHAR in MySQL?",
      choices: [
        "255 characters",
        "65535 characters",
        "1000 characters",
        "1024 characters",
      ],
      correctAnswer: "65535 characters",
    },
    {
      question: "What MySQL data type should you use to store a date?",
      choices: [
        "DATETIME",
        "DATE",
        "TIMESTAMP",
        "TIME",
      ],
      correctAnswer: "DATE",
    },
    {
      question: "Which command is used to remove a table from a MySQL database?",
      choices: [
        "DELETE TABLE",
        "DROP TABLE",
        "REMOVE TABLE",
        "CLEAR TABLE",
      ],
      correctAnswer: "DROP TABLE",
    },
    {
      question: "Which of the following is not a DDL (Data Definition Language) command in MySQL?",
      choices: [
        "CREATE",
        "ALTER",
        "DROP",
        "SELECT",
      ],
      correctAnswer: "SELECT",
    },
    {
      question: "What is the default port number for MySQL?",
      choices: [
        "3306",
        "8080",
        "1433",
        "1521",
      ],
      correctAnswer: "3306",
    },
    {
      question: "Which MySQL data type is used to store decimal numbers?",
      choices: [
        "FLOAT",
        "DECIMAL",
        "DOUBLE",
        "NUMERIC",
      ],
      correctAnswer: "DECIMAL",
    },
  ],
  mysql2: [
    {
      question: "What does CRUD stand for in the context of databases?",
      choices: [
        "Create, Read, Update, Delete",
        "Create, Remove, Update, Drop",
        "Connect, Read, Use, Delete",
        "Create, Rename, Undo, Drop",
      ],
      correctAnswer: "Create, Read, Update, Delete",
    },
    {
      question: "Which SQL command is used to add new records to a table?",
      choices: [
        "INSERT",
        "ADD",
        "UPDATE",
        "CREATE",
      ],
      correctAnswer: "INSERT",
    },
    {
      question: "How do you select all columns from a table named 'users' in MySQL?",
      choices: [
        "SELECT * FROM users;",
        "SELECT ALL FROM users;",
        "GET ALL FROM users;",
        "SHOW * FROM users;",
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
        "WHERE",
        "IF",
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
  ],
  mysql3: [
    {
      question: "Which function is used to get the current date and time in MySQL?",
      choices: [
        "NOW()",
        "CURRENT_DATE()",
        "GET_DATE()",
        "DATE_TIME()",
      ],
      correctAnswer: "NOW()",
    },
    {
      question: "What does the CONCAT() function do in MySQL?",
      choices: [
        "Joins two or more strings together",
        "Counts the number of rows",
        "Converts text to uppercase",
        "Returns the current timestamp",
      ],
      correctAnswer: "Joins two or more strings together",
    },
    {
      question: "Which function is used to find the length of a string in MySQL?",
      choices: [
        "LENGTH()",
        "SIZE()",
        "COUNT()",
        "CHAR_LENGTH()",
      ],
      correctAnswer: "LENGTH()",
    },
    {
      question: "Which wildcard character is used to match any number of characters in a LIKE clause?",
      choices: [
        "%",
        "_",
        "*",
        "#",
      ],
      correctAnswer: "%",
    },
    {
      question: "Which wildcard character is used to match exactly one character in a LIKE clause?",
      choices: [
        "%",
        "_",
        "*",
        "?",
      ],
      correctAnswer: "_",
    },
    {
      question: "How can you convert a string to uppercase in MySQL?",
      choices: [
        "UPPER()",
        "TO_UPPER()",
        "CAPITALIZE()",
        "STRING_UPPER()",
      ],
      correctAnswer: "UPPER()",
    },
    {
      question: "What does the ROUND() function do in MySQL?",
      choices: [
        "Rounds a number to a specified number of decimal places",
        "Returns the integer part of a number",
        "Rounds a string to a specific length",
        "Converts a number to a string",
      ],
      correctAnswer: "Rounds a number to a specified number of decimal places",
    },
    {
      question: "Which function returns the number of rows in a result set?",
      choices: [
        "COUNT()",
        "SUM()",
        "TOTAL()",
        "ROWS()",
      ],
      correctAnswer: "COUNT()",
    },
    {
      question: "What does the SUBSTRING() function do in MySQL?",
      choices: [
        "Extracts a substring from a string",
        "Converts a string to a number",
        "Removes spaces from a string",
        "Finds the position of a substring",
      ],
      correctAnswer: "Extracts a substring from a string",
    },
    {
      question: "Which function can be used to return the length of a text string in MySQL?",
      choices: [
        "CHAR_LENGTH()",
        "STRING_LENGTH()",
        "TEXT_LENGTH()",
        "SIZE()",
      ],
      correctAnswer: "CHAR_LENGTH()",
    },
  ],
  mysql4: [
    {
      question: "Which SQL function is used to calculate the average value of a numeric column?",
      choices: [
        "AVG()",
        "SUM()",
        "COUNT()",
        "MEDIAN()",
      ],
      correctAnswer: "AVG()",
    },
    {
      question: "What does the COUNT() function do in MySQL?",
      choices: [
        "Counts the number of rows in a result set",
        "Calculates the sum of a numeric column",
        "Finds the maximum value in a column",
        "Calculates the average of a numeric column",
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
        "SELECT SUM(price) FROM products;",
        "SELECT TOTAL(price) FROM products;",
        "SELECT ADD(price) FROM products;",
        "SELECT SUM(price) INTO total FROM products;",
      ],
      correctAnswer: "SELECT SUM(price) FROM products;",
    },
    {
      question: "Which SQL clause is used to group rows that have the same values into summary rows?",
      choices: [
        "GROUP BY",
        "ORDER BY",
        "HAVING",
        "JOIN",
      ],
      correctAnswer: "GROUP BY",
    },
    {
      question: "What does the HAVING clause do in MySQL?",
      choices: [
        "Filters groups of rows after GROUP BY is applied",
        "Sorts the result set",
        "Limits the number of rows returned",
        "Joins tables based on a condition",
      ],
      correctAnswer: "Filters groups of rows after GROUP BY is applied",
    },
    {
      question: "How would you get the number of orders placed by each customer from a table named 'orders'?",
      choices: [
        "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
        "SELECT customer_id, SUM(*) FROM orders GROUP BY customer_id;",
        "SELECT customer_id, MAX(*) FROM orders GROUP BY customer_id;",
        "SELECT customer_id, AVG(*) FROM orders GROUP BY customer_id;",
      ],
      correctAnswer: "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;",
    },
    {
      question: "Which function returns the lowest value in a column?",
      choices: [
        "MIN()",
        "MAX()",
        "SUM()",
        "AVG()",
      ],
      correctAnswer: "MIN()",
    },
    {
      question: "What does the SUM() function calculate in MySQL?",
      choices: [
        "The total sum of a numeric column",
        "The average value of a numeric column",
        "The number of rows in a table",
        "The highest value in a numeric column",
      ],
      correctAnswer: "The total sum of a numeric column",
    },
    {
      question: "How can you find the average salary of employees in a table named 'employees'?",
      choices: [
        "SELECT AVG(salary) FROM employees;",
        "SELECT MEAN(salary) FROM employees;",
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
  ],
  mysql5: [
    {
      question: "What is a primary key in a MySQL table?",
      choices: [
        "A unique identifier for each row in the table",
        "A column that can have duplicate values",
        "A foreign key from another table",
        "An index used to speed up queries",
      ],
      correctAnswer: "A unique identifier for each row in the table",
    },
    {
      question: "Which SQL keyword is used to define a foreign key relationship between two tables?",
      choices: [
        "FOREIGN KEY",
        "REFERENCES",
        "LINK",
        "JOIN",
      ],
      correctAnswer: "FOREIGN KEY",
    },
    {
      question: "What is the purpose of normalization in database design?",
      choices: [
        "To reduce data redundancy and improve data integrity",
        "To increase the speed of data retrieval",
        "To simplify the database structure",
        "To combine multiple tables into one",
      ],
      correctAnswer: "To reduce data redundancy and improve data integrity",
    },
    {
      question: "Which type of relationship is represented by a 'many-to-many' cardinality?",
      choices: [
        "A relationship where multiple records in one table relate to multiple records in another table",
        "A relationship where one record in one table relates to multiple records in another table",
        "A relationship where multiple records in one table relate to one record in another table",
        "A relationship where one record in one table relates to one record in another table",
      ],
      correctAnswer: "A relationship where multiple records in one table relate to multiple records in another table",
    },
    {
      question: "How do you ensure that a column in a table cannot have NULL values?",
      choices: [
        "By setting the column as NOT NULL",
        "By defining the column with a default value",
        "By creating an index on the column",
        "By specifying the column as UNIQUE",
      ],
      correctAnswer: "By setting the column as NOT NULL",
    },
    {
      question: "What does the 'ON DELETE CASCADE' rule do in a foreign key relationship?",
      choices: [
        "Automatically deletes related rows in the child table when a row in the parent table is deleted",
        "Prevents deletion of rows in the parent table if there are related rows in the child table",
        "Updates related rows in the child table when a row in the parent table is deleted",
        "Requires manual deletion of related rows in the child table",
      ],
      correctAnswer: "Automatically deletes related rows in the child table when a row in the parent table is deleted",
    },
    {
      question: "Which SQL statement would you use to add a foreign key constraint to an existing table?",
      choices: [
        "ALTER TABLE table_name ADD CONSTRAINT fk_name FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
        "ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
        "ADD FOREIGN KEY (column_name) TO table_name REFERENCES other_table(column_name);",
        "ALTER TABLE table_name ADD fk_name FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
      ],
      correctAnswer: "ALTER TABLE table_name ADD CONSTRAINT fk_name FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
    },
    {
      question: "What is an example of a 'one-to-many' relationship in a database?",
      choices: [
        "A single customer can place multiple orders",
        "A single product can be purchased by multiple customers",
        "A single category can have multiple products",
        "A single author can write multiple books",
      ],
      correctAnswer: "A single customer can place multiple orders",
    },
    {
      question: "Which normalization form ensures that every non-key attribute is fully functionally dependent on the primary key?",
      choices: [
        "Second Normal Form (2NF)",
        "First Normal Form (1NF)",
        "Third Normal Form (3NF)",
        "Boyce-Codd Normal Form (BCNF)",
      ],
      correctAnswer: "Second Normal Form (2NF)",
    },
    {
      question: "In database design, what is a surrogate key?",
      choices: [
        "An artificially created key used as a substitute for a natural primary key",
        "A key that uniquely identifies records in a table based on a natural attribute",
        "A foreign key that links to another table’s primary key",
        "A key used to create unique constraints on a table",
      ],
      correctAnswer: "An artificially created key used as a substitute for a natural primary key",
    },
    {
      question: "What does the 'UNIQUE' constraint do in a MySQL table?",
      choices: [
        "Ensures that all values in a column are distinct",
        "Allows NULL values in a column",
        "Provides a default value for the column",
        "Automatically indexes the column",
      ],
      correctAnswer: "Ensures that all values in a column are distinct",
    },
  ],

  mysql6: [
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
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
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
        "A data structure that improves the speed of data retrieval operations",
        "A type of join used to combine tables",
        "A function used to aggregate data",
        "A clause used to limit the number of rows returned",
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
        "MAX()",
        "MIN()",
        "SUM()",
        "COUNT()",
      ],
      correctAnswer: "MAX()",
    },
    {
      question: "What is a subquery in SQL?",
      choices: [
        "A query nested inside another query",
        "A query that performs a join operation",
        "A query that creates an index",
        "A query that modifies table structure",
      ],
      correctAnswer: "A query nested inside another query",
    },
    {
      question: "How do you create an index on a column named 'username' in a table 'users'?",
      choices: [
        "CREATE INDEX idx_username ON users(username);",
        "ADD INDEX idx_username ON users(username);",
        "CREATE INDEX users(username);",
        "INDEX username ON users;",
      ],
      correctAnswer: "CREATE INDEX idx_username ON users(username);",
    },
    {
      question: "Which type of join returns all rows from both tables, with matching rows from both sides where available?",
      choices: [
        "FULL JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
      ],
      correctAnswer: "FULL JOIN",
    },
    {
      question: "How can you use a subquery to find employees who earn more than the average salary?",
      choices: [
        "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
        "SELECT * FROM employees WHERE salary > AVG(salary);",
        "SELECT * FROM employees WHERE salary > MAX(salary);",
        "SELECT * FROM employees WHERE salary > (SELECT SUM(salary) FROM employees);",
      ],
      correctAnswer: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
    },
    {
      question: "What is the purpose of using the 'EXISTS' keyword in a subquery?",
      choices: [
        "To check if a subquery returns any rows",
        "To join two tables based on a condition",
        "To create a new index",
        "To aggregate data from multiple columns",
      ],
      correctAnswer: "To check if a subquery returns any rows",
    },
  ],
  mysql7: [
    {
      question: "What is the purpose of a stored procedure in MySQL?",
      choices: [
        "To execute a set of SQL statements as a single unit",
        "To create a new table in the database",
        "To define a new user in the database",
        "To manage database transactions",
      ],
      correctAnswer: "To execute a set of SQL statements as a single unit",
    },
    {
      question: "How do you create a user-defined function in MySQL?",
      choices: [
        "CREATE FUNCTION function_name(parameters) RETURNS return_type BEGIN ... END;",
        "CREATE PROCEDURE function_name(parameters) BEGIN ... END;",
        "CREATE TRIGGER function_name AFTER INSERT ON table_name FOR EACH ROW BEGIN ... END;",
        "CREATE EVENT function_name ON SCHEDULE EVERY interval DO ...;",
      ],
      correctAnswer: "CREATE FUNCTION function_name(parameters) RETURNS return_type BEGIN ... END;",
    },
    {
      question: "What is a trigger in MySQL?",
      choices: [
        "A set of instructions that are automatically executed in response to certain events on a table",
        "A function that returns a value based on a query",
        "A procedure that manages database connections",
        "A command to delete data from a table",
      ],
      correctAnswer: "A set of instructions that are automatically executed in response to certain events on a table",
    },
    {
      question: "Which type of trigger is activated before an INSERT operation on a table?",
      choices: [
        "BEFORE INSERT",
        "AFTER INSERT",
        "BEFORE UPDATE",
        "AFTER DELETE",
      ],
      correctAnswer: "BEFORE INSERT",
    },
    {
      question: "How can you ensure that a series of SQL statements are executed as a single transaction?",
      choices: [
        "By using the START TRANSACTION, COMMIT, and ROLLBACK statements",
        "By creating a stored procedure",
        "By using a user-defined function",
        "By creating a trigger",
      ],
      correctAnswer: "By using the START TRANSACTION, COMMIT, and ROLLBACK statements",
    },
    {
      question: "What is the purpose of the COMMIT statement in a transaction?",
      choices: [
        "To save all changes made during the transaction",
        "To undo changes made during the transaction",
        "To start a new transaction",
        "To check the status of the transaction",
      ],
      correctAnswer: "To save all changes made during the transaction",
    },
    {
      question: "How do you create a trigger that executes after an UPDATE operation on a table?",
      choices: [
        "CREATE TRIGGER trigger_name AFTER UPDATE ON table_name FOR EACH ROW BEGIN ... END;",
        "CREATE TRIGGER trigger_name BEFORE UPDATE ON table_name FOR EACH ROW BEGIN ... END;",
        "CREATE TRIGGER trigger_name AFTER INSERT ON table_name FOR EACH ROW BEGIN ... END;",
        "CREATE TRIGGER trigger_name BEFORE DELETE ON table_name FOR EACH ROW BEGIN ... END;",
      ],
      correctAnswer: "CREATE TRIGGER trigger_name AFTER UPDATE ON table_name FOR EACH ROW BEGIN ... END;",
    },
    {
      question: "What is a user-defined function (UDF) in MySQL?",
      choices: [
        "A function created by the user that can return a value and be used in SQL statements",
        "A predefined function provided by MySQL for mathematical calculations",
        "A type of stored procedure that does not return a value",
        "A built-in trigger that executes automatically",
      ],
      correctAnswer: "A function created by the user that can return a value and be used in SQL statements",
    },
    {
      question: "Which statement is used to handle exceptions in a MySQL stored procedure?",
      choices: [
        "DECLARE ... HANDLER",
        "TRY ... CATCH",
        "BEGIN ... END",
        "IF ... THEN",
      ],
      correctAnswer: "DECLARE ... HANDLER",
    },
    {
      question: "How do you roll back a transaction in MySQL?",
      choices: [
        "ROLLBACK;",
        "UNDO;",
        "REVERT;",
        "ROLLBACK TRANSACTION;",
      ],
      correctAnswer: "ROLLBACK;",
    },
    {
      question: "What is the purpose of the DELIMITER command in MySQL when creating stored procedures or triggers?",
      choices: [
        "To change the statement delimiter temporarily so that the entire procedure or trigger can be defined",
        "To define a new delimiter for database tables",
        "To specify the end of a transaction",
        "To set the default character set for the procedure",
      ],
      correctAnswer: "To change the statement delimiter temporarily so that the entire procedure or trigger can be defined",
    },
  ],
}

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
