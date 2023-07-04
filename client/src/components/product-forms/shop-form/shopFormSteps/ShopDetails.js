import React, { useEffect, useState } from "react";
import "./stylesheet/PropertyDetails.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";

const ShopDetails = ({ shopData, setShopData }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setShopData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [rentStatus, setRentStatus] = useState(false);
  useEffect(() => {
    if (shopData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [shopData.propertyAdType]);

  //conditional rendering for seller type for reraId
  const [sellerTypeStatus, setSellerTypeStatus] = useState(false);
  useEffect(() => {
    if (
      shopData.sellerType === "broker" ||
      shopData.sellerType === "builder"
    ) {
      console.log(shopData.sellerType);
      setSellerTypeStatus(true);
    } else {
      setSellerTypeStatus(false);
    }
  }, [shopData.sellerType]);

  return (
    <div className="property-details-wrapper">
      <FormControl className="form-field">
        <TextField
          id="standard-basic"
          label="Seller Name"
          variant="standard"
          name="sellerName"
          value={shopData.sellerName}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Seller Type</FormLabel>
        <select
          name="sellerType"
          value={shopData.sellerType}
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
          <TextField id="standard-basic" label="Builder/ Broker Rera Id" variant="standard"
            name="reraId" value={shopData.reraId} onChange={handleInputs} />
        </FormControl>
      ) : null}

      {/* <FormControl className="form-field">
        <FormLabel id="demo-row-radio-buttons-group-label">
          Property Ad Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="propertyAdType"
          value={shopData.propertyAdType}
          onChange={handleInputs}
        >
          <FormControlLabel value="rent" control={<Radio />} label="Rent" />
          <FormControlLabel value="sell" control={<Radio />} label="Sell" />
        </RadioGroup>
      </FormControl> */}

      <FormControl className="form-field">
        <FormLabel className="">Type of Ownership</FormLabel>
        <select name="typeOfOwnership" value={shopData.typeOfOwnership} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="freehold">Freehold</option>
          <option value="lease">Lease</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Property Age</FormLabel>
        <select
          name="propertyAge"
          value={shopData.propertyAge}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="New">New</option>
          <option value="1-2years">1-2years</option>
          <option value="2-4years">2-4years</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Shop Type</FormLabel>
        <select
          name="shopType"
          value={shopData.shopType}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="individual-shop">Individual Shop</option>
          <option value="apartment-shop">Apartment Shop</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Total Floors" variant="standard"
          name="totalFloors" value={shopData.totalFloors} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Floor Number" variant="standard"
          name="floorNo" value={shopData.floorNo} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Main Road Facing</FormLabel>
        <select name="mainRoadFacing" value={shopData.mainRoadFacing} onChange={handleInputs}>
          <option value="">Select</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Width of Entrance(feets)" variant="standard"
          name="widthOfEntranceInFeets" value={shopData.widthOfEntranceInFeets} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Yearly Loading %" variant="standard"
          name="loading" value={shopData.loading} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Total Lifts" variant="standard"
          name="totalLifts" value={shopData.totalLifts} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <TextField
          id="standard-basic"
          label="Apartment Name"
          variant="standard"
          name="apartmentName"
          value={shopData.apartmentName}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Possession Status</FormLabel>
        <select name="possessionStatus" value={shopData.possessionStatus} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="ready to move">Ready to move</option>
          <option value="under construction">Under construction</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField
          type="number"
          id="standard-basic"
          label="Super Area"
          variant="standard"
          name="area"
          value={shopData.area}
          onChange={handleInputs}
        />
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Carpet Area" variant="standard"
          name="carpetArea" value={shopData.carpetArea} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Facing Direction</FormLabel>
        <select name="facing" value={shopData.facing} onChange={handleInputs}>
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

      <FormControl className="form-field">
        <FormLabel className="">Furnishing</FormLabel>
        <select
          name="furnishing"
          value={shopData.furnishing}
          onChange={handleInputs}
        >
          <option value="">Select</option>
          <option value="fully-furnished">Fully furnished</option>
          <option value="semi-furnished">Semi furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Corner Shop</FormLabel>
        <select name="cornerShop" value={shopData.cornerShop} onChange={handleInputs}>
          <option value="">Select</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <TextField type="number" id="standard-basic" label="Total Balconies" variant="standard"
          name="totalBalconies" value={shopData.totalBalconies} onChange={handleInputs} />
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Water Availability</FormLabel>
        <select name="waterAvailability" value={shopData.waterAvailability} onChange={handleInputs}>
          {[...Array(25)].map((hour, index) => {
            return (<option value={index}>{index}<span> hours</span></option>)
          })}
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Status of Electricity</FormLabel>
        <select name="statusOfElectricity" value={shopData.statusOfElectricity} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="no powercut">No Powercut</option>
          <option value="rare powercut">Rare Powercut</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Type of Flooring</FormLabel>
        <select name="flooringType" value={shopData.flooringType} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="marble">Marble</option>
          <option value="tiles">Tiles</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Pantry</FormLabel>
        <select name="pantry" value={shopData.pantry} onChange={handleInputs}>
          <option value="">Select</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
      </FormControl>

      <FormControl className="form-field">
        <FormLabel className="">Transaction Type</FormLabel>
        <select name="transactionType" value={shopData.transactionType} onChange={handleInputs}>
          <option value="">Select</option>
          <option value="resale">Resale</option>
          <option value="first-owner">First Owner</option>
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
            value={shopData.totalShares}
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
            value={shopData.availableShares}
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
            value={shopData.perSharePrice}
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
            value={shopData.rentPrice}
            onChange={handleInputs}
          />
        </FormControl>
      ) : null}
    </div>
  );
};

export default ShopDetails;
