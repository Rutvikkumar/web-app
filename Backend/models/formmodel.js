const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  fileNumber: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  carProblem: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Form", FormSchema);

