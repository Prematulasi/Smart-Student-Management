const mongoose = require("mongoose");

const jobSchema =
new mongoose.Schema(
{
  company: String,
  role: String,
  package: String,
  location: String,
  eligibility: String
},
{ timestamps: true }
);

module.exports =
mongoose.model(
  "Job",
  jobSchema
);