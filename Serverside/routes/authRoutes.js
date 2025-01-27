const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, phone, password, role, address, businessName, businessContact } = req.body;

  // Validate required fields
  if (!username || !email || !phone || !password || !role) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  try {
    const newUser = new User({
      username,
      email,
      phone,
      password,
      role,
      address: role === 3000 ? address : undefined,
      businessName: role === 3000 ? businessName : undefined,
      businessContact: role === 3000 ? businessContact : undefined,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during registration.", error });
  }
});

module.exports = router;
