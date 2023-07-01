import React, { useEffect, useState } from "react";
import "./Jewellery.css";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import JewellerySteps from "./jewellery-steps/jewellery-steps";
// import HomeCard from '../house-card/HouseCard'

const JewelleryPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="jewellery-page-wrapper">
      <div className="jewellery-bg-image"></div>
      <JewellerySteps />
    </div>
  );
};

export default JewelleryPage;
