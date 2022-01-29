import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Medicine(props) {
  let navigate = useNavigate();
  const [prescription, setPrescription] = useState([
    {
      doctor: "",
      patient: "",
      note: "",
      doctorName: "",
      startDate: "",
      medicines: {
        name: "",
        dosage: "",
        duration: "",
        time: "",
        frequency: [],
        state: "",
        eatenTime: "",
      },
    },
  ]);
  let days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
  let dayCounter = 0;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getPrescription();
    // eslint-disable-next-line
  }, []);

  async function getPrescription() {
    const response = await fetch(
      `http://localhost:5000/api/prescription/fetchtodayMeds`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const prescriptions = await response.json();
    const newpresc=prescriptions.filter((prescription, index) => (
      prescription.medicines.filter((med, index) => (
        med.frequency.filter((freq, index) => {
          return freq === days[new Date().getDay() - 1]
        })
      ))
    ))
    setPrescription(newpresc)
    //setPrescription(data);
  }
  async function handleEaten(prescriptionId, medId) {}
  async function handleMissed(prescriptionId, medId) {}

  return (
    <div className="container">
      <div className="mx-3 card mt-4">
        {
          <div className="col-12">
            <h2 className="mx-4">Medicine Tracker</h2>
            <div className="row">
              {prescription.map((prescription, index) => (
                <>
                  {prescription.medicines.map((med, index) => (
                    <>
                      {med.frequency.map((freq, index) => (
                        <>
                          {freq === days[new Date().getDay() - 1] ? (
                            <>
                              <b className="d-none">{dayCounter++}</b>
                              <div className="card-body">
                                <div
                                  className={"alert mx-4 alert-" + med.state}
                                  role="alert"
                                >
                                  <div className="row">
                                    <div className="col-9 justify-content-center align-self-center">
                                      <b>Medicine Name: </b>
                                      {med.name} &nbsp; &nbsp;&nbsp;
                                      <b>Eat at:</b> {med.dosage}&nbsp;
                                      &nbsp;&nbsp; <b>Eat: </b>
                                      {med.time} food
                                    </div>
                                    <div className="col-3">
                                      <button
                                        className="btn btn-success mx-3 "
                                        onClick={() =>
                                          handleEaten(prescription._id, med._id)
                                        }
                                      >
                                        {" "}
                                        <i
                                          className="fa fa-check"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Eaten
                                      </button>
                                      <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                          handleMissed(
                                            prescription._id,
                                            med._id
                                          )
                                        }
                                      >
                                        {" "}
                                        <i
                                          className="fa fa-close"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        Missed
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    </>
                  ))}
                </>
              ))}
              {dayCounter === 0 ? (
                <h4 className="px-4 mx-3">No medicines to take today</h4>
              ) : (
                <></>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
