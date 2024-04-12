import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonNavButton from "./CommonNavButton";

function ViewUser() {
  const [user, setuser] = useState({});
  let params = useParams();

  const singleUserShow = async () => {
    let singlUser = await axios.get(
      `http://localhost:8000/api/v1/user/${params.id}`
    );
    setuser(singlUser);
  };

  useEffect(() => {
    singleUserShow();
  }, []);


  
  if (!user.data) {
    
    return <h2>loading....</h2>
    
  }
  const{firstname,lastname,phone,email,alternativeno}=user.data

  return(
    <>
    <div>
      <CommonNavButton
        linkText="/"
        pageName="Customer Details"
        btnText="view All Customer"
        />
      <div className="add-customer">
        <span>Customer Profile Information</span>
      </div>

    </div>

    <div className="info-main">
<section className="info-section">
  <div className="info-item">

    <span className="label">First Name</span>
    <span className="value">{firstname}</span>
  </div>
  <div className="info-item">
    <span className="label">Primary Mobile No</span>
    <span className="value">{phone}</span>
  </div>
</section>

<section className="info-section">

  
  <div className="info-item">
    <span className="label">Last Name</span>
    <span className="value">{lastname}</span>
  </div>

  <div className="info-item">
    <span className="label">Alternate Mobile No</span>
    <span className="value">{alternativeno}</span>
  </div>
</section>
  
  
  

<section className="info-section">
  
<div className="info-item">
    <span className="label">Email Address</span>
    <span className="value">{email}</span>
  </div>



</section>
</div>



        </>

  ) 
}

export default ViewUser;