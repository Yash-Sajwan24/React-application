import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./FirstPage.css";
import { Box } from "@mui/material";

function FirstPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();
  const userDetails = localStorage.getItem("userDetails");
  const [errorMessage, setErrorMessage] = useState(
    !userDetails && location.state && location.state.message
      ? location.state.message
      : ""
  );

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name && phoneNumber && email) {
      // Save user details to local storage
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ name, phoneNumber, email })
      );
      setErrorMessage("");
      // Navigate to the second page using navigate function
      navigate("/second-page");
    }
  };

  return (
    <div className="center-align">
      <Box
        className="login-container"
        sx={{ backgroundColor: "lightgoldenrodyellow" }}
      >
        <h2>Enter Your Details</h2>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "1rem" }}>{errorMessage}</p>
        )}
        <form onSubmit={handleFormSubmit}>
          <TextField
            sx={{ mt: 2, width: "20rem", background: "white" }}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <TextField
            sx={{ mt: 1.5, width: "20rem" }}
            type="number"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <TextField
            sx={{ mt: 1.5, width: "20rem" }}
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <Button
            sx={{ mt: 1.5 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default FirstPage;
