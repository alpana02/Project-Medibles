import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function ViewProfilePatient(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [note, setnote] = useState("");
  const [medicine, setmedicine] = useState([
    {
      name: "",
      dosage: "",
      duration: "",
      time: "",
      frequency: "",
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
  let addFormFields = () => {
    setmedicine([
      ...medicine,
      {
        name: "",
        dosage: "",
        duration: "",
        time: "",
        frequency: "",
      },
    ]);
  };
  let removeFormFields = (i) => {
    let newMedicine = [...medicine];
    newMedicine.splice(i, 1);
    setmedicine(newMedicine);
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
        body: JSON.stringify({medicine,note}),
      }
    );
    const data = await response.json();
    console.log(data);
    setmedicine([
      { name: "", dosage: "", duration: "", time: "", frequency: "" },
    ]);
    setnote("");
  }
  const handleNoteChange = (e) => {
    setnote(e.target.value);
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
                  <div className="w3-container">
                    <br />
                    <div className="mb-1">
                      <label
                        htmlFor="experience"
                        className="form-label"
                        style={{ fontSize: "14px" }}
                      >
                        Specialization
                      </label>
                      <select
                        className="form-select"
                        name="specialization"
                        aria-label="Default select example"
                        required
                      >
                        <option defaultValue value="">
                          Select specialization
                        </option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Neurology">Neurology</option>
                      </select>
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                  </div>

                  <div className="w3-half px-5 ">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg my-3 mb-4 px-4"
                    >
                      Assign Exercise
                    </button>
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
                              <select
                                className="form-select mb-3"
                                name="frequency"
                                value={medicine.frequency}
                                onChange={(e) => handleMedChange(index, e)}
                                aria-label="Default select example"
                                required
                              >
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                              </select>
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
