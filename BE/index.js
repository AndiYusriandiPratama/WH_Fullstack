require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.CUSTOM_PORT;

// Membuat route untuk halaman utama
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Mendengarkan permintaan pada port yang ditentukan
app.listen(port, () => {
  console.log(`Aplikasi Express berjalan pada http://localhost:${port}`);
});
