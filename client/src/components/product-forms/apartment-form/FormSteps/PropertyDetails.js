import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import { apartmentPropertyConfig } from "../configs/apartmentProperty.config";

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
        {apartmentPropertyConfig.map((i, j) => (
          <TextField
            key={j}
            name={i.id}
            size="small"
            label={i.label}
            sx={{ width: "250px" }}
            helperText={i.helperText}
            select={i.options ? true : false}
            value={eval(`propertyData.${i.id}`)}
            onChange={handleInputs}
          >
            {i.options?.map((i) => (
              <MenuItem key={i.value} value={i.value}>
                {i.label}
              </MenuItem>
            ))}
          </TextField>
        ))}
        {sellerTypeStatus ? (
          <TextField
            size="small"
            name="reraId"
            id="reraId"
            label="Builder/ Broker Rera Id"
            sx={{ width: "250px" }}
            helperText="Please enter rera id"
            value={propertyData.reraId}
            onChange={handleInputs}
          />
        ) : null}
        {!rentStatus ? (
          <TextField
            size="small"
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
