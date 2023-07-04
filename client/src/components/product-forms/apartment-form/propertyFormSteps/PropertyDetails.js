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

  //conditional rendering for seller type for reraId
  const [sellerTypeStatus, setSellerTypeStatus] = useState(false);
  useEffect(() => {
    if (
      propertyData.sellerType === "broker" ||
      propertyData.sellerType === "builder"
    ) {
      console.log(propertyData.sellerType);
      setSellerTypeStatus(true);
    } else {
      setSellerTypeStatus(false);
    }
  }, [propertyData.sellerType]);

  return (
    <div className="property-details-wrapper">
      {/* <FormControl className="form-field"> */}
        <FormControl className="form-field">
          <FormLabel className="">Seller Type</FormLabel>
          <select
            name="sellerType"
            value={propertyData.sellerType}
            onChange={handleInputs}
          >
            <option value="">Select</option>
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="builder">Builder</option>
          </select>
        </FormControl>

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
          <TextField id="standard-basic" label="Apartment Name" variant="standard"
            name="apartmentName" value={propertyData.apartmentName} onChange={handleInputs} />
        </FormControl>

        {sellerTypeStatus ? (
          <FormControl className="form-field">
            <TextField
              id="standard-basic"
              label="Builder/ Broker Rera Id"
              variant="standard"
              name="reraId"
              value={propertyData.reraId}
              onChange={handleInputs}
            />
          </FormControl>
        ) : null}

        {/* <FormLabel id="demo-row-radio-buttons-group-label">
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
      </FormControl> */}

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
        <TextField
          id="standard-basic"
          label="Property ID"
          variant="standard"
          name="propertyId"
          value={propertyData.propertyId}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Bedrooms"
          variant="standard"
          name="bedroom"
          value={propertyData.bedroom}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Bathrooms"
          variant="standard"
          name="bathroom"
          value={propertyData.bathroom}
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

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Carpet Area" variant="standard"
          name="carpetArea" value={propertyData.carpetArea} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Total Balconies" variant="standard"
          name="totalBalconies" value={propertyData.totalBalconies} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Possession Status</FormLabel>
        <select name="possessionStatus" value={propertyData.possessionStatus} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="ready to move">Ready to move</option>
          <option value="under construction">Under construction</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Type of Ownership</FormLabel>
        <select name="typeOfOwnership" value={propertyData.typeOfOwnership} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="freehold">Freehold</option>
          <option value="lease">Lease</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Status of Electricity</FormLabel>
        <select name="statusOfElectricity" value={propertyData.statusOfElectricity} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="no powercut">No Powercut</option>
          <option value="rare powercut">Rare Powercut</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Water Availability</FormLabel>
        <select name="waterAvailability" value={propertyData.waterAvailability} onChange={handleInputs}>
          {[...Array(25)].map((hour, index) => {
            return (<option value={index}>{index}<span> hours</span></option>)
          })}
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Type of Flooring</FormLabel>
        <select name="flooringType" value={propertyData.flooringType} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="marble">Marble</option>
          <option value="tiles">Tiles</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Floor Number" variant="standard"
          name="floorNo" value={propertyData.floorNo} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Total Floors" variant="standard"
          name="totalFloors" value={propertyData.totalFloors} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Total Lifts" variant="standard"
          name="totalLifts" value={propertyData.totalLifts} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Facing Direction</FormLabel>
        <select name="facing" value={propertyData.facing} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="north">North</option>
          <option value="north-east">North-East</option>
          <option value="east">East</option>
          <option value="south-east">South-East</option>
          <option value="south">South</option>
          <option value="south-west">South-West</option>
          <option value="west">West</option>
          <option value="north-west">North-West</option>
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
