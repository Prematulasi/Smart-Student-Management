const mongoose = require("mongoose");

const assignmentSchema =
new mongoose.Schema(
{
  title: String,
  description: String,
  dueDate: Date,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
},
{ timestamps: true }
);

module.exports =
mongoose.model(
  "Assignment",
  assignmentSchema
);