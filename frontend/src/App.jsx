import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import ViewUser from "./components/User/ViewUser";
import AllUser from "./components/User/AllUser";

import { getAllData } from "./redux/slice/countSlice";

import { useDispatch } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/User/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllUser />,
  },
  {
    path: "adduser",
    element: <AddUser />,
  },
  {
    path: "/edituser/:id",
    element: <EditUser />,
  },
  {
    path: "/viewuser/:id",
    element: <ViewUser />,
  },
]);

function App() {
  let dispatch = useDispatch();

  let getAllUserData = async () => {
    let allUserData = await axios.get("http://localhost:8000/api/v1/user/");

    console.log(allUserData);

    dispatch(getAllData(allUserData.data));
  };
  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
