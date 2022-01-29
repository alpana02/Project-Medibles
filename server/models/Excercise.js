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
  excercises: {
    type: [
      {
        name: String,
        severity: String,
        duration: String,
        time: String,
      },
    ],
    required: true,
  },
});



module.exports = mongoose.model("excercise", ExcerciseSchema);
