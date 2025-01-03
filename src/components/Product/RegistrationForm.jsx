import React, { useState } from "react";
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setIsSubmitted(true);
      console.log("Form Submitted", formData);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="register-page"> {/* Apply the class here */}
      <section className="register-section">
        <div className="transparent-box"></div> {/* Transparent overlay */}
        <div className="register-container">
          <h2>REGISTER</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="register-button">
              Register
            </button>

            {isSubmitted && <p className="success-message">Registration successful!</p>}

            <p>
              Already have an account? <a href="http://localhost:3000">Login here</a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;
