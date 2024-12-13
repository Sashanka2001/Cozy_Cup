import React, { useState } from "react";

function UserProfile() {
  const [userInfo, setUserInfo] = useState({
    fullName: "Jane Doe",
    phone: "+1-234-567-890",
    email: "jane.doe@example.com",
    address: "1234 Street Name, City, State",
    password: "password123", // Placeholder for password
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="user-profile-container-custom">
      {/* Left Section: User Info */}
      <div className="user-profile-left-custom">
        <h1>{userInfo.fullName}</h1>
        <div className="user-contact-info-custom">
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="view-profile-button-custom">View Full Profile ↓</button>
      </div>

      {/* Right Section: Profile Image */}
      <div className="user-profile-right-custom">
        <div className="profile-image-container-custom">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="profile-image-custom"
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
