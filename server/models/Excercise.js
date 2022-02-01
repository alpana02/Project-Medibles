const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExcerciseSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  patient: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  doctorName: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  excercises: {
    type: [
      {
        name: String,
        severity: String,
        perActivityTime: String,
        total: String
      },
    ],
    required: true,
  },
  completed: {
    type: Boolean,
  },
});



module.exports = mongoose.model("excercise", ExcerciseSchema);
