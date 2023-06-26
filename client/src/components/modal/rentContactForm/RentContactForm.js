import React, { useEffect, useState } from "react";
import "./RentContactForm.css";
import axios from "../../../helpers/axios";
import { toast } from "react-hot-toast";

const RentContactForm = ({ handleCloseContactModal, details }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    propertyType: details.propertyType,
    sellerId: details.sellerId,
  });

  //handle inputs
  const handleInputs = (e) => {
    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post("/rent-enquiry", contactForm);
      console.log(response);
      handleCloseContactModal();
      toast.success("Thank you! We will reach back to you soon..");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="rentcontact-form-wrap">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleInputs}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleInputs}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label for="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contactForm.contact}
            onChange={handleInputs}
            placeholder="Your Contact Number"
            required
          />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleInputs}
            placeholder="Your Message"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RentContactForm;
