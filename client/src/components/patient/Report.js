import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Report = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role") === "doctor") {
      navigate("*");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2>reports page</h2>
    </div>
  );
};
