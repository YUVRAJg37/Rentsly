const mongoose = require("mongoose");

const hostel_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  college: {
    type: String,
    require: true,
    trim: true,
  },
});

const Hostel_data = new mongoose.model("sample_hostel_cluster", hostel_schema);
module.exports = Hostel_data;
