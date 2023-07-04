import React, { useEffect, useState } from "react";
import "./stylesheet/LandDetails.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";


const LandDetails = ({ LandData, setLandData }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setLandData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [rentStatus, setRentStatus] = useState(false);
  useEffect(() => {
    if (LandData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [LandData.propertyAdType]);

  //conditional rendering for seller type for reraId
  const [sellerTypeStatus, setSellerTypeStatus] = useState(false);
  useEffect(() => {
    if (
      LandData.sellerType === "broker" ||
      LandData.sellerType === "builder"
    ) {
      console.log(LandData.sellerType);
      setSellerTypeStatus(true);
    } else {
      setSellerTypeStatus(false);
    }
  }, [LandData.sellerType]);

  return (
    <div className="property-details-wrapper">
      {/* <FormControl className="form-field">
        <FormLabel id="demo-row-radio-buttons-group-label">
          Property Ad Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="propertyAdType"
          value={LandData.propertyAdType}
          onChange={handleInputs}
        >
          <FormControlLabel value="rent" control={<Radio />} label="Rent" />
          <FormControlLabel value="sell" control={<Radio />} label="Sell" />
        </RadioGroup>
      </FormControl> */}

      <FormControl className="form-field">
        <FormLabel className="">Seller Type</FormLabel>
        <select
          name="sellerType"
          value={LandData.sellerType}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="owner">Owner</option>
          <option value="broker">Broker</option>
          <option value="builder">Builder</option>
        </select>
      </FormControl>

      {sellerTypeStatus ? (
        <FormControl className="form-field">
          <TextField
            id="standard-basic"
            label="Builder/Broker Rera Id"
            variant="standard"
            name="reraId"
            value={LandData.reraId}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}

      <FormControl className="form-field">
        <FormLabel>Land Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="landType"
          value={LandData.landType}
          onChange={handleInputs}
        >
          <FormControlLabel
            value="Residential"
            control={<Radio />}
            label="Residential"
          />
          <FormControlLabel
            value="Commercial"
            control={<Radio />}
            label="Commercial"
          />
        </RadioGroup>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Type of Ownership</FormLabel>
        <select name="typeOfOwnership" value={LandData.typeOfOwnership} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="freehold">Freehold</option>
          <option value="lease">Lease</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField
          id="standard-basic"
          label="Property Id"
          variant="standard"
          name="propertyId"
          value={LandData.propertyId}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Dimension(Length)"
          variant="standard"
          name="dimensionLength"
          value={LandData.dimensionLength}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Dimension(Breadth)"
          variant="standard"
          name="dimensionBreadth"
          value={LandData.dimensionBreadth}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Dimension Unit</FormLabel>
        <select
          name="dimensionsUnit"
          value={LandData.dimensionsUnit}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="meters">meters</option>
          <option value="feets">feets</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Plot Size"
          variant="standard"
          name="plotSize"
          value={LandData.plotSize}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Plot Size Unit</FormLabel>
        <select
          name="plotSizeUnit"
          value={LandData.plotSizeUnit}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="SqMeters">SqMts</option>
          <option value="SqFeets">SqFts</option>
          <option value="Acres">acres</option>
          <option value="Hectare">hectare</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="text"
          id="standard-basic"
          label="Zoning"
          variant="standard"
          name="zoning"
          value={LandData.zoning}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Boundary</FormLabel>
        <select name="boundary" value={LandData.boundary} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="NA">NA</option>
          <option value="barbed-wire-boundary">Barbed Wire Boundary</option>
          <option value="wall-boundary">Wall Boundary</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Corner Plot</FormLabel>
        <select name="boundary" value={LandData.cornerPlot} onChange={handleInputs}>
          <option value="">Select</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="text"
          id="standard-basic"
          label="Road Access"
          variant="standard"
          name="roadAccess"
          value={LandData.roadAccess}
          onChange={handleInputs}
        />
      </FormControl>

      {/* SHARES DETAILS */}
      {rentStatus ? (
        <FormControl className="form-field">
          <TextField
            type="number"
            id="standard-basic"
            label="Rent Price"
            variant="standard"
            name="rentPrice"
            value={LandData.rentPrice}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}
      {!rentStatus ? (
        <>
          <FormControl className="form-field">
            <TextField
              type="number"
              id="standard-basic"
              label="Total shares"
              variant="standard"
              name="totalShares"
              value={LandData.totalShares}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl className="form-field">
            <TextField
              type="number"
              id="standard-basic"
              label="Available Shares"
              variant="standard"
              name="availableShares"
              value={LandData.availableShares}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl className="form-field">
            <TextField
              id="standard-basic"
              label="Price Per Share"
              variant="standard"
              name="perSharePrice"
              value={LandData.perSharePrice}
              onChange={handleInputs}
            />
          </FormControl>
        </>
      ) : null}
    </div>
  );
};

export default LandDetails;
