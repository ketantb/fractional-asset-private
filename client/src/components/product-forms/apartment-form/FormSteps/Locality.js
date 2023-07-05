import TextField from "@mui/material/TextField";

import { apartmentLocalityConfig } from "../configs/apartmentLocality.config";

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
        {apartmentLocalityConfig.map((i, j) => (
          <TextField
            size="small"
            id={i.id}
            label={i.label}
            helperText={i.helperText}
            sx={{ width: "250px" }}
            value={eval(`locality.${i.id}`)}
            onChange={handleInputs}
          />
        ))}
      </section>
    </form>
  );
};

export default Locality;
