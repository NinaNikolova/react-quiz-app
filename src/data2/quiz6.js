export const mysql6 = [
  {
    index: 1,
    question: "What is the purpose of using the `@Query` annotation in Spring Data?",
    choices: [
      "To define custom SQL queries",
      "To map entities to database tables",
      "To create RESTful APIs",
      "To enable pagination",
    ],
    correctAnswer: "To define custom SQL queries",
    imageURL: null,
  },
  {
    index: 2,
    question: "How can you specify a native SQL query in Spring Data JPA?",
    choices: [
      "By using `@NativeQuery`",
      "By setting `nativeQuery = true` in the `@Query` annotation",
      "By using `@SQLQuery`",
      "By specifying `native` in the repository method name",
    ],
    correctAnswer: "By setting `nativeQuery = true` in the `@Query` annotation",
    imageURL: null,
  },
  {
    index: 3,
    question: "Which keyword is used in a Spring Data query method to indicate sorting?",
    choices: [
      "sortBy",
      "orderBy",
      "Sort",
      "Order",
    ],
    correctAnswer: "OrderBy",
    imageURL: null,
  },
  {
    index: 4,
    question: "What is the purpose of the `@Param` annotation in a Spring Data query?",
    choices: [
      "To specify a named parameter",
      "To indicate a pagination parameter",
      "To define a custom query name",
      "To manage transactions",
    ],
    correctAnswer: "To specify a named parameter",
    imageURL: null,
  },
  {
    index: 5,
    question: "How do you implement pagination in Spring Data queries?",
    choices: [
      "Using `Pageable` parameter",
      "Using `List` parameter",
      "Using `Offset` parameter",
      "Using `Limit` parameter",
    ],
    correctAnswer: "Using `Pageable` parameter",
    imageURL: null,
  },
  {
    index: 6,
    question: "What is the result type of a Spring Data query that returns a single entity?",
    choices: [
      "List",
      "Optional",
      "Page",
      "Set",
    ],
    correctAnswer: "Optional",
    imageURL: null,
  },
  {
    index: 7,
    question: "Which interface provides methods for pagination and sorting in Spring Data?",
    choices: [
      "Pageable",
      "Sort",
      "Page",
      "Slice",
    ],
    correctAnswer: "Page",
    imageURL: null,
  },
  {
    index: 8,
    question: "What is the purpose of `@QueryHints` in Spring Data?",
    choices: [
      "To specify query execution hints",
      "To define custom query parameters",
      "To optimize database connections",
      "To cache query results",
    ],
    correctAnswer: "To specify query execution hints",
    imageURL: null,
  },
  {
    index: 9,
    question: "How do you define a derived query method for finding entities by a specific attribute?",
    choices: [
      "Using the `findBy` prefix",
      "Using the `searchBy` prefix",
      "Using the `queryBy` prefix",
      "Using the `getBy` prefix",
    ],
    correctAnswer: "Using the `findBy` prefix",
    imageURL: null,
  },
  {
    index: 10,
    question: "Which of the following is a correct way to use a criteria query in Spring Data?",
    choices: [
      "Using `CriteriaBuilder` and `CriteriaQuery`",
      "Using `JPAQuery` and `JPQL`",
      "Using `NativeQuery` and `EntityManager`",
      "Using `HQL` and `SessionFactory`",
    ],
    correctAnswer: "Using `CriteriaBuilder` and `CriteriaQuery`",
    imageURL: null,
  },


];