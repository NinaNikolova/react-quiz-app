export const mysql5 = [
  {
    index: 1,
    question: "What is a primary key in a MySQL table?",
    choices: [
      "A foreign key from another table",
      "An index used to speed up queries",
      "A unique identifier for each row in the table",
      "A column that can have duplicate values",
    ],
    correctAnswer: "A unique identifier for each row in the table",
    imageURL: null,
  },
  {
    index: 2,
    question: "Which SQL keyword is used to define a foreign key relationship between two tables?",
    choices: [
      "REFERENCES",
      "LINK",
      "FOREIGN KEY",
      "JOIN",
    ],
    correctAnswer: "FOREIGN KEY",
    imageURL: null,
  },
  {
    index: 3,
    question: "What is the purpose of normalization in database design?",
    choices: [
      "To simplify the database structure",
      "To combine multiple tables into one",
      "To reduce data redundancy and improve data integrity",
      "To increase the speed of data retrieval",

    ],
    correctAnswer: "To reduce data redundancy and improve data integrity",
    imageURL: null,
  },
  {
    index: 4,
    question: "Which type of relationship is represented by a 'many-to-many' cardinality?",
    choices: [
      "A relationship where one record in one table relates to multiple records in another table",
      "A relationship where multiple records in one table relate to multiple records in another table",
      "A relationship where multiple records in one table relate to one record in another table",
      "A relationship where one record in one table relates to one record in another table",
    ],
    correctAnswer: "A relationship where multiple records in one table relate to multiple records in another table",
    imageURL: null,
  },
  {
    index: 5,
    question: "How do you ensure that a column in a table cannot have NULL values?",
    choices: [
      "By defining the column with a default value",
      "By creating an index on the column",
      "By specifying the column as UNIQUE",
      "By setting the column as NOT NULL",

    ],
    correctAnswer: "By setting the column as NOT NULL",
    imageURL: null,
  },
  {
    index: 6,
    question: "What does the 'ON DELETE CASCADE' rule do in a foreign key relationship?",
    choices: [
      "Requires manual deletion of related rows in the child table",
      "Automatically deletes related rows in the child table when a row in the parent table is deleted",
      "Prevents deletion of rows in the parent table if there are related rows in the child table",
      "Updates related rows in the child table when a row in the parent table is deleted",

    ],
    correctAnswer: "Automatically deletes related rows in the child table when a row in the parent table is deleted",
    imageURL: null,
  },
  {
    index: 7,
    question: "Which SQL statement would you use to add a foreign key constraint to an existing table?",
    choices: [
      "ALTER TABLE table_name ADD CONSTRAINT fk_name FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
      "ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
      "ADD FOREIGN KEY (column_name) TO table_name REFERENCES other_table(column_name);",
      "ALTER TABLE table_name ADD fk_name FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
    ],
    correctAnswer: "ALTER TABLE table_name ADD CONSTRAINT fk_name FOREIGN KEY (column_name) REFERENCES other_table(column_name);",
    imageURL: null,
  },
  {
    index: 8,
    question: "What is an example of a 'one-to-many' relationship in a database?",
    choices: [
      "Two authors can write multiple books",
      "A single customer can place multiple orders",
      "Three products can be purchased by three customers",
      "Many categories can have different products"
    ],
    correctAnswer: "A single customer can place multiple orders",
    imageURL: null,
  },
  {
    index: 9,
    question: "What does the 'UNIQUE' constraint do in a MySQL table?",
    choices: [
      "Allows NULL values in a column",
      "Ensures that all values in a column are distinct",
      "Provides a default value for the column",
      "Automatically indexes the column"
    ],
    correctAnswer: "Ensures that all values in a column are distinct",
    imageURL: null,
  },
  {
    index: 10,
    question: "Which of the following steps are involved in designing and setting up a relational database?",
    choices: [
      "Identifying entities, defining table columns, and modeling relationships",
      "Defining table columns, filling test data, and setting up primary keys",
      "Identification of entities, defining table columns, primary keys, modeling relationships, defining constraints, and filling test data",
      "Modeling relationships, filling test data, and defining constraints"
    ],
    correctAnswer: "Identification of entities, defining table columns, primary keys, modeling relationships, defining constraints, and filling test data",
    imageURL: null,
  },
  {
    index: 11,
    question: "How does using a primary key-foreign key relationship help in a database?",
    choices: [
      "It allows storing duplicate data across tables",
      "It ensures data integrity by avoiding repeating data across related tables",
      "It creates a backup of the data in case of loss",
      "It automatically indexes all the columns in the database"
    ],
    correctAnswer: "It ensures data integrity by avoiding repeating data across related tables",
    imageURL: null,
  },
  {
    index: 12,
    question: "What does cascading allow in relational databases?",
    choices: [
      "It prevents changes to related entities",
      "It allows changes in one entity to cascade to all related entities",
      "It ensures that changes are only applied to the current entity",
      "It enables a backup of all related entities",
    ],
    correctAnswer: "It allows changes in one entity to cascade to all related entities",
    imageURL: null,
  },
  {
    index: 13,
    question: "What does a relational schema (E/R Diagrams) of a database include?",
    choices: [
      "Only the data stored in the tables",
      "Schemas of tables, relationships, and other objects like constraints",
      "Only relationships between tables",
      "Indexes and triggers used by the database",
    ],
    correctAnswer: "Schemas of tables, relationships, and other objects like constraints",
    imageURL: null,
  },
  {
    index: 14,
    question: "What is a composite primary key in a join mapping table?",
    choices: [
      "A primary key that consists of a single column",
      "A primary key that is auto-incremented by the database",
      "A primary key made up of two or more columns",
      "A primary key that automatically creates indexes for foreign keys",
    ],
    correctAnswer: "A primary key made up of two or more columns",
    imageURL: null,
  },
  {
    index: 15,
    question: "In a one-to-one relationship, why must the foreign key be unique?",
    choices: [
      "To ensure multiple rows can be linked to the same foreign key",
      "To prevent duplicate values in the primary key",
      "To enforce a strict one-to-one relationship between two tables",
      "To automatically create indexes for both keys"
    ],
    correctAnswer: "To enforce a strict one-to-one relationship between two tables",
    imageURL: null,
  },
  {
    index: 16,
    question: "In a one-to-many relationship, what additional column is necessary?",
    choices: [
      "An auto-incremented primary key",
      "A composite primary key",
      "A foreign key column in the 'many' table",
      "A foreign key column in the 'one' table"
    ],
    correctAnswer: "A foreign key column in the 'many' table",
    imageURL: null,
  },
  {
    index: 17,
    question: "In a many-to-many relationship, what is required to link the two tables?",
    choices: [
      "A composite key in the first table",
      "A junction (associate) table with foreign keys from both tables",
      "A primary key made of two columns",
      "A unique foreign key in both tables"
    ],
    correctAnswer: "A junction (associate) table with foreign keys from both tables",
    imageURL: null,
  },
  {
    index: 18,
    question: "In a one-to-one self-relation, what does the foreign key reference?",
    choices: [
      "The primary key of a different table.",
      "A foreign key from another table.",
      "The primary key of the same table.",
      "A composite key from the same table."
    ],
    correctAnswer: "The primary key of the same table."
  }
];