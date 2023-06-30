import React, { useState, useEffect, useRef } from "react";
import "./AppNavbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AppNavbar = ({
  auth,
  setAuth,
  realEstateArr,
  otherCategoryArr,
  collectionNames,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    setAuth(token);
    console.log(collectionNames);
    //eslint-disable-next-line
  }, [token]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  //NAVIGATE TO LANDING PAGE
  const navigateToLandingPage = (name) => {
    navigate(`${name}-page`);
    setShowDropdown(false);
  };
  const handleNonRealEstateForms = (name) => {
    navigate(`${name}-form`); // Replace "/next-page" with the actual route you want to navigate to
    setShowDropdown(false);
  };

  const handleRealEstateForm = (name) => {
    // navigate(`/nested-next-page/${option}`); // Replace "/nested-next-page" with the actual route for the nested dropdown option
    navigate(`${name}-form`); // Replace "/nested-next-page" with the actual route for the nested dropdown option
    setShowDropdown(false);
    setShowNestedDropdown(false);
  };

  //close post property dropdown on clicking anywhere window
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowNestedDropdown(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  //close post property dropdown on clicking anywhere window ends

  return (
    <div className="app-navbar-wrap">
      {/* LANDING PAGE DROPDOWN */}
      <div className="dropdown col1 " id="landing-pages-dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            backgroundColor: "transparent",
            border: "0",
            letterSpacing: "3px",
          }}
        >
          FRACTIONAL PROPERTIES
        </button>
        <div className="dropdown-menu" style={{ backgroundColor: "black" }}>
          {collectionNames.map((name, index) => {
            return (
              <div key={index + 1} onClick={() => navigateToLandingPage(name)}>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* LANDING PAGE DROPDOWN ENDS */}
      <div className="col2" ref={dropdownRef}>
        <div className="subcol2-1 navbar-item" onClick={() => navigate("/")}>
          Home
        </div>
        <div
          className="subcol2-2 navbar-item"
          onClick={() => navigate("/how-it-works")}
        >
          How It Works
        </div>
        <div
          className="subcol2-2 navbar-item"
          onClick={() => navigate("/channel-partner")}
        >
          Channel Partner
        </div>
        <div
          className="subcol2-3 navbar-item"
          onClick={() => navigate("/aboutus")}
        >
          About Us
        </div>
        <div className="subcol2-4 navbar-item" onClick={() => navigate("/faqs")}>
          Faq
        </div>
        <div className="subcol2-5 navbar-item">
          <p onClick={() => setShowDropdown(!showDropdown)}>
            Post Property
            <MdKeyboardArrowDown />
          </p>
          {showDropdown && (
            <ul className="submenu">
              <li onClick={() => setShowNestedDropdown(!showNestedDropdown)}>
                <span style={{ borderBottom: "1px solid lightgrey" }}>
                  REAL ESTATE
                  <MdKeyboardArrowRight />
                </span>
                {showNestedDropdown && (
                  <ul className="nested-submenu">
                    {realEstateArr.map((name, i) => {
                      return (
                        <li onClick={() => handleRealEstateForm(name)}>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
              {otherCategoryArr.map((name, i) => {
                return (
                  <li onClick={() => handleNonRealEstateForms(name)}>{name}</li>
                );
              })}
            </ul>
          )}
        </div>
        {auth ? (
          <div
            className="subcol2-6 navbar-item"
            onClick={() => navigate("/my-profile")}
          >
            My Profile
          </div>
        ) : null}
        {auth ? (
          <div
            className="subcol2-7 navbar-item"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </div>
        ) : (
          <div
            className="subcol2-7 navbar-item"
            onClick={() => navigate("/signin")}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default AppNavbar;