import TextField from "@mui/material/TextField";

const Locality = ({ locality, setLocality }) => {
  // HANDLER
  const handleInputs = (e) => {
    setLocality((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="form-steps">
      <section className="inputs-section">
        <TextField
          size="small"
          spellCheck="false"
          name="street"
          label="Street"
          helperText="Please enter street"
          sx={{ width: "250px" }}
          value={locality.street}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          name="landmark"
          label="Landmark"
          helperText="Please enter landmark"
          sx={{ width: "250px" }}
          value={locality.landmark}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          name="city"
          label="City"
          helperText="Please enter city"
          sx={{ width: "250px" }}
          value={locality.city}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          name="pin"
          label="Pincode"
          helperText="Please enter pincode"
          sx={{ width: "250px" }}
          value={locality.pin}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          name="state"
          label="State"
          helperText="Please enter state"
          sx={{ width: "250px" }}
          value={locality.state}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          spellCheck="false"
          name="nearbyPlaces"
          label="Nearby Places"
          helperText="Please enter nearby places"
          sx={{ width: "250px" }}
          value={locality.nearbyPlaces}
          onChange={handleInputs}
        />
      </section>
    </form>
  );
};

export default Locality;
