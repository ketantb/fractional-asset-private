import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import {
  sellerType,
  propertyAge,
  possessionStatus,
  typeOfOwnership,
  dimensionsUnit,
  plotSizeUnit,
  boundary
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
          size="small"
          spellCheck="false"
          name="landName"
          label="Land Name"
          sx={{ width: "250px" }}
          helperText="Please enter land name"
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
          select
          size="small"
          spellCheck="false"
          name="dimensionsUnit"
          label="Unit of Dimension"
          sx={{ width: "250px" }}
          helperText="Please select unit type"
          value={propertyData.dimensionsUnit}
          onChange={handleInputs}
        >
          {dimensionsUnit.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          spellCheck="false"
          type="text"
          name="zoning"
          label="Zoning"
          sx={{ width: "250px" }}
          helperText="Please enter zoning"
          value={propertyData.zoning}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="dimensionLength"
          label="Length"
          sx={{ width: "250px" }}
          helperText="Please enter Length"
          value={propertyData.dimensionLength}
          onChange={handleInputs}
        />
        
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="dimensionBreadth"
          label="Breath"
          sx={{ width: "250px" }}
          helperText="Please enter breadth"
          value={propertyData.totalFloors}
          onChange={handleInputs}
        />

        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="plotSize"
          label="Plot Size"
          sx={{ width: "250px" }}
          helperText="Please enter plot size"
          value={propertyData.floorNo}
          onChange={handleInputs}
        />

        <TextField
          select
          size="small"
          spellCheck="false"
          name="plotSizeUnit"
          label="Plot Size Unit"
          sx={{ width: "250px" }}
          helperText="Please select seller type"
          value={propertyData.plotSizeUnit}
          onChange={handleInputs}
        >
          {plotSizeUnit.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          size="small"
          spellCheck="false"
          name="boundary"
          label="Boundary"
          sx={{ width: "250px" }}
          helperText="Please select ownership type"
          value={propertyData.boundary}
          onChange={handleInputs}
        >
          {boundary.map((i) => (
            <MenuItem key={i.value} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          size="small"
          spellCheck="false"
          type="number"
          name="boundary"
          label="Boundary"
          sx={{ width: "250px" }}
          helperText="Please enter boundary"
          value={propertyData.boundary}
          onChange={handleInputs}
        />

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

        {sellerTypeStatus ? (
          <TextField
            size="small"
            spellCheck="false"
            id="reraId"
            label="Builder/Broker Rera Id"
            sx={{ width: "250px" }}
            helperText="Please enter rera id"
            value={propertyData.reraId}
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
