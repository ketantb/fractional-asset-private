import React, { useEffect, useState } from "react";
import "./stylesheet/PropertyDetails.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";

const PropertyDetails = ({ propertyData, setPropertyData }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setPropertyData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [rentStatus, setRentStatus] = useState(false);
  useEffect(() => {
    if (propertyData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [propertyData.propertyAdType]);

  return (
    <div className="property-details-wrapper">
      <FormControl className="form-field">
        <TextField
          id="standard-basic"
          label="Seller Name"
          variant="standard"
          name="sellerName"
          value={propertyData.sellerName}
          onChange={handleInputs}
        />
      </FormControl>
      <FormControl className="form-field">
        <FormLabel id="demo-row-radio-buttons-group-label">
          Property Ad Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="propertyAdType"
          value={propertyData.propertyAdType}
          onChange={handleInputs}
        >
          <FormControlLabel value="rent" control={<Radio />} label="Rent" />
          <FormControlLabel value="sell" control={<Radio />} label="Sell" />
        </RadioGroup>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Property Age</FormLabel>
        <select
          name="propertyAge"
          value={propertyData.propertyAge}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="New">New</option>
          <option value="1-2years">1-2years</option>
          <option value="2-4years">2-4years</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Property Area"
          variant="standard"
          name="area"
          value={propertyData.area}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Furnishing</FormLabel>
        <select
          name="furnishing"
          value={propertyData.furnishing}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="fully-furnished">Fully furnished</option>
          <option value="semi-furnished">Semi furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </FormControl>

      {/* SHARES DETAILS */}

      {!rentStatus ? (
        <FormControl className="form-field">
          <TextField
            type="number"
            id="standard-basic"
            label="Total shares"
            variant="standard"
            name="totalShares"
            value={propertyData.totalShares}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}

      {!rentStatus ? (
        <FormControl className="form-field">
          <TextField
            type="number"
            id="standard-basic"
            label="Available Shares"
            variant="standard"
            name="availableShares"
            value={propertyData.availableShares}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}

      {!rentStatus ? (
        <FormControl className="form-field">
          <TextField
            id="standard-basic"
            label="Price Per Share"
            variant="standard"
            name="perSharePrice"
            value={propertyData.perSharePrice}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}

      {rentStatus ? (
        <FormControl className="form-field">
          <TextField
            id="standard-basic"
            label="Rent Price"
            variant="standard"
            name="rentPrice"
            value={propertyData.rentPrice}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}
    </div>
  );
};

export default PropertyDetails;
