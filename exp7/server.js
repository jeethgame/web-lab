// Prerequisites:
// npm install express cors
// Run server: node server.js

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// In-memory data store
let products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mouse", price: 450 },
  { id: 3, name: "Keyboard", price: 1100 }
];

// REST API: GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// REST API: POST create a new product
app.post("/api/products", (req, res) => {
  const item = {
    id: products.length + 1,
    name: req.body.name,
    price: Number(req.body.price)
  };
  products.push(item);
  res.status(201).json(item);
});

app.listen(3000, () => {
  console.log("REST API Server running at http://localhost:3000");
});
