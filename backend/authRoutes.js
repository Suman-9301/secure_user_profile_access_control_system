const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./User");
const { encrypt, decrypt } = require("./encryption");
const authMiddleware = require("./authMiddleware");

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, aadhaar } = req.body;

    if (!name || !email || !password || !aadhaar)
      return res.status(400).json({ message: "All fields required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const encryptedAadhaar = encrypt(aadhaar);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      aadhaar_encrypted: encryptedAadhaar
    });

    await user.save();
    res.json({ message: "User registered successfully" });

  } catch {
    res.status(500).json({ message: "Registration failed" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch {
    res.status(500).json({ message: "Login failed" });
  }
});

/* PROFILE (PROTECTED) */
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.json({
      name: user.name,
      email: user.email,
      aadhaar: decrypt(user.aadhaar_encrypted)
    });

  } catch {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

module.exports = router;
