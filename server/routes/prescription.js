const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Prescription = require("../models/Prescription");
const User = require("../models/User");

// ROUTE 1 : Add a new prescription : Login required
router.post("/addPrescription/:id", fetchUser, async (req, res) => {
  try {
    const user =  await User.findById(req.user.id);
    const { medicine, note } = req.body;
    const event = new Prescription({
      doctor: req.user.id,
      patient: req.params.id,
      note: note,
      medicines: medicine,
      doctorName: user.name,
    });
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Oops internal server error occured");
  }
});

// ROUTE 2 : Fetch patient prescription : Login required
router.get("/fetchprescriptionpatient", fetchUser, async (req, res) => {
  try {
    const events = await Prescription.find({ patient: req.user.id });
    res.json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

// ROUTE 3 : Delete prescription from patient site : Login required
router.delete("/deleteprescription/:id", fetchUser, async (req, res) => {
  try {
    //find the prescription to be deleted and then delete it
    let prescription = await Prescription.findById(req.params.id);
    if (!prescription) {
      return res.status(404).send("Such Prescription not found");
    }
    //if selected prescription is the loin users prescription
    if (prescription.patient.toString() !== req.user.id) {
      return res.status(401).send("Permission not granted");
    }
    prescription = await Prescription.findByIdAndDelete(req.params.id);
    res.send('Success!! Prescription deleted succesfully')
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

module.exports = router;
