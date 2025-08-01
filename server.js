// backend/server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const users = require("./routes/users");
const complaints = require("./routes/complaints");
const cors = require("cors");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/complaints", complaints);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
