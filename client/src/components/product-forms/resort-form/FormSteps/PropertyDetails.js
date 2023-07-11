import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import {
  sellerType,
  propertyAge,
  furnishing,
  possessionStatus,
  statusOfElectricity,
  waterAvailability,
  typeOfOwnership,
  flooringType,
  facing,
} from "../../data";

const PropertyDetails = ({ propertyData, setPropertyData }) => {
  // HOOKS
  const [rentStatus, setRentStatus] = useState(false);
  const [sellerTypeStatus, setSellerTypeStatus] = useState(false);

  // HANDLERS
  const handleInputs = (e) => {
    setPropertyData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (propertyData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [propertyData.propertyAdType]);
  //conditional rendering for seller type for reraId
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
    <form className="form-steps property-details">
      <section className="inputs-section">
        <TextField
          select
          size="small"
          spellCheck="false"
          name="sellerType"
          label="Seller Type"
          sx={{ width: "250px" }}
          helperText="Please select seller type"
          value={propertyData.sellerType}
          onChange={handleInputs}
        >
          {sellerType.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="propertyAge"
          label="Property Age"
          sx={{ width: "250px" }}
          helperText="Please select property age"
          value={propertyData.propertyAge}
          onChange={handleInputs}
        >
          {propertyAge.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          spellCheck="false"
          name="sellerName"
          label="Seller Name"
          sx={{ width: "250px" }}
          helperText="Please enter seller name"
          value={propertyData.sellerName}
          onChange={handleInputs}
        />
        <TextField
          type="text"
          size="small"
          spellCheck="false"
          name="resortName"
          label="Resort Name"
          sx={{ width: "250px" }}
          helperText="Please enter resort name"
          value={propertyData.apartmentName}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          name="propertyId"
          label="Property ID"
          sx={{ width: "250px" }}
          helperText="Please enter property id"
          value={propertyData.propertyId}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="area"
          label="Property Area"
          sx={{ width: "250px" }}
          helperText="Please enter property area"
          value={propertyData.area}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="noOfRooms"
          label="No of Rooms"
          sx={{ width: "250px" }}
          helperText="Please enter no of rooms"
          value={propertyData.noOfRooms}
          onChange={handleInputs}
        />

        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="floorNo"
          label="Floor Number"
          sx={{ width: "250px" }}
          helperText="Please enter floor number"
          value={propertyData.floorNo}
          onChange={handleInputs}
        />

        <TextField
          select
          size="small"
          spellCheck="false"
          name="furnishing"
          label="Furnishing"
          sx={{ width: "250px" }}
          helperText="Please select furnishing"
          value={propertyData.furnishing}
          onChange={handleInputs}
        >
          {furnishing.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="possessionStatus"
          label="Possession Status"
          sx={{ width: "250px" }}
          helperText="Please select possession status"
          value={propertyData.possessionStatus}
          onChange={handleInputs}
        >
          {possessionStatus.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="statusOfElectricity"
          label="Electricity Status"
          sx={{ width: "250px" }}
          helperText="Please select electricity status"
          value={propertyData.statusOfElectricity}
          onChange={handleInputs}
        >
          {statusOfElectricity.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="typeOfOwnership"
          label="Ownership Type"
          sx={{ width: "250px" }}
          helperText="Please select ownership type"
          value={propertyData.typeOfOwnership}
          onChange={handleInputs}
        >
          {typeOfOwnership.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="flooringType"
          label="Flooring Type"
          sx={{ width: "250px" }}
          helperText="Please select flooring type"
          value={propertyData.flooringType}
          onChange={handleInputs}
        >
          {flooringType.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="waterAvailability"
          label="Water Availability"
          sx={{ width: "250px" }}
          helperText="Please select water availability"
          value={propertyData.waterAvailability}
          onChange={handleInputs}
        >
          {waterAvailability.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          size="small"
          spellCheck="false"
          name="facing"
          label="Facing Direction"
          sx={{ width: "250px" }}
          helperText="Please select facing direction"
          value={propertyData.facing}
          onChange={handleInputs}
        >
          {facing.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>

        {sellerTypeStatus ? (
          <TextField
            size="small"
            spellCheck="false"
            id="reraId"
            label="Builder/Broker Rera Id"
            sx={{ width: "250px" }}
            helperText="Please enter rera id"
            value={propertyData.reraId}
            name="reraId"
            onChange={handleInputs}
          />
        ) : null}
        {!rentStatus ? (
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            id="totalShares"
            name="totalShares"
            label="Total Shares"
            sx={{ width: "250px" }}
            helperText="Please enter total shares"
            value={propertyData.totalShares}
            onChange={handleInputs}
          />
        ) : null}
        {!rentStatus ? (
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            id="availableShares"
            name="availableShares"
            label="Available Shares"
            sx={{ width: "250px" }}
            helperText="Please enter available shares"
            value={propertyData.availableShares}
            onChange={handleInputs}
          />
        ) : null}
        {!rentStatus ? (
          <TextField
            size="small"
            spellCheck="false"
            id="perSharePrice"
            name="perSharePrice"
            label="Price/Share"
            sx={{ width: "250px" }}
            helperText="Please enter price/share"
            value={propertyData.perSharePrice}
            onChange={handleInputs}
          />
        ) : null}
        {rentStatus ? (
          <TextField
            size="small"
            spellCheck="false"
            id="rentPrice"
            name="rentPrice"
            label="Rent Price"
            sx={{ width: "250px" }}
            helperText="Please enter rent price"
            value={propertyData.rentPrice}
            onChange={handleInputs}
          />
        ) : null}
      </section>
    </form>
  );
};

export default PropertyDetails;
