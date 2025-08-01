// backend/models/Complaint.js
const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "Pending" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", ComplaintSchema);
