import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function ViewProfilePatient(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);

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
    console.log(data);
    setProfile(data);
    console.log(profile);
  }

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
                      <small id="emailHelp" class="form-text text-muted">
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
                  <div className="w3-container">
                    <br />
                    <form>
                      <div className="mb-1">
                        <label
                          htmlFor="experience"
                          className="form-label"
                          style={{ fontSize: "14px" }}
                        >
                          Add prescription
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Medicines in comma seperated way"
                          name="medicinename"
                          required
                        />
                        <small id="emailHelp" class="form-text text-muted">
                         Eg. calpol,dolo,calvam-625
                        </small>
                      </div>
                      <div className="w3-half px-5">
                        <button
                          type="button"
                          className="btn btn-dark my-3 mb-4 px-4"
                        >
                          Add Prescription
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
