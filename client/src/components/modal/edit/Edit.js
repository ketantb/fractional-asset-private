import React, { useEffect } from "react";
import "./Edit.css";

const CarEdit = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });
  return (
    <div>
      <h1>edit modal</h1>
    </div>
  );
};

export default CarEdit;
