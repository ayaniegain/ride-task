import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateUser } from "../../redux/slice/countSlice";
import CommonNavButton from "./CommonNavButton";

function EditUser() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  let users = useSelector((state) => state.userData.user);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [alternativeno, setAlternativeno] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = users.find((u) => u._id === id);
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setPhone(user.phone);
      setAlternativeno(user.alternativeno);
      setEmail(user.email);
    }
  }, [users, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstname !== "" &&
      lastname !== "" &&
      phone !== "" &&
      alternativeno !== "" &&
      email !== ""
    ) {
      try {
        let newUser = await axios.put(`http://localhost:8000/api/v1/user/${id}`, {
          firstname: firstname,
          lastname: lastname,
          phone: phone,
          alternativeno: alternativeno,
          email: email,
        });
        console.log(newUser.data);
        dispatch(updateUser(newUser.data));
        navigate("/");
        // Avoid using location.reload() here, as React components should handle updates internally
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
    location.reload()
  };

  if (!users || users.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <CommonNavButton
        linkText="/"
        pageName="Edit Customer Details"
        btnText="view All Customer"
      />
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section">
          <div className="input-group-inline">
            <label htmlFor="firstname">First Name</label>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="lastname">Last Name</label>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="phone">Primary Mobile Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name="phone"
              id="phone"
              placeholder="Primary Mobile Number"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="alternativeno">Alternative Mobile Number</label>
            <input
              value={alternativeno}
              onChange={(e) => setAlternativeno(e.target.value)}
              type="number"
              name="alternativeno"
              id="alternativeno"
              placeholder="Alternative Mobile Number"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="email">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>

        <div className="button-section">
          <button type="submit" className="add-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
