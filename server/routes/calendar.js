const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Calendar = require("../models/Calendar");
const User = require("../models/User");
const Notification = require("../models/Notification");

// ROUTE 1 : Add a new event when doctor accepts: Login required
router.post("/addevent", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { title, start, createdBy, notiId } = req.body;
    const event = new Calendar({
      title,
      start,
      createdBy,
      user: req.user.id,
      notify: notiId,
      doctor: user.name,
    });
    const savedEvent = await event.save();

    //save enrolled
    const patient = await User.find({ email: createdBy });
    console.log(patient);
    const enrolledPatientobject = {
      patientName: patient[0].name,
      patientEmail: patient[0].email,
      patientImage: patient[0].img,
      patientDate: start
    };
    console.log(enrolledPatientobject);
    await user.enrolledPatient.push(enrolledPatientobject);
    await user.save();
    res.json(savedEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Oops internal server error occured");
  }
});

// ROUTE 2 : get all events of an exisitng user: Login required
router.get("/fetchallevents/:id", fetchUser, async (req, res) => {
  try {
    const events = await Calendar.find({ user: req.params.id });
    res.json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
// ROUTE 3 : push to notification of doctor: Login required
router.post("/addNotification/:id", fetchUser, async (req, res) => {
  try {
    const { title, start, createdBy } = req.body;
    console.log(start);
    const event = new Notification({
      title,
      start,
      createdBy,
      user: req.params.id,
    });
    const savedNoti = await event.save();
    res.json(savedNoti);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Oops internal server error occured");
  }
});
// ROUTE 5 : get all event notification of a doctor: Login required
router.get("/fetchallnoti", fetchUser, async (req, res) => {
  try {
    const notification = await Notification.find({ user: req.user.id });
    res.json(notification);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
// ROUTE 6 : delete notification  of a user: Login required
router.delete("/deleteevent/:id", fetchUser, async (req, res) => {
  try {
    //find the note to be deleted and then delete it
    let notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).send("Such Notification not found");
    }
    //if not users's event
    if (notification.user.toString() !== req.user.id) {
      return res.status(401).send("Permission not granted");
    }
    notification = await Notification.findByIdAndDelete(req.params.id);
    res.send("Success!! Notification deleted succesfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
// ROUTE 7 : get all events of an exisitng doctor: Login required
router.get("/fetchmyEvents", fetchUser, async (req, res) => {
  try {
    const events = await Calendar.find({ user: req.user.id });
    res.json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
// ROUTE 8 : get all events of an exisitng mentee: Login required
router.get("/fetchmenteeBooking", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const events = await Calendar.find({ createdBy: user.email });
    res.json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops internal server error occured");
  }
});
module.exports = router;
