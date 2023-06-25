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
  const [calTotalShares, setCalTotalShares] = useState("");
  const [calAvailShares, setCalAvailShares] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [fractionalOwnership, setFractionalOwnership] = useState("");

  const calculateFractionalOwnership = () => {
    const fractionalOwnership =
      (investmentAmount / totalShares) * availableShares;
    setFractionalOwnership(fractionalOwnership.toFixed(2));
  };

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
      <h3>RESERVE YOUR SHARES NOW</h3>
      <p>Personal details</p>
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
        <h2 style={{ marginTop: "2rem" }}>Fractional Calculator</h2>
        <div className="section3">
          <p>Total Shares: {totalShares}</p>
          <p>Available Shares: {availableShares}</p>
        </div>
        <div className="section4">
          <label>Select number of shares</label>
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

        <div className="section6">
          <h5 style={{ fontWeight: "bold" }}>Total Amount :</h5>
          <h5 style={{ fontWeight: "bold" }}>
            <BiRupee />
            {total}
          </h5>
        </div>
        <div className="section5">
          <button className="btn btn-danger">RESERVE</button>
        </div>
      </form>
    </div>
  );
};

export default ReserveShares;
