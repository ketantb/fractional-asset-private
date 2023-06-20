import React, { useEffect, useState } from "react";
import "./ReserveShares.css";
import axios from "../../../helpers/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
const ReserveShares = ({
  totalShares,
  availableShares,
  perSharePrice,
  handleCloseModal,
  details,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    noOfShares: 1,
    type: details.productType,
  });
  const [total, setTotal] = useState(perSharePrice);

  //handle inputs
  const handleInputs = (params) => (e) => {
    setFormData((prevState) => ({ ...prevState, [params]: e.target.value }));
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Reserving your shares");

    try {
      const response = await axios.post("/reserve-shares", formData);
      console.log(response);
      if (response.data.success) {
        console.log(formData);
        toast.dismiss();
        handleCloseModal();
        toast.success("Thank you! Your shares are reserved");
      } else {
        toast.dismiss();
        const errors = response.data.errors;
        for (let err of errors) {
          toast.error(err.msg);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const amount = formData.noOfShares * perSharePrice;
    setTotal(amount);
    // eslint-disable-next-line
  }, [formData.noOfShares]);

  return (
    <div className="reserveShare-form-wrap">
      <section>
        <h6>RESERVE YOUR SHARES NOW</h6>
        <p style={{paddingLeft: '1rem'}}>Personal details</p>
        <form onSubmit={handleSubmit}>
          <div className="section1">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputs("firstname")}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputs("lastname")}
            />
          </div>
          <div className="section2">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputs("email")}
            />
            <input
              type="contact"
              placeholder="Contact Number"
              name="contact"
              value={formData.contact}
              onChange={handleInputs("contact")}
            />
          </div>
          <div className="section3">
            <p>Total Shares: {totalShares}</p>
            <p>Available Shares: {availableShares}</p>
          </div>
          <div className="section4">
            <label>Number of shares you want to buy:</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="noOfShares"
              value={formData.noOfShares}
              onChange={handleInputs("noOfShares")}
            >
              {[...Array(availableShares)].map((_, index) => {
                return <option value={index + 1}>{index + 1}</option>;
              })}
            </select>
          </div>
          {/* {errmsg ? (
          <p className="shares-errMsg" style={{ color: "red" }}>
            Please select shares greater than 0
          </p>
        ) : null} */}
          <div className="section6">
            <p>Total Amount :</p>
            <p>
              <BiRupee />
              {total}
            </p>
          </div>
          <div className="section5">
            <button className="btn btn-success">RESERVE</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ReserveShares;
