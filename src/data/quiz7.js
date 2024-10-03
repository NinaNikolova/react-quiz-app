export const mysql7 = [
  {
    index: 1,
    question: "What is the purpose of a stored procedure in MySQL?",
    choices: [
      "To create a new table in the database",
      "To define a new user in the database",
      "To manage database transactions",
      "To execute a set of SQL statements as a single unit",
    ],
    correctAnswer: "To execute a set of SQL statements as a single unit",
    imageURL: null,
  },
  {
    index: 2,
    question: "How do you create a user-defined function in MySQL?",
    choices: [
      "CREATE PROCEDURE function_name(parameters) BEGIN ... END;",
      "CREATE FUNCTION function_name(parameters) RETURNS return_type BEGIN ... END;",
      "CREATE TRIGGER function_name AFTER INSERT ON table_name FOR EACH ROW BEGIN ... END;",
      "CREATE EVENT function_name ON SCHEDULE EVERY interval DO ...;",
    ],
    correctAnswer: "CREATE FUNCTION function_name(parameters) RETURNS return_type BEGIN ... END;",
    imageURL: null,
  },
  {
    index: 3,
    question: "What is a trigger in MySQL?",
    choices: [
      "A function that returns a value based on a query",
      "A procedure that manages database connections",
      "A command to delete data from a table",
      "A set of instructions that are automatically executed in response to certain events on a table",
    ],
    correctAnswer: "A set of instructions that are automatically executed in response to certain events on a table",
    imageURL: null,
  },
  {
    index: 4,
    question: "Which type of trigger is activated before an INSERT operation on a table?",
    choices: [
      "BEFORE UPDATE",
      "BEFORE INSERT",
      "AFTER INSERT",
      "AFTER DELETE",
    ],
    correctAnswer: "BEFORE INSERT",
    imageURL: null,
  },
  {
    index: 5,
    question: "How can you ensure that a series of SQL statements are executed as a single transaction?",
    choices: [
      "By creating a stored procedure",
      "By using a user-defined function",
      "By creating a trigger",
      "By using the START TRANSACTION, COMMIT, and ROLLBACK statements",

    ],
    correctAnswer: "By using the START TRANSACTION, COMMIT, and ROLLBACK statements",
    imageURL: null,
  },
  {
    index: 6,
    question: "What is the purpose of the COMMIT statement in a transaction?",
    choices: [
      "To undo changes made during the transaction",
      "To save all changes made during the transaction",
      "To start a new transaction",
      "To check the status of the transaction",
    ],
    correctAnswer: "To save all changes made during the transaction",
    imageURL: null,
  },
  {
    index: 7,
    question: "How do you create a trigger that executes after an UPDATE operation on a table?",
    choices: [
      "CREATE TRIGGER trigger_name BEFORE UPDATE ON table_name FOR EACH ROW BEGIN ... END;",
      "CREATE TRIGGER trigger_name AFTER INSERT ON table_name FOR EACH ROW BEGIN ... END;",
      "CREATE TRIGGER trigger_name AFTER UPDATE ON table_name FOR EACH ROW BEGIN ... END;",
      "CREATE TRIGGER trigger_name BEFORE DELETE ON table_name FOR EACH ROW BEGIN ... END;",
    ],
    correctAnswer: "CREATE TRIGGER trigger_name AFTER UPDATE ON table_name FOR EACH ROW BEGIN ... END;",
    imageURL: null,
  },
  {
    index: 8,
    question: "What is a user-defined function (UDF) in MySQL?",
    choices: [
      "A predefined function provided by MySQL for mathematical calculations",
      "A function created by the user that can return a value and be used in SQL statements",

      "A type of stored procedure that does not return a value",
      "A built-in trigger that executes automatically",
    ],
    correctAnswer: "A function created by the user that can return a value and be used in SQL statements",
    imageURL: null,
  },
  {
    index: 9,
    question: "Which statement is used to handle exceptions in a MySQL stored procedure?",
    choices: [
      "BEGIN ... END",
      "IF ... THEN",
      "DECLARE ... HANDLER",
      "TRY ... CATCH",

    ],
    correctAnswer: "DECLARE ... HANDLER",
    imageURL: null,
  },
  {
    index: 10,
    question: "How do you roll back a transaction in MySQL?",
    choices: [
      "UNDO;",
      "REVERT;",
      "ROLLBACK TRANSACTION;",
      "ROLLBACK;",
    ],
    correctAnswer: "ROLLBACK;",
    imageURL: null,
  },
  {
    index: 11,
    question: "What is the purpose of the DELIMITER command in MySQL when creating stored procedures or triggers?",
    choices: [
      "To define a new delimiter for database tables",
      "To change the statement delimiter temporarily so that the entire procedure or trigger can be defined",
      "To specify the end of a transaction",
      "To set the default character set for the procedure",
    ],
    correctAnswer: "To change the statement delimiter temporarily so that the entire procedure or trigger can be defined",
    imageURL: null,
  },
  {
    index: 12,
    question: "Why do we declare the `DELIMITER` when creating functions in MySQL?",
    choices: [
      "To define a specific character set for the function",
      "To separate SQL statements in the function from each other",
      "To temporarily change the statement delimiter to allow function definition",
      "To ensure that transactions are correctly committed within the function"
    ],
    correctAnswer: "To temporarily change the statement delimiter to allow function definition",
    imageURL: null
  },
  {
    index: 13,
    question: "What does the `DETERMINISTIC` keyword mean when used in a MySQL function?",
    choices: [
      "The function's result is independent of its input parameters",
      "The function always returns the same result for the same input parameters - pure",
      "The function will execute only once per session",
      "The function cannot contain any SQL queries"
    ],
    correctAnswer: "The function always returns the same result for the same input parameters - pure",
    imageURL: null
  },
  {
    index: 14,
    question: "Can MySQL functions or stored procedures be accessed from a Java application?",
    choices: [
      "No, Java cannot interact with MySQL functions or procedures",
      "Only procedures can be accessed, but not stored functions",
      "Java applications must use SQL scripts instead of calling functions or procedures"
    ],
    correctAnswer: "Only procedures can be accessed, but not stored functions",
    imageURL: null
  },
  {
    index: 15,
    question: "Which keywords are used to call functions and stored procedures in MySQL?",
    choices: [
      "SELECT for functions, CALL for procedures",
      "CALL for functions, EXECUTE for procedures",
      "RUN for functions, CALL for procedures",
      "EXECUTE for functions, CALL for procedures"
    ],
    correctAnswer: "SELECT for functions, CALL for procedures",
    imageURL: null
  },
  {
    index: 16,
    question: "What is a transaction in MySQL?",
    choices: [
      "A group of SQL queries that are executed in isolation and treated as a single unit",
      "A command used to commit changes to the database",
      "A function that runs SQL queries in parallel",
      "A process of backing up the entire database"
    ],
    correctAnswer: "A group of SQL queries that are executed in isolation and treated as a single unit",
    imageURL: null
  },
  {
    index: 17,
    question: "What does ACID stand for in MySQL?",
    choices: [
      "Atomicity, Consistency, Isolation, Durability",
      "Automation, Consistency, Integration, Data",
      "Atomicity, Control, Indexing, Durability",
      "Accuracy, Control, Isolation, Data"
    ],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability",
    imageURL: 'https://beginnersbook.com/wp-content/uploads/2015/04/ACID_DBMS.jpg'
  },
  {
    index: 18,
    question: "What do the OLD and NEW keywords represent in MySQL triggers?",
    choices: [
      "OLD refers to the previous row data, and NEW refers to the new row data in INSERT, UPDATE, or DELETE operations.",
      "OLD is used to revert the database to an old state, and NEW is used to create new tables.",
      "OLD and NEW are used to backup and restore data in the database.",
      "OLD refers to outdated queries, and NEW refers to new queries added to the database."
    ],
    correctAnswer: "OLD refers to the previous row data, and NEW refers to the new row data in INSERT, UPDATE, or DELETE operations.",
    imageURL: null
  },
  {
    index: 19,
    question: "In which type of trigger can you only use the NEW keyword?",
    choices: [
      "BEFORE INSERT",
      "BEFORE DELETE",
      "AFTER DELETE",
      "BEFORE UPDATE"
    ],
    correctAnswer: "BEFORE INSERT",
    imageURL: null
  },
  {
    index: 20,
    question: "When would you use the OLD keyword in a DELETE trigger?",
    choices: [
      "To access the row data before it is deleted",
      "To retrieve the previous version of the table",
      "To restore deleted rows automatically",
      "To update row data after deletion"
    ],
    correctAnswer: "To access the row data before it is deleted",
    imageURL: null
  },
  {
    index: 21,
    question: "Can both OLD and NEW be used in an UPDATE trigger?",
    choices: [
      "Yes, because OLD holds the previous data and NEW holds the updated data.",
      "No, only NEW can be used.",
      "No, only OLD can be used.",
      "Yes, but only in AFTER UPDATE triggers."
    ],
    correctAnswer: "Yes, because OLD holds the previous data and NEW holds the updated data.",
    imageURL: null
  },
  {
    index: 22,
    question: "What is the main difference between MySQL functions and procedures?",
    choices: [
      "Functions must return a value; procedures do not need to return a value.",
      "Procedures can be used in SQL expressions like SELECT; functions cannot.",
      "Functions perform complex operations like data modifications; procedures are for simple calculations.",
      "There is no difference between MySQL functions and procedures."
    ],
    correctAnswer: "Functions must return a value; procedures do not need to return a value.",
    imageURL: null
  }
];