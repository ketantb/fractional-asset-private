import React, { useEffect, useState } from "react";
import axios from "../../helpers/axios";
import PreLoader from "../../pre-loaders/PreLoader";
import Card from "../mini-cards/all-property-listings-card/Card";
import { TextField, MenuItem } from "@mui/material";
import { BiReset } from "react-icons/bi";

const AllProperties = ({ realEstateArr }) => {
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get("/all-listings");
      // console.log(resp.data.list);
      setList(resp.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // filter by type
  const [type, setType] = React.useState("");
  const handleChange = (event) => {
    setType(event.target.value);
    console.log(type);
  };

  if (list.length === 0) {
    return <PreLoader />;
  }

  return (
    <div className="mt-[6rem]">
      <div className="px-4 sm:px-5 flex flex-col sm:flex-row justify-between ">
        <TextField
          className="w-full sm:w-1/4"
          select
          size="small"
          spellCheck="false"
          label="Search Property Type"
          name="type"
          value={type}
          onChange={handleChange}
        >
          {/* <MenuItem value="" className="capitalize">
            All Properties
          </MenuItem> */}
          {realEstateArr.map((option, i) => (
            <MenuItem key={i + 1} value={option} className="capitalize">
              {option}
            </MenuItem>
          ))}
        </TextField>
        <div
          className="mr-6 pt-4 text-sm sm:text-xl flex cursor-pointer"
          value=""
          name="type"
          onClick={() => setType("")}
        >
          Reset
          <BiReset className="ml-2 mt-1" />
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 md:gap-[0.5rem]">
        {list
          .filter((property) => {
            if (!type.length) {
              return property;
            } else if (type.length && property.propertyType === type) {
              return property;
            }
          })
          .map((data, i) => {
            return <Card data={data} key={i + 1} />;
          })}
      </div>
    </div>
  );
};

export default AllProperties;
