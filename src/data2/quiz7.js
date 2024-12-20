export const mysql7 = [
  {
    index: 1,
    question: "What is auto mapping in Spring Data?",
    choices: [
      "Automatically creating database tables from entities",
      "Mapping Java objects to database entities without manual intervention",
      "Automatically generating REST APIs from repositories",
      "Mapping database records to DTOs",
    ],
    correctAnswer: "Mapping Java objects to database entities without manual intervention",
    imageURL: null,
  },
  {
    index: 2,
    question: "Which annotation is used to specify a field mapping in Spring Data?",
    choices: [
      "@Column",
      "@Mapping",
      "@Entity",
      "@Table",
    ],
    correctAnswer: "@Column",
    imageURL: null,
  },
  {
    index: 3,
    question: "What is the purpose of the `@Entity` annotation?",
    choices: [
      "To define a class as a JPA entity",
      "To configure a database connection",
      "To create a Spring service",
      "To specify a repository interface",
    ],
    correctAnswer: "To define a class as a JPA entity",
    imageURL: null,
  },
  {
    index: 4,
    question: "How does Spring Data handle the mapping of collections in entities?",
    choices: [
      "Using XML configuration only",
      "Through annotations like `@OneToMany` or `@ManyToMany`",
      "By requiring manual mapping",
      "Using a special `Map` class",
    ],
    correctAnswer: "Through annotations like `@OneToMany` or `@ManyToMany`",
    imageURL: null,
  },
  {
    index: 5,
    question: "Which interface provides a convenient way to access entity properties in Spring Data?",
    choices: [
      "JpaRepository",
      "EntityManager",
      "CriteriaBuilder",
      "SessionFactory",
    ],
    correctAnswer: "JpaRepository",
    imageURL: null,
  },
  {
    index: 6,
    question: "What happens when an entity is updated in Spring Data?",
    choices: [
      "The entity is deleted",
      "The changes are automatically persisted",
      "A new entity is created",
      "The entity is ignored",
    ],
    correctAnswer: "The changes are automatically persisted",
    imageURL: null,
  },
  {
    index: 7,
    question: "How can you prevent a field from being persisted in Spring Data?",
    choices: [
      "Using `@Transient` annotation",
      "Using `@Ignore` annotation",
      "Using `@Column(nullable = false)`",
      "Using `@NotMapped` annotation",
    ],
    correctAnswer: "Using `@Transient` annotation",
    imageURL: null,
  },
  {
    index: 8,
    question: "Which Spring Data feature allows you to map complex types to simple types?",
    choices: [
      "Custom Converters",
      "Mapping Strategies",
      "DTO Mapping",
      "Entity Relations",
    ],
    correctAnswer: "Custom Converters",
    imageURL: null,
  },
  {
    index: 9,
    question: "What is the role of the `@Table` annotation in an entity class?",
    choices: [
      "To define the database table name",
      "To specify the primary key",
      "To map relationships",
      "To configure entity caching",
    ],
    correctAnswer: "To define the database table name",
    imageURL: null,
  },
  {
    index: 10,
    question: "How do you automatically map JSON data to a Java object in Spring Data?",
    choices: [
      "Using `@JsonMapping` annotation",
      "Using `ObjectMapper` from Jackson",
      "Using `@RequestBody` in controller methods",
      "Using `@JsonProperty` annotations",
    ],
    correctAnswer: "Using `@RequestBody` in controller methods",
    imageURL: null,
  },

];