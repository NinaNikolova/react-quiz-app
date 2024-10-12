
export const mysql1 = [
  {
    index: 1,
    question: "What is the main purpose of JDBC in Java applications?",
    choices: [
      "Data serialization",
      "Database connectivity",
      "Object-oriented programming",
      "Network communication",
    ],
    correctAnswer: "Database connectivity",
    imageURL: null,
  },
  {
    index: 2,
    question: "Which JDBC driver type is the most portable?",
    choices: [
      "Type 1: JDBC-ODBC Bridge Driver",
      "Type 2: Native-API Driver",
      "Type 3: Network Protocol Driver",
      "Type 4: Thin Driver",
    ],
    correctAnswer: "Type 4: Thin Driver",
    imageURL: null,
  },
  {
    index: 3,
    question: "What method is used to execute a SQL statement in JDBC?",
    choices: [
      "executeQuery()",
      "runSQL()",
      "executeSQL()",
      "executeUpdate()",
    ],
    correctAnswer: "executeQuery()",
    imageURL: null,
  },
  {
    index: 4,
    question: "Which class is used to establish a connection to a database in JDBC?",
    choices: [
      "DriverManager",
      "ConnectionFactory",
      "DBConnector",
      "SessionFactory",
    ],
    correctAnswer: "DriverManager",
    imageURL: null,
  },
  {
    index: 5,
    question: "What is the purpose of a PreparedStatement in JDBC?",
    choices: [
      "To execute batch updates",
      "To compile SQL queries at runtime",
      "To prevent SQL injection",
      "To manage transaction isolation",
    ],
    correctAnswer: "To prevent SQL injection",
    imageURL: null,
  },
  {
    index: 6,
    question: "Which method is used to retrieve data from a ResultSet?",
    choices: [
      "getData()",
      "getResult()",
      "getValue()",
      "getString()",
    ],
    correctAnswer: "getString()",
    imageURL: null,
  },
  {
    index: 7,
    question: "What exception is thrown when a JDBC operation fails?",
    choices: [
      "SQLException",
      "DatabaseException",
      "JDBCException",
      "ConnectionException",
    ],
    correctAnswer: "SQLException",
    imageURL: null,
  },
  {
    index: 8,
    question: "Which interface provides methods for batch processing in JDBC?",
    choices: [
      "Statement",
      "PreparedStatement",
      "CallableStatement",
      "BatchStatement",
    ],
    correctAnswer: "PreparedStatement",
    imageURL: null,
  },
  {
    index: 9,
    question: "Which method is used to commit a transaction in JDBC?",
    choices: [
      "commit()",
      "endTransaction()",
      "finalize()",
      "submit()",
    ],
    correctAnswer: "commit()",
    imageURL: null,
  },
  {
    index: 10,
    question: "What does the 'autocommit' mode do in JDBC?",
    choices: [
      "It allows multiple transactions to be executed as a single unit.",
      "It commits each SQL statement as it is executed.",
      "It prevents transactions from being committed automatically.",
      "It enables batch processing of statements.",
    ],
    correctAnswer: "It commits each SQL statement as it is executed.",
    imageURL: null,
  },
  {
    index: 11,
    question: "What is the purpose of using Object-Relational Mapping (ORM) frameworks in development?",
    choices: [
      "To manually handle SQL queries and database interactions.",
      "To map Java classes and data types to database tables and SQL data types, generate SQL calls and relievesthe developer from the manualhandling",
      "To handle low-level database connections directly.",
      "To prevent the generation of SQL calls during development."
    ],
    correctAnswer: "To map Java classes and data types to database tables and SQL data types, generate SQL calls and relievesthe developer from the manualhandling",
    imageURL: null,
  },
  {
    index: 12,
    question: "Which of the following are examples of ORM frameworks in Java?",
    choices: [
      "Spring Boot, JUnit, Mockito",
      "Entity Framework, NHibernate",
      "Doctrine, Laravel(Eloquent)",
      "Hibernate, EclipseLink, TopLink",
    ],
    correctAnswer: "Hibernate, EclipseLink, TopLink",
    imageURL: null,
  },
  {
    index: 13,
    question: "How do you establish a connection to a MySQL database using MySQL Connector/J in Java?",
    choices: [
      "By using a DataSource and a Statement class.",
      "By using DriverManager and a Connection class.",
      "By using JDBC Template and a Session class.",
      "By using a DriverManager and a ResultSet class."
    ],
    correctAnswer: "By using DriverManager and a Connection class.",
    imageURL: null,
  },
  {
    index: 14,
    question: "How do we retrieve the result in JDBC using the `ResultSet` and `PreparedStatement` classes?",
    choices: [
      "We execute the query with `PreparedStatement` and use `ResultSet` to access the results",
      "We execute the query with `ResultSet` and process the results using `PreparedStatement`",
      "We use `PreparedStatement` only to retrieve data directly",
      "We use `ResultSet` to write data into the database",
    ],
    correctAnswer: "We execute the query with `PreparedStatement` and use `ResultSet` to access the results",
    imageURL: null,
  },
  {
    index: 15,
    question: "What method is commonly used to iterate through the rows of a `ResultSet` in JDBC?",
    choices: [
      "hasNext()",
      "moveNext()",
      "next()",
      "getRow()",
    ],
    correctAnswer: "next()",
    imageURL: null,
  },
  {
    index: 16,
    question: "What does it mean to access databases on a programmer level?",
    choices: [
      "Database access requires manual intervention",
      "Database access can be automated through programming",
      "Only database administrators can access the database",
      "It requires advanced SQL knowledge",
    ],
    correctAnswer: "Database access can be automated through programming",
    imageURL: null,
  },
  {
    index: 17,
    question: "In larger applications, how can we achieve database abstraction?",
    choices: [
      "By using custom SQL logic directly in the application code",
      "By encapsulating custom SQL logic in methods",
      "By avoiding any database interactions",
      "By connecting directly to the database with no intermediary",
    ],
    correctAnswer: "By encapsulating custom SQL logic in methods",
    imageURL: null,
  },
  {
    index: 18,
    question: "Which of the following statements about JDBC/Java Database Connectivity/ APIs is NOT true?",
    choices: [
      "Making a connection to a database.",
      "Creating and executing SQLqueries in the database",
      "Viewing & Modifying the resulting records",
      "JDBC does not allow for creating and executing SQL queries."
    ],
    correctAnswer: "JDBC does not allow for creating and executing SQL queries.",
    imageURL: null,
  },
  {
    index: 19,
    question: "Which of the following statements about JDBC architecture is NOT true?",
    choices: [
      "The JDBC API provides the connection between the application and the driver manager.",
      "The JDBC Driver Manager establishes a connection with the correct driver.",
      "The JDBC architecture supports only a single driver connected to a database.",
      "The JDBC Driver handles communications with the database.",
    ],
    correctAnswer: "The JDBC architecture supports only a single driver connected to a database.",
    imageURL: null,
  }



]


