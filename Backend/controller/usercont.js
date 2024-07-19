const express = require("express");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");


exports.signup = async (req, res) => {
    try {
      const { fullname, email, password, number, confirmPassword } = req.body;
  
      // Check if all required fields are provided
      if (!fullname || !email || !number || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
  
      const user = await User.findOne({ email });
  
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashPassword = await bcryptjs.hash(password, 10);
  
      const createdUser = new User({
        fullname: fullname,
        email: email,
        password: hashPassword,
        number: number,
        confirmPassword: hashPassword // You should not store confirmPassword separately; it's just for validation
      });
  
      await createdUser.save();
  
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
          number: createdUser.number,
        },
      });
    } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Login
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if all required fields are 
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const user = await User.findOne({ email });
  
      // Check if user exists
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          number: user.number,
        },
      });
    } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  