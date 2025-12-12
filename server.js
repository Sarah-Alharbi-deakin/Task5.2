// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const booksRoute = require("./routes/booksRoute");
app.use(booksRoute);

// (اختياري) error handler بسيط
app.use((err, _req, res, _next) => {
  res.status(500).json({ statusCode: 500, message: err.message || "Server error" });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
