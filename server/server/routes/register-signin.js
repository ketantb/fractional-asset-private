const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const UsersData = require("../Model/registrationModel");
const userMiddleware = require("../midleware/userMiddlware");

// Create a new account
router.post(
  "/register",
  [
    body("name")
      .notEmpty()
      .withMessage("Name field cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Name should be greather than 3 characters"),
    body("email")
      .notEmpty()
      .withMessage("Email cannot be empty")
      .isEmail()
      .withMessage("Invalid Email"),
    body("contact")
      .notEmpty()
      .withMessage("Contact number cannot be empty")
      .isLength({ min: 10, max: 10 })
      .withMessage("Contact must be 10 digits")
      .matches(/^\d+$/)
      .withMessage("Contact number must contain only digits"),
    body("password")
      .notEmpty()
      .withMessage("Password cannot be empty")
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
      .withMessage(
        "Password must contain at least one capital letter and one symbol"
      )
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, resp) => {
    const { name, email, password, contact } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return resp.json({ success: false, message: errors.array() });
      }

      const existingUser = await UsersData.findOne({ email });
      if (existingUser) {
        console.log("Account already exist", existingUser);
        resp.status(409).json({
          success: false,
          message: "Account width same email and contact already exist",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UsersData.create({
          name,
          email,
          contact,
          password: hashedPassword,
        });
        console.log("newUser=>", newUser);
        resp.status(201).json({
          success: true,
          message: "Account created successfully",
          data: newUser,
        });
      }
    } catch (error) {
      resp.status(400).json({ message: error });
    }
  }
);

//Sign in route (only registered accounts can access)
router.post("/signin", async (req, resp) => {
  const { email, password } = req.body;

  try {
    const existingAccount = await UsersData.findOne({ email: email });
    if (existingAccount) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingAccount.password
      );
      if (passwordMatch) {
        const dataTobeSentToFrontend = {
          _id: existingAccount._id,
        };
        const token = jwt.sign(
          dataTobeSentToFrontend,
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
        );
        console.log("signined in data=>", existingAccount, token);
        resp.json({
          success: true,
          message: "SignIn successful",
          data: { signinData: existingAccount, token: token },
        });
      } else {
        resp.json({ success: false, message: "Password not correct" });
      }
    } else {
      resp.json({
        success: false,
        message: "User not found. Please create new account",
      });
    }
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
});

//specific user detail (login required)
router.get("/user-data", userMiddleware, async (req, resp) => {
  console.log(req.userId);
  console.log("hey user-data");
  try {
    const userData = await UsersData.find({ _id: req.userId });
    resp.json({ success: true, userData: userData });
  } catch (err) {
    console.log(err);
    resp.json({ success: false, message: err });
  }
});

module.exports = router;
