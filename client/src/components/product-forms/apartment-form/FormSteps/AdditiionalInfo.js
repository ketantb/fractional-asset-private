import React from "react";
import { TextField } from "@mui/material";

const AdditionalInfo = ({
  additionalDetails,
  setAdditionalDetails,
  err,
  setErr,
}) => {
  const handleInputs = (e) => {
    setAdditionalDetails(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {err ? (
        <p style={{ color: "red" }}>
          Size should not be greater than 1000 words{" "}
        </p>
      ) : null}
      <TextField
        size="small"
        spellCheck="false"
        name="additionalDetails"
        multiline
        rows={2}
        sx={{ width: { xs: "325px", md: "100%" } }}
        inputProps={{ style: { fontSize: 15 } }}
        value={additionalDetails}
        onChange={handleInputs}
      />
    </div>
  );
};

export default AdditionalInfo;
