const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Excercise = require("../models/Excercise");
const User = require("../models/User");

// ROUTE 1 : Add a new excercise : Login required
router.post("/addExcercise/:id", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { excercise, noteExcercise } = req.body;
    const event = new Excercise({
      doctor: req.user.id,
      patient: req.params.id,
      startDate: new Date().toDateString(),
      note: noteExcercise,
      excercises: excercise,
      doctorName: user.name,
      completed: false,
    });
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Oops internal server error occured");
  }
});

// ROUTE 2 : Fetch patient excercise : Login required
router.get("/fetchexcercisepatient", fetchUser, async (req, res) => {
  try {
    const events = await Excercise.find({ patient: req.user.id });
    res.json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

// ROUTE 3 : Delete excercise from patient site : Login required
router.delete("/deleteexcercise/:id", fetchUser, async (req, res) => {
  try {
    //find the excercise to be deleted and then delete it
    let excercise = await Excercise.findById(req.params.id);
    if (!excercise) {
      return res.status(404).send("Such Excercise not found");
    }
    //if selected excercise is the loin users excercise
    if (excercise.patient.toString() !== req.user.id) {
      return res.status(401).send("Permission not granted");
    }
    excercise = await Excercise.findByIdAndDelete(req.params.id);
    res.send("Success!! Excercise deleted succesfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

router.post("/report", async (req, res) => {
  try {
    // const user =  await User.findById(req.user.id);
    // const { data } = req.body;
    console.log(req.body);
    // const event = new Excercise({
    //   doctor: req.user.id,
    //   patient: req.params.id,
    //   note: noteExcercise,
    //   excercises: excercise,
    //   doctorName: user.name,
    // });
    // const savedEvent = await event.save();
    // res.json(savedEvent);
    res.send("Hello Pari");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Oops internal server error occured");
  }
});
// ROUTE 5 : Fetch patient excercises from doctor site : Login required
router.get("/fetchexercisedoctor/:id", fetchUser, async (req, res) => {
  try {
    //console.log(mongoose.Types.ObjectId(req.user.id) );
    const events = await Excercise.find({$and:[{ patient: req.params.id },{ doctor: req.user.id }]}).sort({
      startDate: -1,
    });
    res.json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
// ROUTE 3 : Delete exercise from doctor site : Login required
router.delete("/deleteexercise/:id", fetchUser, async (req, res) => {
  try {
    //find the exercise to be deleted and then delete it
    let exercise = await Excercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).send("Such exercise not found");
    }
    //if selected exercise is the login users prescription
    if (exercise.doctor.toString() !== req.user.id) {
      return res.status(401).send("Permission not granted");
    }
    exercise = await Excercise.findByIdAndDelete(req.params.id);
    res.send("Success!! exercise deleted succesfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
// ROUTE 4 : Fetch exercise for patient portal : Login required
router.get("/fetchtExcercise", fetchUser, async (req, res) => {
  try {
    const activity = await Excercise.find({ patient: req.user.id });
    // prescriptions.map((prescription, index) =>
    //   prescription.medicines.map((med, index) => {
    //     if (med.eatenTime && med.eatenTime != new Date().toDateString()) {
    //       med.eatenTime = "";
    //       med.state = "info";
    //       prescription.save();
    //     }
    //   })
    // );
    res.json(activity);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});

module.exports = router;
