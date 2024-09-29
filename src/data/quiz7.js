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
];