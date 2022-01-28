import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Medicine(props) {
  let navigate = useNavigate();
  const [prescription, setPrescription] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUser();
    getPrescription();
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
  };

  async function getPrescription() {
    const response = await fetch(
      `http://localhost:5000/api/prescription/fetchprescriptionpatient`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setPrescription(data);
  }

  return <div className="container">
    <div className="mx-3 card mt-4">
      {
        <div className="col-12">
          <h2 className="mx-4">Medicine</h2>
          <div className="row">
            <h4 className="mt-2">{prescription.length === 0 && "No Medicines Yet"}</h4>
            {prescription.map((prescription, index) => (
                  <div className="card-body">
                      {prescription.medicines.map((med, index) => (
                        <div class="alert alert-info mx-4" role="alert">
                            <b>{med.name}</b> {med.dosage} {med.time} 
                        </div>
                      ))}
                  
                </div>
            ))}
          </div>
        </div>
      }
    </div>

  </div>;
}


