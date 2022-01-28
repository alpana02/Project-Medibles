const mongoose = require("mongoose");
const { Schema } = mongoose;

const PrescriptionSchema = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  patient: {
    type: String,
    required: true,
  },
  medicines: {
    type: [
      {
        name: String,
        dosage: String,
        duration: String,
        time: String,
        frequency: String,
      },
    ],
    required: true,
  },
  note: {
    type: String,
  },
});
module.exports = mongoose.model("prescription", PrescriptionSchema);
