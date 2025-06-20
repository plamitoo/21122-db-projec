const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library");

    // ======= READ all authors =======
    const allAuthors = await db.collection("authors").find().toArray();
    console.log("All authors:", allAuthors);

    // ======= READ authors filtered by nationality =======
    const britishAuthors = await db.collection("authors").find({ nationality: "British" }).toArray();
    console.log("British authors:", britishAuthors);

    // ======= READ authors filtered by nationality and birthYear =======
    const britishBornBefore1900 = await db.collection("authors").find({
      nationality: "British",
      birthYear: { $lt: 1900 }
    }).toArray();
    console.log("British authors born before 1900:", britishBornBefore1900);

    // ======= UPDATE one author =======
    await db.collection("authors").updateOne(
      { name: "George Orwell" },
      { $set: { awards: ["Prometheus Hall of Fame", "Retro Hugo Award"] } }
    );

    // ======= DELETE one author =======
    await db.collection("authors").deleteOne({ name: "Mark Twain" });

    // ======= AGGREGATE books grouped by genre with total copies =======
    const booksByGenre = await db.collection("books").aggregate([
      { $group: { _id: "$genre", totalCopies: { $sum: "$copies" }, count: { $sum: 1 } } },
      { $sort: { totalCopies: -1 } }
    ]).toArray();
    console.log("Books grouped by genre:", booksByGenre);

    // Добави други заявки по същия начин за останалите колекции...

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
