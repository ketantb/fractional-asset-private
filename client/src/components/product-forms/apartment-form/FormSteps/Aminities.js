import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const Amenities = ({ newAminity, setNewAminity, aminities, setAminities }) => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);

  const handleAminityarray = () => {
    setAminities([...aminities, newAminity]);
    setNewAminity("");
    setStatus(false);
  };
  const handleSave = () => {
    console.log(aminities);
    setMsg("Saved");
    setStatus(true);
  };

  return (
    <div className="aminities-wrapper">
      <div>
        <TextField
          type="text"
          size="small"
          name="aminities"
          label="Aminity"
          value={newAminity}
          sx={{ width: "250px" }}
          onChange={(e) => setNewAminity(e.target.value)}
        />
        <Button onClick={handleAminityarray}>Add</Button>
        <div>
          {aminities.map((item, i) => {
            return <li key={i + 1}>{item}</li>;
          })}
        </div>
        {status && <Typography>{msg}</Typography>}
        <Button onClick={handleSave}>save</Button>
      </div>
    </div>
  );
};

export default Amenities;
