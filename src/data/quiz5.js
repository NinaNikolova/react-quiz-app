export const mysql5 = [
  {
    question: "What is a primary key in a MySQL table?",
    choices: [
      "A foreign key from another table",
      "An index used to speed up queries",
      "A unique identifier for each row in the table",
      "A column that can have duplicate values",
    ],
    correctAnswer: "A unique identifier for each row in the table",
  },
  {
    question: "Which SQL keyword is used to define a foreign key relationship between two tables?",
    choices: [
      "REFERENCES",
      "LINK",
      "FOREIGN KEY",
      "JOIN",
    ],
    correctAnswer: "FOREIGN KEY",
  },
  {
    question: "What is the purpose of normalization in database design?",
    choices: [
      "To simplify the database structure",
      "To combine multiple tables into one",
      "To reduce data redundancy and improve data integrity",
      "To increase the speed of data retrieval",

    ],
    correctAnswer: "To reduce data redundancy and improve data integrity",
  },
  {
    question: "Which type of relationship is represented by a 'many-to-many' cardinality?",
    choices: [
      "A relationship where one record in one table relates to multiple records in another table",
      "A relationship where multiple records in one table relate to multiple records in another table",
      "A relationship where multiple records in one table relate to one record in another table",
      "A relationship where one record in one table relates to one record in another table",
    ],
    correctAnswer: "A relationship where multiple records in one table relate to multiple records in another table",
  },
  {
    question: "How do you ensure that a column in a table cannot have NULL values?",
    choices: [
      "By defining the column with a default value",
      "By creating an index on the column",
      "By specifying the column as UNIQUE",
      "By setting the column as NOT NULL",

    ],
    correctAnswer: "By setting the column as NOT NULL",
  },
  {
    question: "What does the 'ON DELETE CASCADE' rule do in a foreign key relationship?",
    choices: [
      "Requires manual deletion of related rows in the child table",
      "Automatically deletes related rows in the child table when a row in the parent table is deleted",
      "Prevents deletion of rows in the parent table if there are related rows in the child table",
      "Updates related rows in the child table when a row in the parent table is deleted",

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
      "A single author can write multiple books",
      "A single customer can place multiple orders",
      "A single product can be purchased by multiple customers",
      "A single category can have multiple products",

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
      "A foreign key that links to another table’s primary key",
      "A key used to create unique constraints on a table",
      "An artificially created key used as a substitute for a natural primary key",
      "A key that uniquely identifies records in a table based on a natural attribute",

    ],
    correctAnswer: "An artificially created key used as a substitute for a natural primary key",
  },
  {
    question: "What does the 'UNIQUE' constraint do in a MySQL table?",
    choices: [
      "Allows NULL values in a column",
      "Ensures that all values in a column are distinct",

      "Provides a default value for the column",
      "Automatically indexes the column",
    ],
    correctAnswer: "Ensures that all values in a column are distinct",
  },
];