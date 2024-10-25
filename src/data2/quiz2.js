// ORM Fundamentals
export const mysql2 = [
	{
		index: 1,
		question: "What does ORM stand for in the context of databases?",
		choices: [
			"Object-Relational Model",
			"Object-Relational Mapping",
			"Object-Relational Management",
			"Object-Relational Module",
		],
		correctAnswer: "Object-Relational Mapping",
		imageURL: null,
	},
	{
		index: 2,
		question: "Which of the following is a benefit of using ORM?",
		choices: [
			"Direct SQL manipulation",
			"Improved database performance",
			"Increased productivity and maintainability",
			"Less code compared to raw SQL",
		],
		correctAnswer: "Increased productivity and maintainability",
		imageURL: null,
	},
	{
		index: 3,
		question: "What is the primary role of an ORM framework?",
		choices: [
			"Manage database connections",
			"Map database tables to objects",
			"Execute raw SQL queries",
			"Generate database schemas",
		],
		correctAnswer: "Map database tables to objects",
		imageURL: null,
	},
	{
		index: 4,
		question: "Which of the following is a popular ORM framework in Java?",
		choices: [
			"Hibernate",
			"Spring JDBC",
			"Java Server Faces (JSF)",
			"Java Persistence API (JPA)",
		],
		correctAnswer: "Hibernate",
		imageURL: null,
	},
	{
		index: 5,
		question: "What is lazy loading in the context of ORM?",
		choices: [
			"Loading all data at once",
			"Loading data only when it is needed",
			"Eagerly fetching all associated data",
			"Caching data for performance",
		],
		correctAnswer: "Loading data only when it is needed",
		imageURL: null,
	},
	{
		index: 6,
		question: "In ORM, what does the term 'entity' refer to?",
		choices: [
			"A table in a database",
			"A row in a table",
			"A class representing a database table",
			"A SQL query",
		],
		correctAnswer: "A class representing a database table",
		imageURL: null,
	},
	{
		index: 7,
		question: "Which of the following is a common feature of ORM frameworks?",
		choices: [
			"Automatic schema migration",
			"Manual data mapping",
			"SQL code generation",
			"Support for multiple database engines",
		],
		correctAnswer: "Support for multiple database engines",
		imageURL: null,
	},
	{
		index: 8,
		question: "What is the purpose of the EntityManager in JPA?",
		choices: [
			"To manage database connections",
			"To create and manage entities",
			"To execute raw SQL queries",
			"To handle transactions",
		],
		correctAnswer: "To create and manage entities",
		imageURL: null,
	},
	{
		index: 9,
		question: "What does the term 'mapping' refer to in ORM?",
		choices: [
			"The process of converting objects to database records",
			"The process of writing SQL queries",
			"The process of connecting to a database",
			"The process of caching data",
		],
		correctAnswer: "The process of converting objects to database records",
		imageURL: null,
	},
	{
		index: 10,
		question: "Which annotation is commonly used to define an entity in JPA?",
		choices: [
			"@Table",
			"@Entity",
			"@Column",
			"@Data",
		],
		correctAnswer: "@Entity",
		imageURL: null,
	},
	{
		index: 11,
		question: "What is not ORM?",
		choices: [
			"Technique for converting data between incompatible type systems using object-oriented programming languages",
			"Object-Relational Mapping (ORM) allows manipulating databases using common classes and objects",
			"Generating front-end interfaces from back-end data",
		],
		correctAnswer: "Generating front-end interfaces from back-end data",
		imageURL: null,
	},
	{
		index: 12,
		question: "Why do we need ORM? What is not true about this?",
		choices: [
			"In OOP, data-management tasks act on objects that are almost always non-scalar values",
			"Many database can only store and manipulate scalar values, organized within tables",
			"We must manually convert values into groups of simpler values to store in DB and convert them back when we retrieve data",
			"ORM enables to manage inputs in application",
		],
		correctAnswer: "ORM enables to manage inputs in application",
		imageURL: null,
	},
	{
		index: 13,
		question: "What is a key difference between JDBC and ORM?",
		choices: [
			"JDBC is used for complex domain-driven applications, while ORM is for simple data presentation",
			"ORM is suitable for complex object relations, while JDBC is better for simple, direct data retrieval",
			"JDBC allows automatic mapping between classes and tables, while ORM does not",
			"ORM is only for relational databases, whereas JDBC works with any data type",
		],
		correctAnswer: "ORM is suitable for complex object relations, while JDBC is better for simple, direct data retrieval",
		imageURL: null,
	},
	{
		index: 14,
		question: "In which situation is JDBC generally preferred over ORM?",
		choices: [
			"When the application is domain-driven and has complex relationships",
			"When there are few complex relationships and data is presented directly from the database",
			"When automatic mapping between objects and tables is required",
			"When data persistence is managed without relational databases",
		],
		correctAnswer: "When there are few complex relationships and data is presented directly from the database",
		imageURL: null,
	},
	{
		index: 15,
		question: "Why might ORM be chosen over JDBC for certain applications?",
		choices: [
			"ORM is easier to implement for simple, direct data queries",
			"ORM simplifies management of complex object relationships in domain-driven applications",
			"ORM allows direct SQL queries without any abstraction",
			"ORM is specifically designed for non-relational databases",
		],
		correctAnswer: "ORM simplifies management of complex object relationships in domain-driven applications",
		imageURL: null,
	},
	{
		index: 16,
		question: "Which of the following is NOT a typical functionality provided by ORM frameworks?",
		choices: [
			"Automatically generate SQL for data operations like persist, update, and delete",
			"Create an object model based on the database schema (DB First model)",
			"Directly query the database without any SQL generation",
			"Generate a database schema from an object model (Code First model)",
		],
		correctAnswer: "Directly query the database without any SQL generation",
		imageURL: null,
	},
	{
		index: 17,
		question: "Which of the following layers in an application architecture is for ORM/JDBS?",
		choices: [
			"Presentation Layer",
			"Service Layer",
			"Persistence Layer",
		],
		correctAnswer: "Persistence Layer",
		imageURL: null,
	},
	{
		index: 18,
		question: "Which of the following is NOT a typical functionality provided by ORM frameworks?",
		choices: [
			"Automatically generating SQL for operations like persist, update, delete, merge, createQuery and so on",
			"Creating a database schema directly from an object model (Code First model)",
			"Generating complex manual SQL queries for data operations",
			"Building an object model from an existing database schema (DB First model)",
		],
		correctAnswer: "Generating complex manual SQL queries for data operations",
		imageURL: null,
	},
	{
		index: 19,
		question: "Which of the following is NOT data operations with ORM?",
		choices: [
			"Save entity to DB - Student student = new Student('George', 'Brown'); session.save(student);",
			"Retrieve data from DB - Student student = (Student) session.get(Student.class, 1);",
			"Using HQL - List<Student> studentList = session.createQuery('FROM Student').toList();",
			"Using SQL - String sql = 'SELECT * FROM Employee'; SQLQuery query = session.createSQLQuery(sql); query.addEntity(Employee.class); List<Employee> results = query.list();",
			"SELECT * FROM employees"
		],
		correctAnswer: "SELECT * FROM employees",
		imageURL: null,
	},
	{
		index: 20,
		question: "What is not ORM advantage?",
		choices: [
			"Productivity",
			"Maintainability",
			"Reduced performance",
			"Performance",
			"Database vendor independence",
		],
		correctAnswer: "Reduced performance",
		imageURL: null,
	},
	{
		index: 20,
		question: "What is not ORM disadvantage?",
		choices: [
			"Reduces flexibility",
			"Reduced performance",
			"Maintainability",
			"Reduces flexibility",
		],
		correctAnswer: "Maintainability",
		imageURL: null,
	},
	{
		index: 21,
		question: "Object-Relational Mapping (ORM) allows manipulating databases using common classes and objects. The main difference, between JDBC and ORM, is complexity. Is this true?",
		choices: [
			"Yes",
			"No",
		],
		correctAnswer: "Yes",
		imageURL: null,
	},
];