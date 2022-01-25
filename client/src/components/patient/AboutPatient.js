import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPatient(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([])
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUser();
    getBooking();
    // eslint-disable-next-line
  }, []);

  // Separate function to get user details

  async function getUser() {
    const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },

    })
    const data = await response.json();
    setProfile(data);
  };
  async function getBooking() {
    const response = await fetch(
      `http://localhost:5000/api/calendar/fetchmenteeBooking`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setBooking(data);
  }

  return <div>
    <div className="container rounded bg-white">
      <div className="row">
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
          <div className="w3-row-padding">
            <div className="w3-third">

              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src={profile.img} style={{ width: "100%" }} alt="Avatar" />
                </div>
              </div><br />
            </div>
            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <div className="w3-container"><br /><h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>About {profile.name}</h2><hr />
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>{profile.location}</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>{profile.email}</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue"></i>{profile.phone}</p>
                  <p><i className="fa fa-chalkboard fa-fw w3-margin-right w3-large w3-text-blue"></i>Disease - {profile.disease}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="mx-3">
      {
        <div className="col-12">
          <h2>Booked Appointments</h2>
          <div className="row">
            <h4 className="mt-2">{bookings.length === 0 && "No Appointments Yet"}</h4>
            {bookings.map((booking, index) => (
              <div className="col-3 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h4>Appointment for {booking.title}</h4>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Start Date :</b> {booking.start.substring(0, 10)}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Doctor :</b> {booking.doctor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  </div>;
}


