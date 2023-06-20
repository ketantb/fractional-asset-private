import React, { useEffect, useState } from "react";
import "./FilterBox.css";
import PreLoader from "../../../pre-loaders/PreLoader";
import { useDispatch } from "react-redux";

const fractionalTypes = [
  "Residential & Commercial",
  "yacht",
  "art",
  "land",
  "car",
  "jewellery",
];

const FilterBox = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const setFilterPropertyName = (filterType) => {
    dispatch({
      type: "filter_property_name",
      payload: { filterPropertyName: filterType },
    });
  };

  if (fractionalTypes.length === 0) {
    return <PreLoader />;
  }

  return (
    <div className="filterbox-wrap">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          SEARCH PROPERTY BY
        </button>
        <div className="dropdown-menu">
          {fractionalTypes.map((type, index) => {
            return (
              <div key={index + 1}>
                <p
                  value={type}
                  name="filterProperty"
                  onClick={() => setFilterPropertyName(type)}
                >
                  {type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
