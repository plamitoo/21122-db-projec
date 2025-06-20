const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library");

    // ======= INSERT authors =======
    await db.collection("authors").insertMany([
      { name: "George Orwell", birthYear: 1903, nationality: "British", awards: ["Prometheus Hall of Fame"] },
      { name: "J.K. Rowling", birthYear: 1965, nationality: "British", awards: ["Hugo Award"] },
      { name: "Stephen King", birthYear: 1947, nationality: "American", awards: ["Bram Stoker Award"] },
      { name: "Agatha Christie", birthYear: 1890, nationality: "British", awards: [] },
      { name: "Isaac Asimov", birthYear: 1920, nationality: "American", awards: ["Hugo Award", "Nebula Award"] },
      { name: "Margaret Atwood", birthYear: 1939, nationality: "Canadian", awards: ["Booker Prize"] },
      { name: "Ernest Hemingway", birthYear: 1899, nationality: "American", awards: ["Nobel Prize"] },
      { name: "Haruki Murakami", birthYear: 1949, nationality: "Japanese", awards: [] },
      { name: "Jane Austen", birthYear: 1775, nationality: "British", awards: [] },
      { name: "Mark Twain", birthYear: 1835, nationality: "American", awards: [] }
    ]);

    // ======= INSERT books =======
    await db.collection("books").insertMany([
      { title: "1984", genre: "Dystopian", year: 1949, author: { name: "George Orwell" }, tags: ["political", "classic"], copies: 5 },
      { title: "Animal Farm", genre: "Political Satire", year: 1945, author: { name: "George Orwell" }, tags: ["satire"], copies: 3 },
      { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", year: 1997, author: { name: "J.K. Rowling" }, tags: ["magic", "children"], copies: 7 },
      { title: "The Shining", genre: "Horror", year: 1977, author: { name: "Stephen King" }, tags: ["thriller", "horror"], copies: 4 },
      { title: "Murder on the Orient Express", genre: "Mystery", year: 1934, author: { name: "Agatha Christie" }, tags: ["detective", "classic"], copies: 6 },
      { title: "Foundation", genre: "Science Fiction", year: 1951, author: { name: "Isaac Asimov" }, tags: ["sci-fi"], copies: 5 },
      { title: "The Handmaid's Tale", genre: "Dystopian", year: 1985, author: { name: "Margaret Atwood" }, tags: ["feminism", "dystopia"], copies: 3 },
      { title: "The Old Man and the Sea", genre: "Literary Fiction", year: 1952, author: { name: "Ernest Hemingway" }, tags: ["classic"], copies: 4 },
      { title: "Norwegian Wood", genre: "Romance", year: 1987, author: { name: "Haruki Murakami" }, tags: ["love", "tragedy"], copies: 2 },
      { title: "Pride and Prejudice", genre: "Romance", year: 1813, author: { name: "Jane Austen" }, tags: ["classic", "novel"], copies: 5 }
    ]);

    // ======= INSERT readers =======
    await db.collection("readers").insertMany([
      {
        name: "Ivan Ivanov",
        email: "ivan@example.com",
        address: { street: "Bulgaria Blvd", city: "Sofia", zip: "1000" },
        borrowedBooks: ["1984", "Foundation"]
      },
      {
        name: "Maria Dimitrova",
        email: "maria@gmail.com",
        address: { street: "Vitosha St", city: "Sofia", zip: "1001" },
        borrowedBooks: []
      },
      {
        name: "Peter Petrov",
        email: "peter@abv.bg",
        address: { street: "Rakovski", city: "Plovdiv", zip: "4000" },
        borrowedBooks: ["Harry Potter and the Sorcerer's Stone"]
      },
      {
        name: "Elena Georgieva",
        email: "elena@gmail.com",
        address: { street: "Tsar Osvoboditel", city: "Varna", zip: "9000" },
        borrowedBooks: ["Murder on the Orient Express"]
      },
      {
        name: "Nikolay Nikolov",
        email: "nikolay@example.com",
        address: { street: "Cherni Vrah", city: "Sofia", zip: "1000" },
        borrowedBooks: []
      },
      {
        name: "Stefan Stefanov",
        email: "stefan@abv.bg",
        address: { street: "Aleksandrovska", city: "Burgas", zip: "8000" },
        borrowedBooks: ["The Shining"]
      },
      {
        name: "Ivanka Ivanova",
        email: "ivanka@example.com",
        address: { street: "Tsarigradsko Shose", city: "Sofia", zip: "1000" },
        borrowedBooks: ["Pride and Prejudice"]
      },
      {
        name: "Georgi Georgiev",
        email: "georgi@gmail.com",
        address: { street: "Hristo Botev", city: "Varna", zip: "9000" },
        borrowedBooks: []
      },
      {
        name: "Kristina Koleva",
        email: "kristina@gmail.com",
        address: { street: "Tsar Simeon", city: "Plovdiv", zip: "4000" },
        borrowedBooks: ["The Handmaid's Tale"]
      },
      {
        name: "Dimitar Dimitrov",
        email: "dimitar@example.com",
        address: { street: "Maria Luiza", city: "Sofia", zip: "1000" },
        borrowedBooks: []
      }
    ]);

    // ======= INSERT loans =======
    await db.collection("loans").insertMany([
      {
        bookTitle: "1984",
        readerName: "Ivan Ivanov",
        loanDate: new Date("2024-05-01"),
        returnDate: new Date("2024-05-15"),
        returned: true
      },
      {
        bookTitle: "Foundation",
        readerName: "Ivan Ivanov",
        loanDate: new Date("2024-06-01"),
        returnDate: null,
        returned: false
      },
      {
        bookTitle: "Harry Potter and the Sorcerer's Stone",
        readerName: "Peter Petrov",
        loanDate: new Date("2024-06-10"),
        returnDate: null,
        returned: false
      },
      {
        bookTitle: "Murder on the Orient Express",
        readerName: "Elena Georgieva",
        loanDate: new Date("2024-05-20"),
        returnDate: new Date("2024-06-05"),
        returned: true
      },
      {
        bookTitle: "The Shining",
        readerName: "Stefan Stefanov",
        loanDate: new Date("2024-06-11"),
        returnDate: null,
        returned: false
      },
      {
        bookTitle: "Pride and Prejudice",
        readerName: "Ivanka Ivanova",
        loanDate: new Date("2024-06-01"),
        returnDate: null,
        returned: false
      },
      {
        bookTitle: "The Handmaid's Tale",
        readerName: "Kristina Koleva",
        loanDate: new Date("2024-05-25"),
        returnDate: new Date("2024-06-10"),
        returned: true
      },
      {
        bookTitle: "Norwegian Wood",
        readerName: "Georgi Georgiev",
        loanDate: new Date("2024-06-05"),
        returnDate: null,
        returned: false
      },
      {
        bookTitle: "Animal Farm",
        readerName: "Maria Dimitrova",
        loanDate: new Date("2024-06-02"),
        returnDate: null,
        returned: false
      },
      {
        bookTitle: "The Old Man and the Sea",
        readerName: "Dimitar Dimitrov",
        loanDate: new Date("2024-06-10"),
        returnDate: null,
        returned: false
      }
    ]);

    // ======= INSERT staff =======
    await db.collection("staff").insertMany([
      {
        name: "Maria Petrova",
        position: "Librarian",
        contact: { phone: "+359888123456", email: "maria@library.com" },
        workingHours: ["9:00-17:00"],
        skills: ["cataloging", "customer service"]
      },
      {
        name: "Ivan Georgiev",
        position: "Assistant Librarian",
        contact: { phone: "+359887654321", email: "ivan@library.com" },
        workingHours: ["10:00-18:00"],
        skills: ["inventory management", "data entry"]
      },
      {
        name: "Petya Ivanova",
        position: "Archivist",
        contact: { phone: "+359886543210", email: "petya@library.com" },
        workingHours: ["8:00-16:00"],
        skills: ["document preservation", "research"]
      },
      {
        name: "Georgi Kolev",
        position: "Technician",
        contact: { phone: "+359889876543", email: "georgi@library.com" },
        workingHours: ["9:00-17:00"],
        skills: ["IT support", "equipment maintenance"]
      },
      {
        name: "Nikolay Ivanov",
        position: "Security",
        contact: { phone: "+359887777777", email: "nikolay@library.com" },
        workingHours: ["24/7"],
        skills: ["surveillance", "emergency response"]
      },
      {
        name: "Elena Dimitrova",
        position: "Cleaner",
        contact: { phone: "+359885555555", email: "elena@library.com" },
        workingHours: ["7:00-15:00"],
        skills: ["cleaning", "maintenance"]
      },
      {
        name: "Stefan Nikolov",
        position: "IT Manager",
        contact: { phone: "+359884444444", email: "stefan@library.com" },
        workingHours: ["9:00-18:00"],
        skills: ["networking", "system administration"]
      },
      {
        name: "Ivanka Georgieva",
        position: "HR Specialist",
        contact: { phone: "+359883333333", email: "ivanka@library.com" },
        workingHours: ["9:00-17:00"],
        skills: ["recruitment", "employee relations"]
      },
      {
        name: "Dimitar Petrov",
        position: "Accountant",
        contact: { phone: "+359882222222", email: "dimitar@library.com" },
        workingHours: ["9:00-17:00"],
        skills: ["bookkeeping", "financial reporting"]
      },
      {
        name: "Kristina Ivanova",
        position: "Manager",
        contact: { phone: "+359881111111", email: "kristina@library.com" },
        workingHours: ["9:00-19:00"],
        skills: ["leadership", "strategic planning"]
      }
    ]);

    console.log("Documents inserted successfully.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
