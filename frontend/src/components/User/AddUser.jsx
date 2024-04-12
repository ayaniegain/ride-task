import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/slice/countSlice";
import CommonNavButton from "./CommonNavButton";
import { toast } from "react-toastify";


function AddUser() {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phone, setphone] = useState("");
  const [altphone, setaltphone] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      fname !== "" &&
      lname !== "" &&
      phone !== "" &&
      altphone !== "" &&
      email !== ""
    ) {
      let newUser = await axios.post("https://ride-task-backend.vercel.app/api/v1/user/", {
        firstname: fname,
        lastname: lname,
        phone,
        alternativeno: altphone,
        email,
      });

      dispatch(createUser(newUser.data.user));

      navigate("/");
      toast("New User Created");
    }
  };

  return (
    <div>
      <CommonNavButton
        linkText="/"
        pageName="Create Customer"
        btnText="view All Customer"
      />
      <div className="add-customer">
        <span>Add Customer</span>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section">
          <div className="input-group-inline">
            <label htmlFor="fname">First Name</label>
            <input
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="lname">Last Name</label>
            <input
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="phone">Primary Mobile Number</label>
            <input
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              type="number"
              name="phone"
              id="phone"
              placeholder="Primary Mobile Number"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="altphone">Alternative Mobile Number</label>
            <input
              value={altphone}
              onChange={(e) => setaltphone(e.target.value)}
              type="number"
              name="altphone"
              id="altphone"
              placeholder="Alternative Mobile Number"
              required
            />
          </div>
          <div className="input-group-inline">
            <label htmlFor="email">Email Address</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
