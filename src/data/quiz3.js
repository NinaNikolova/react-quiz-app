export const mysql3 = [
  {
    index: 1,
    question: "Which function is used to get the current date and time in MySQL?",
    choices: [

      "CURRENT_DATE()",
      "GET_DATE()",
      "DATE_TIME()",
      "NOW()",
    ],
    correctAnswer: "NOW()",
    imageURL: null,
  },
  {
    index: 2,
    question: "What does the CONCAT() function do in MySQL?",
    choices: [
      "Counts the number of rows",
      "Converts text to uppercase",
      "Joins two or more strings together",
      "Returns the current timestamp",
    ],
    correctAnswer: "Joins two or more strings together",
    imageURL: null,
  },
  {
    index: 3,
    question: "Which function get number of used bytes of a string in MySQL?",
    choices: [
      "SIZE()",
      "LENGTH()",
      "COUNT()",
      "CHAR_LENGTH()",
    ],
    correctAnswer: "LENGTH()",
    imageURL: null,
  },
  {
    index: 4,
    question: "Which wildcard character is used to match any number of characters in a LIKE clause?",
    choices: [
      "%",
      "_",
      "*",
      "#",
    ],
    correctAnswer: "%",
    imageURL: null,
  },
  {
    index: 5,
    question: "Which wildcard character is used to match exactly one character in a LIKE clause?",
    choices: [
      "%",
      "_",
      "*",
      "?",
    ],
    correctAnswer: "_",
    imageURL: null,
  },
  {
    index: 6,
    question: "How can you convert a string to uppercase in MySQL?",
    choices: [
      "TO_UPPER()",
      "CAPITALIZE()",
      "UPPER()",
      "STRING_UPPER()",
    ],
    correctAnswer: "UPPER()",
    imageURL: null,
  },
  {
    index: 7,
    question: "What does the ROUND() function do in MySQL?",
    choices: [
      "Converts a number to a string",
      "Rounds a number to a specified number of decimal places",
      "Returns the integer part of a number",
      "Rounds a string to a specific length",

    ],
    correctAnswer: "Rounds a number to a specified number of decimal places",
    imageURL: null,
  },
  {
    index: 8,
    question: "Which function returns the number of rows in a result set?",
    choices: [
      "SUM()",
      "TOTAL()",
      "ROWS()",
      "COUNT()",

    ],
    correctAnswer: "COUNT()",
    imageURL: null,
  },
  {
    index: 9,
    question: "What does the SUBSTRING() function do in MySQL?",
    choices: [
      "Converts a string to a number",
      "Removes spaces from a string",
      "Extracts a substring from a string",

      "Finds the position of a substring",
    ],
    correctAnswer: "Extracts a substring from a string",
    imageURL: null,
  },
  {
    index: 10,
    question: "Which function is used to count the number of characters in a string in MySQL?",
    choices: [
      "CHAR_LENGTH()",
      "STRING_LENGTH()",
      "TEXT_LENGTH()",
      "SIZE()",
    ],
    correctAnswer: "CHAR_LENGTH()",
    imageURL: null,
  },
  {
    index: 11,
    question: "What is the result of SELECT SUBSTRING('abcdef', 3, 2) in MySQL?",
    choices: [
      "abcdef",
      "abc",
      "cd",
      "bcd",
    ],
    correctAnswer: "cd",
    imageURL: null,
  },
  {
    index: 12,
    question: "Which option does not return 'ab'?",
    choices: [
      "SELECT SUBSTRING('abcdef', 1, 2)",
      "SELECT SUBSTRING('abcdef', -6, 2)",
      "SELECT SUBSTR('abcdef' FROM 1 FOR 2)",
      "SELECT SUBSTR('abcdef', 0, 2)",
    ],
    correctAnswer: "SELECT SUBSTR('abcdef', 0, 2)",
    imageURL: null,
  },
  {
    index: 13,
    question: "Which option returns 'HTML Tutorial'?",
    choices: [
      'SELECT REPLACE("SQL Tutorial", "SQL", "HTML")',
      'SELECT REPLACE("SQL Tutorial", "sql", "HTML")',
      'SELECT REPLACE("sql Tutorial", "SQL", "HTML")',
      'SELECT REPLACE("sQl tutorial", "SQL", "HTML")',
    ],
    correctAnswer: 'SELECT REPLACE("SQL Tutorial", "SQL", "HTML")',
    imageURL: null,
  },
  {
    index: 14,
    question: "What is the result of the following MySQL query: REPLACE(REPLACE('apples and oranges', 'apples', 'bananas'), 'oranges', 'grapes')?",
    choices: [
      "bananas and grapes",
      "apples and grapes",
      "bananas and oranges",
      "apples and oranges",
    ],
    correctAnswer: "bananas and grapes",
    imageURL: null,
  },
  {
    index: 15,
    question: "What is the result of the following MySQL query: SELECT LEFT(RIGHT('abcdef', 4), 2)?",
    choices: [
      "ab",
      "cd",
      "de",
      "bc",
    ],
    correctAnswer: "cd",
    imageURL: null,
  },
  {
    index: 16,
    question: "What is the result of the following MySQL query: SELECT REVERSE(REPEAT('abc', 3))?",
    choices: [
      "cbacbacba",
      "abcabcabc",
      "cba",
      "cbacba",
    ],
    correctAnswer: "cbacbacba",
    imageURL: null,
  },
  {
    index: 17,
    question: "What is the result of the following MySQL query: SELECT LOCATE('b', 'abcdefb', 4)?",
    choices: [
      "2",
      "7",
      "4",
      "1",
    ],
    correctAnswer: "7",
    imageURL: null,
  },
  {
    index: 18,
    question: "What is the result of the following MySQL query: SELECT INSERT('abcdef', 3, 2, 'XYZ')?",
    choices: [
      "abXYZef",
      "abXYZcdef",
      "abXYdef",
      "abcXYZef",
    ],
    correctAnswer: "abXYZef",
    imageURL: null,
  },
  {
    index: 19,
    question: "Which operator in MySQL returns the remainder of a division?",
    choices: [
      "/ (Division)",
      "DIV (Integer Division)",
      "% or MOD",
      "^ (Power)"
    ],
    correctAnswer: "% or MOD",
    imageURL: null,
  },
  {
    index: 20,
    question: "What is the result of the following MySQL query: SELECT CONV('A', 16, 10)?",
    choices: [
      "10",
      "16",
      "11",
      "1"
    ],
    correctAnswer: "10",
    imageURL: null,
  },
  {
    index: 21,
    question: "What is the result of the following MySQL query: SELECT CONV('1010', 2, 10)?",
    choices: [
      "2",
      "10",
      "12",
      "1010"
    ],
    correctAnswer: "10",
    imageURL: null,
  },
  {
    index: 22,
    question: "What is the result of the following MySQL query: SELECT ROUND(12.345, 2)?",
    choices: [
      "12.34",
      "12.35",
      "12.30",
      "12.40"
    ],
    correctAnswer: "12.35",
    imageURL: null,
  },
  {
    index: 23,
    question: "What is the result of the following MySQL query: SELECT FLOOR(12.99)?",
    choices: [
      "12",
      "13",
      "12.9",
      "13.0"
    ],
    correctAnswer: "12",
    imageURL: null,
  },
  {
    index: 24,
    question: "What is the result of the following MySQL query: SELECT CEILING(12.01)?",
    choices: [
      "12",
      "13",
      "12.1",
      "12.0"
    ],
    correctAnswer: "13",
    imageURL: null,
  },
  {
    index: 25,
    question: "What is the result of the following MySQL query: SELECT CEILING(-4.23), FLOOR(-4.23)?",
    choices: [
      "-4, -4",
      "-5, -4",
      "-5, -5",
      "-4, -5"
    ],
    correctAnswer: "-4, -5",
    imageURL: null,
  },
  {
    index: 26,
    question: "What is the result of the following MySQL query: SELECT EXTRACT(YEAR FROM '2024-09-19')?",
    choices: [
      "09",
      "19",
      "2024",
      "2023"
    ],
    correctAnswer: "2024",
    imageURL: null,
  },
  {
    index: 27,
    question: "What is the result of the following MySQL query: SELECT RAND() * 10;?",
    choices: [
      "A decimal between 0 and 10",
      "An integer between 1 and 10",
      "A decimal between 1 and 10",
      "A random whole number"
    ],
    correctAnswer: "A decimal between 0 and 10",
    imageURL: null,
  },
  {
    index: 28,
    question: "What is the result of the following MySQL query: SELECT TIMESTAMPDIFF(MONTH, '2023-09-19', '2024-09-19')?",
    choices: [
      "11",
      "12",
      "13",
      "10"
    ],
    correctAnswer: "12",
    imageURL: null,
  },
  {
    index: 29,
    question: "What is the result of the following MySQL query: SELECT 'Yes' WHERE 'abcdef' LIKE 'a%f';?",
    choices: [

      "No",
      "NULL",
      "Yes",
      "Error"
    ],
    correctAnswer: "Yes",
    imageURL: null,
  },
  {
    index: 30,
    question: "What is the result of the following MySQL query: SELECT 'Match' WHERE 'abcd' LIKE 'a_c_';?",
    choices: [
      "No Match",
      "NULL",
      "Match",
      "Error"
    ],
    correctAnswer: "Match",
    imageURL: null,
  },
  {
    index: 31,
    question: "What is the result of the following MySQL query: SELECT DATE_ADD('2016-09-10 00:00:00', INTERVAL 1 DAY);?",
    choices: [
      "2016-09-18 00:00:00",
      "2016-09-20 00:00:00",
      "2016-09-11 00:00:00",
      "Error"
    ],
    correctAnswer: "2016-09-11 00:00:00",
    imageURL: null,
  },
  {
    index: 32,
    question: "What is the result of the following MySQL query: SELECT IF(5 > 3, IF(10 > 5, 'A', 'B'), 'C') AS result;?",
    choices: [
      "A",
      "B",
      "C",
      "Error"
    ],
    correctAnswer: "A"
  },
  {
    index: 33,
    question: "What does the query `SELECT DATEDIFF(now(), '2024-01-01')` return in MySQL?",
    choices: [
      "The number of months between today's date and January 1, 2024",
      "The number of days between today's date and January 1, 2024",
      "The difference in years between today's date and January 1, 2024",
      "The number of weeks between today's date and January 1, 2024"
    ],
    correctAnswer: "The number of days between today's date and January 1, 2024",
    imageURL: null
  }


];