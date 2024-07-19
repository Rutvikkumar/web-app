const express = require("express");
const Form = require("../models/formmodel.js");


exports.saveUserData = async (req, res) => {
  try {
    const {
      address,
      fileNumber,
      vehicleNumber,
      vehicleType,
      mobileNumber,
      carProblem,
      driverName,
    } = req.body;

    const newForm = new Form({
      address: address,
      fileNumber: fileNumber,
      vehicleNumber: vehicleNumber,
      vehicleType: vehicleType,
      mobileNumber: mobileNumber,
      carProblem: carProblem,
      driverName: driverName,
    });

    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getData = async (req, res) => {
  try {
    const data = await Form.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
