// Prerequisites:
// npm install mongodb
//
// MongoDB Setup Commands in mongosh:
// use supermarket;
// db.products.insertMany([
//   { id: 1, name: "Soap", brand: "Dove", price: 45 },
//   { id: 2, name: "Soap", brand: "Lux", price: 30 },
//   { id: 3, name: "Rice", brand: "IndiaGate", price: 90 },
//   { id: 4, name: "Rice", brand: "Daawat", price: 80 }
// ]);

const { MongoClient } = require("mongodb");
const readline = require("readline");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  try {
    await client.connect();
    const collection = client.db("supermarket").collection("products");

    rl.question("Enter product ID or name to search: ", async (query) => {
      const isNum = !isNaN(query) && query.trim() !== "";
      const filter = isNum
        ? { id: Number(query) }
        : { name: { $regex: query, $options: "i" } };

      const results = await collection.find(filter).toArray();
      console.log("\n--- Search Results ---");
      console.table(results);

      rl.close();
      await client.close();
    });
  } catch (err) {
    console.error("Error:", err.message);
    rl.close();
  }
}

main();
