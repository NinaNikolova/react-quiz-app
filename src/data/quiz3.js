export const mysql3 = [
  {
    question: "Which function is used to get the current date and time in MySQL?",
    choices: [

      "CURRENT_DATE()",
      "GET_DATE()",
      "DATE_TIME()",
      "NOW()",
    ],
    correctAnswer: "NOW()",
  },
  {
    question: "What does the CONCAT() function do in MySQL?",
    choices: [
      "Counts the number of rows",
      "Converts text to uppercase",
      "Joins two or more strings together",
      "Returns the current timestamp",
    ],
    correctAnswer: "Joins two or more strings together",
  },
  {
    question: "Which function is used to find the length of a string in MySQL?",
    choices: [
      "SIZE()",
      "LENGTH()",
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
      "TO_UPPER()",
      "CAPITALIZE()",
      "UPPER()",
      "STRING_UPPER()",
    ],
    correctAnswer: "UPPER()",
  },
  {
    question: "What does the ROUND() function do in MySQL?",
    choices: [
      "Converts a number to a string",
      "Rounds a number to a specified number of decimal places",
      "Returns the integer part of a number",
      "Rounds a string to a specific length",

    ],
    correctAnswer: "Rounds a number to a specified number of decimal places",
  },
  {
    question: "Which function returns the number of rows in a result set?",
    choices: [
      "SUM()",
      "TOTAL()",
      "ROWS()",
      "COUNT()",

    ],
    correctAnswer: "COUNT()",
  },
  {
    question: "What does the SUBSTRING() function do in MySQL?",
    choices: [
      "Converts a string to a number",
      "Removes spaces from a string",
      "Extracts a substring from a string",

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
  {
    question: "What is the result of SUBSTRING('abcdef', 3, 2) in MySQL?",
    choices: [
      "abcdef",
      "abc",
      "cd",
      "bcd",
    ],
    correctAnswer: "cd",
  },
  {
    question: "Which option does not return 'ab'?",
    choices: [
      "SELECT SUBSTRING('abcdef', 1, 2)",
      "SELECT SUBSTRING('abcdef', -6, 2)",
      "SELECT SUBSTR('abcdef' FROM 1 FOR 2)",
      "SELECT SUBSTR('abcdef', 0, 2)",
    ],
    correctAnswer: "SELECT SUBSTR('abcdef', 0, 2)",
  },
];