import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { deleteUser } from "../../redux/slice/countSlice";
import axios from "axios";
import CommonNavButton from "./CommonNavButton";
import { toast } from "react-toastify";

function AllUser() {
  let selectorAllUser = useSelector((state) => state.userData.user);

  let dispatch = useDispatch();

  const handleDelete = async (id) => {
    let singledeleteUser = await axios.delete(
      `https://ride-task-backend.vercel.app/api/v1/user/${id}`
    );

    // console.log(singledeleteUser.data.user._id);

    dispatch(deleteUser(singledeleteUser.data.user._id));



    location.reload();
  };

  return (
    <>

<CommonNavButton linkText='adduser' pageName='View All Customer' btnText='Add Customer'/>
     
      <section >
        {selectorAllUser == [] ? (
          <div className="no-customer">
            <h4>no customer found </h4>
          </div>
        ) : (
          <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Customer Name</th>
            <th>Contact Number</th>
            <th>Alternative Number</th>
            <th>Email</th>
            <th>Status</th>
            <th>Booking History</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectorAllUser.map((user, index) => (
            <tr key={user._id} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{index + 1}</td>
              <td>{`${user.firstname} ${user.lastname}`}</td>
              <td>{user.phone}</td>
              <td>{user.alternativeno}</td>
              <td>{user.email}</td>
              <td>Active</td>
              <td>
                <button className="show-button">
                  <NavLink className="btn" to={`/viewuser/${user._id}`}>Show</NavLink>
                </button>
              </td>
              <td className="action-buttons">
                <button className="btn first-btn" onClick={() => handleDelete(user._id)}>Delete</button>
                <button className="second-btn">
                  <NavLink className="btn" to={`/edituser/${user._id}`}>Edit</NavLink>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        )}
      </section>
    </>
  );
}

export default AllUser;
