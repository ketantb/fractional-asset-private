import React, { useEffect, useState } from "react";
import "./AdminDetails.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";

const AdminDetails = () => {
  const [adminDetails, setAdminDetails] = useState(null);
  const token = localStorage.getItem("token");
  //get user details
  const getAdminDetails = async () => {
    try {
      const response = await axios.get("/user-data", {
        headers: {
          authorization: token,
        },
      });
      console.log(adminDetails);
      setAdminDetails(response.data.userData[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAdminDetails();
  }, []);

  if (!adminDetails) {
    return <PreLoader />;
  }

  return (
    <div className="admin-wrap">
      <div className="row1">
        <h1>{adminDetails.name}</h1>
      </div>
    </div>
  );
};

export default AdminDetails;
