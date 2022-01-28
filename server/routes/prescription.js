const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Prescription = require("../models/Prescription");
const User = require("../models/User");

// ROUTE 1 : Add a new prescription : Login required
router.post("/addPrescription/:id", fetchUser, async (req, res) => {
  try {
    const { meds, note } = req.body;
    const event = new Prescription({
      doctor: req.user.id,
      patient: req.params.id,
      medicines: meds,
      note: note,
    });
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Oops internal server error occured");
  }
});

module.exports = router;
