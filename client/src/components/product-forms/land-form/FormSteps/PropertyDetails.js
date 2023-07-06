import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

// OPTIONS
const sellerType = [
  {
    value: "owner",
    label: "Owner",
  },
  {
    value: "broker",
    label: "Broker",
  },
  {
    value: "builder",
    label: "Builder",
  },
];
const propertyAge = [
  {
    value: "New",
    label: "New",
  },
  {
    value: "1-2years",
    label: "1-2years",
  },
  {
    value: "2-4years",
    label: "2-4years",
  },
];
const furnishing = [
  {
    value: "fully-furnished",
    label: "Fully Furnished",
  },
  {
    value: "semi-furnished",
    label: "Semi Furnished",
  },
  {
    value: "unfurnished",
    label: "Unfurnished",
  },
];
const possessionStatus = [
  {
    value: "ready to move",
    label: "Ready to move",
  },
  {
    value: "under construction",
    label: "Under construction",
  },
];
const statusOfElectricity = [
  {
    value: "no powercut",
    label: "No powercut",
  },
  {
    value: "rare powercut",
    label: "Rare powercut",
  },
  {
    value: "builder",
    label: "Builder",
  },
];
const typeOfOwnership = [
  {
    value: "freehold",
    label: "Freehold",
  },
  {
    value: "lease",
    label: "Lease",
  },
];
const flooringType = [
  {
    value: "marble",
    label: "Marble",
  },
  {
    value: "tiles",
    label: "Tiles",
  },
];
const waterAvailability = [
  {
    value: "0",
    label: "0 hours",
  },
  {
    value: "1",
    label: "1 hours",
  },
  {
    value: "2",
    label: "2 hours",
  },
  {
    value: "3",
    label: "3 hours",
  },
  {
    value: "4",
    label: "4 hours",
  },
  {
    value: "5",
    label: "5 hours",
  },
  {
    value: "6",
    label: "6 hours",
  },
  {
    value: "7",
    label: "7 hours",
  },
  {
    value: "8",
    label: "8 hours",
  },
  {
    value: "9",
    label: "9 hours",
  },
  {
    value: "10",
    label: "10 hours",
  },
  {
    value: "11",
    label: "11 hours",
  },
  {
    value: "12",
    label: "12 hours",
  },
  {
    value: "13",
    label: "13 hours",
  },
  {
    value: "14",
    label: "14 hours",
  },
  {
    value: "`15`",
    label: "`15` hours",
  },
  {
    value: "16",
    label: "16 hours",
  },
  {
    value: "17",
    label: "17 hours",
  },
  {
    value: "18",
    label: "18 hours",
  },
  {
    value: "19",
    label: "19 hours",
  },
  {
    value: "20",
    label: "20 hours",
  },
  {
    value: "21",
    label: "21 hours",
  },
  {
    value: "22",
    label: "22 hours",
  },
  {
    value: "23",
    label: "23 hours",
  },
  {
    value: "24",
    label: "24 hours",
  },
];
const facing = [
  {
    value: "north",
    label: "North",
  },
  {
    value: "north-east",
    label: "North-East",
  },
  {
    value: "east",
    label: "East",
  },
  {
    value: "south-east",
    label: "South East",
  },
  {
    value: "south",
    label: "South",
  },
  {
    value: "south-west",
    label: "South West",
  },
  {
    value: "west",
    label: "West",
  },
  {
    value: "north-west",
    label: "North West",
  },
];

const dimensionsUnit = [
  {
    value: "sq-m",
    label: "sq-m",
  },
  {
    value: "sq-ft",
    label: "sq-ft",
  },
];

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
          type="number"
          name="lotSize"
          label="Lot Size"
          sx={{ width: "250px" }}
          helperText="Please enter   lot size"
          value={propertyData.lotSize}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          type="number"
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
