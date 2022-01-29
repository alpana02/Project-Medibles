import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

export default function ViewProfilePatient(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [note, setnote] = useState("");
  const [noteExcercise, setnoteExcercise] = useState("");

  let freqOptions = [
    {
      value: "mon",
      label: "Monday",
    },
    {
      value: "tue",
      label: "Tuesday",
    },
    {
      value: "wed",
      label: "Wednesday",
    },
    {
      value: "thurs",
      label: "Thursday",
    },
    {
      value: "fri",
      label: "Friday",
    },
    {
      value: "sat",
      label: "Saturday",
    },
    {
      value: "sun",
      label: "Sunday",
    },
  ];
  const [medicine, setmedicine] = useState([
    {
      name: "",
      dosage: "",
      duration: "",
      time: "",
      frequency: [],
      eatenTime: "",
      state: "info",
    },
  ]);
  const [excercise, setexcercise] = useState([
    {
      name: "",
      severity: "",
      duration: "",
      time: "",
    },
  ]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUser();
    // eslint-disable-next-line
  }, []);

  // Separate function to get user details
  async function getUser() {
    const response = await fetch(
      `http://localhost:5000/api/auth/getDetailsofPatient/${id}`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setProfile(data);
  }

  const handleMedChange = (i, e) => {
    let newMedicine = [...medicine];
    newMedicine[i][e.target.name] = e.target.value;
    setmedicine(newMedicine);
  };
  const handleFreqChange = (i, e) => {
    let newMedicine = [...medicine];
    newMedicine[i]["frequency"] = Array.isArray(e) ? e.map((x) => x.value) : [];
    setmedicine(newMedicine);
  };
  const handleExcerciseChange = (i, e) => {
    let newExcercise = [...excercise];
    newExcercise[i][e.target.name] = e.target.value;
    setmedicine(newExcercise);
  };

  let addFormFields = () => {
    setmedicine([
      ...medicine,
      {
        name: "",
        dosage: "",
        duration: "",
        time: "",
        frequency: [],
        eatenTime: "",
        state: "info",
      },
    ]);
  };

  let addExcerciseFormFields = () => {
    setexcercise([
      ...excercise,
      {
        name: "",
        severity: "",
        duration: "",
        time: "",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newMedicine = [...medicine];
    newMedicine.splice(i, 1);
    setmedicine(newMedicine);
  };

  let removeExcerciseFormFields = (i) => {
    let newExcercise = [...excercise];
    newExcercise.splice(i, 1);
    setexcercise(newExcercise);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    props.showAlert("Prescription Added Succesfully", "success");
    const response = await fetch(
      `http://localhost:5000/api/prescription/addPrescription/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ medicine, note }),
      }
    );
    const data = await response.json();
    console.log(data);
    setmedicine([
      {
        name: "",
        dosage: "",
        duration: "",
        time: "",
        frequency: [],
        eatenTime: "",
        state: "info",
      },
    ]);
    setnote("");
  }

  async function handleExcerciseSubmit(event) {
    event.preventDefault();
    props.showAlert("Excercise Added Succesfully", "success");
    const response = await fetch(
      `http://localhost:5000/api/excercise/addExcercise/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ excercise, noteExcercise }),
      }
    );
    const data = await response.json();
    console.log(data);
    setexcercise([
      {
        name: "",
        severity: "",
        duration: "",
        time: "",
      },
    ]);
    setnoteExcercise("");
  }

  const handleNoteChange = (e) => {
    setnote(e.target.value);
  };

  const handleNoteExcerciseChange = (e) => {
    setnoteExcercise(e.target.value);
  };

  return (
    <div>
      <div className="container rounded bg-white">
        <div className="row">
          <div
            className="w3-content w3-margin-top"
            style={{ maxWidth: "1400px" }}
          >
            <div className="w3-row-padding">
              <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <img
                      src={profile.img}
                      style={{ width: "100%" }}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <br />
              </div>
              <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <div className="w3-container">
                    <br />
                    <h2 className="w3-text-grey w3-padding-16">
                      <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>
                      About {profile.name}
                    </h2>
                    <hr />
                    <p>
                      <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      {profile.location}
                    </p>
                    <p>
                      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      {profile.email}
                    </p>
                    <p>
                      <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      {profile.phone}
                    </p>
                    <p>
                      <i className="fa fa-chalkboard fa-fw w3-margin-right w3-large w3-text-blue"></i>
                      Disease - {profile.disease}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="w3-half">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h3>Excercise assign</h3>
                  <div className="w3-container">
                    <form onSubmit={handleExcerciseSubmit}>
                      {excercise.map((element, index) => (
                        <div key={index}>
                          <div className="mb-1 ">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type Excercise names"
                              name="name"
                              value={
                                excercise.name === "" ? "" : excercise.name
                              }
                              onChange={(e) => handleExcerciseChange(index, e)}
                              required
                            />
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1">
                              <select
                                className="form-select"
                                name="severity"
                                value={excercise.severity}
                                onChange={(e) =>
                                  handleExcerciseChange(index, e)
                                }
                                aria-label="Default select example"
                                required
                              >
                                <option defaultValue="">Select Severity</option>
                                <option value="low">Low impact</option>
                                <option value="high">High impact</option>
                              </select>
                            </div>
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1 mx-2">
                              <input
                                type="number"
                                className="form-control "
                                placeholder="Type duration"
                                name="duration"
                                value={excercise.duration}
                                onChange={(e) =>
                                  handleExcerciseChange(index, e)
                                }
                                required
                              />
                            </div>
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1">
                              <select
                                className="form-select mb-3"
                                name="time"
                                value={excercise.time}
                                onChange={(e) =>
                                  handleExcerciseChange(index, e)
                                }
                                aria-label="Default select example"
                                required
                              >
                                <option defaultValue="">Select Timing</option>
                                <option value="before">Before Food</option>
                                <option value="after">After Food</option>
                              </select>
                            </div>
                          </div>
                          {index ? (
                            <button
                              type="button"
                              className="btn btn-danger mb-3 mx-4 mt-1"
                              onClick={() => removeExcerciseFormFields(index)}
                            >
                              Remove
                            </button>
                          ) : null}
                        </div>
                      ))}

                      <input
                        type="text"
                        className="form-control mb-2 py-3"
                        placeholder="Type any specific instructions for the patient"
                        name="noteExcercise"
                        value={noteExcercise}
                        onChange={(e) => handleNoteExcerciseChange(e)}
                      />
                      <div className="w3-half align-items-end">
                        <button
                          type="button"
                          className="btn btn-dark mb-3 px-4"
                          onClick={addExcerciseFormFields}
                        >
                          Add More Fields
                        </button>
                      </div>
                      <div className="w3-half ">
                        <button
                          type="submit"
                          className="btn btn-success mb-3 px-4"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="w3-half">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h3>Medicine assign</h3>
                  <div className="w3-container">
                    <form onSubmit={handleSubmit}>
                      {medicine.map((element, index) => (
                        <div key={index}>
                          <div className="mb-1 ">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type Medicines names"
                              name="name"
                              value={medicine.name === "" ? "" : medicine.name}
                              onChange={(e) => handleMedChange(index, e)}
                              minLength={3}
                              required
                            />
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1">
                              <select
                                className="form-select"
                                name="dosage"
                                value={medicine.dosage}
                                onChange={(e) => handleMedChange(index, e)}
                                aria-label="Default select example"
                                required
                              >
                                <option defaultValue="">Select Dosage</option>
                                <option value="morning">Morning</option>
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                              </select>
                            </div>
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1 mx-2">
                              <input
                                type="number"
                                className="form-control "
                                placeholder="Type duration"
                                name="duration"
                                value={medicine.duration}
                                onChange={(e) => handleMedChange(index, e)}
                                required
                                minLength={1}
                              />
                            </div>
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1">
                              <select
                                className="form-select mb-3"
                                name="time"
                                value={medicine.time}
                                onChange={(e) => handleMedChange(index, e)}
                                aria-label="Default select example"
                                required
                              >
                                <option defaultValue="">Select Timing</option>
                                <option value="before">Before Food</option>
                                <option value="after">After Food</option>
                              </select>
                            </div>
                          </div>
                          <div className="w3-half mt-1">
                            <div className="mb-1 mx-2">
                              <Select
                                isMulti
                                options={freqOptions}
                                placeholder="Select Frequency"
                                onChange={(e) => handleFreqChange(index, e)}
                                required
                              ></Select>
                            </div>
                          </div>
                          {index ? (
                            <button
                              type="button"
                              className="btn btn-danger mb-3"
                              onClick={() => removeFormFields(index)}
                            >
                              Remove
                            </button>
                          ) : null}
                        </div>
                      ))}

                      <input
                        type="text"
                        className="form-control mb-2 py-3"
                        placeholder="Type any specific instructions for the patient"
                        name="note"
                        value={note}
                        onChange={(e) => handleNoteChange(e)}
                      />
                      <div className="w3-half align-items-end">
                        <button
                          type="button"
                          className="btn btn-dark mb-3 px-4"
                          onClick={addFormFields}
                        >
                          Add More Fields
                        </button>
                      </div>
                      <div className="w3-half ">
                        <button
                          type="submit"
                          className="btn btn-success mb-3 px-4"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
