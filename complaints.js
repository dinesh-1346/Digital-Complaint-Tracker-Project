// backend/routes/complaints.js
const express = require("express");
const Complaint = require("../models/Complaint");
const jwt = require("jsonwebtoken");

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch {
    res.sendStatus(403);
  }
};

router.post("/", auth, async (req, res) => {
  const complaint = new Complaint({ ...req.body, user: req.user });
  await complaint.save();
  res.status(201).json(complaint);
});

router.get("/", auth, async (req, res) => {
  const complaints = await Complaint.find({ user: req.user });
  res.json(complaints);
});

module.exports = router;
