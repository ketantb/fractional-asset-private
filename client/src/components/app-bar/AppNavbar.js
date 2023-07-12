import React, { useState, useEffect, useRef } from "react";
import "./AppNavbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

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

  // FORM DROPDOWN
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);
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
  //FORM DROPDOWN ENDS

  //LANDING PAGE DROPDOWN
  const [showLandingDropdown, setShowLandingDropdown] = useState(false);
  const [showNestedLandingDropdown, setShowNestedLandingDropdown] =
    useState(false);
  const naviagteToRealEstatePages = (name) => {
    navigate(`${name}-page`); // Replace "/nested-next-page" with the actual route for the nested dropdown option
    setShowNestedLandingDropdown(false);
  };
  const naviagteToNonRealEstatePages = (name) => {
    navigate(`${name}-page`); // Replace "/next-page" with the actual route you want to navigate to
    setShowLandingDropdown(false);
  };
  // LANDING PAGE DROPDOWN ENDS

  //close post property form dropdown on clicking anywhere window
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // form dropdown
        setShowDropdown(false);
        setShowNestedDropdown(false);

        // landing page dropdown
        // setShowLandingDropdown(false);
        // setShowNestedLandingDropdown(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  //close post property dropdown on clicking anywhere window ends

  //close post property form dropdown on clicking anywhere window
  const landingDropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClickForLandingDropdown = (event) => {
      if (
        landingDropdownRef.current &&
        !landingDropdownRef.current.contains(event.target)
      ) {
        setShowLandingDropdown(false);
        setShowNestedLandingDropdown(false);
      }
    };
    window.addEventListener("click", handleOutsideClickForLandingDropdown);
    return () => {
      window.removeEventListener("click", handleOutsideClickForLandingDropdown);
    };
  }, []);
  //close post property dropdown on clicking anywhere window ends

  return (
    <div className="app-navbar-wrap">
      {/* LANDING PAGE DROPDOWN */}
      <div className="col1" ref={landingDropdownRef}>
        <Button
          onClick={() => setShowLandingDropdown(!showLandingDropdown)}
          variant="outlined"
          endIcon={<MdKeyboardArrowDown />}
        >
          Fractional Properties
        </Button>
        {showLandingDropdown && (
          <div className="hidden-dropdown">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() =>
                    setShowNestedLandingDropdown(!showNestedLandingDropdown)
                  }
                >
                  <ListItemText primary="Real Estate" />
                  <ListItemIcon>
                    <MdKeyboardArrowRight className="text-white" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              {showNestedLandingDropdown && (
                <div className="hidden-nested-dropdown">
                  <List>
                    {realEstateArr.map((name, i) => (
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => naviagteToRealEstatePages(name)}
                        >
                          <ListItemText primary={name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </div>
              )}
              {/* {otherCategoryArr.map((name, i) => (
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => naviagteToNonRealEstatePages(name)}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              ))} */}
            </List>
          </div>
        )}
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
          className="subcol2-3 navbar-item"
          onClick={() => navigate("/aboutus")}
        >
          About Us
        </div>
        <div
          className="subcol2-3 navbar-item"
          onClick={() => navigate("/channel-partner")}
        >
          Channel Partner
        </div>
        <div className="subcol2-5 navbar-item">
          <Button
            onClick={() => setShowDropdown(!showDropdown)}
            variant="outlined"
            endIcon={<MdKeyboardArrowDown />}
          >
            Post Property
          </Button>
          {showDropdown && (
            <div className="hidden-dropdown-2">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setShowNestedDropdown(!showNestedDropdown)}
                  >
                    <ListItemText primary="Real Estate" />
                    <ListItemIcon>
                      <MdKeyboardArrowRight className="text-white" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                {showNestedDropdown && (
                  <div className="hidden-nested-dropdown-2">
                    <List>
                      {realEstateArr.map((name, i) => (
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={() => handleRealEstateForm(name)}
                          >
                            <ListItemText primary={name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                )}
                {/* {otherCategoryArr.map((name, i) => (
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleNonRealEstateForms(name)}
                    >
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                ))} */}
              </List>
            </div>
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
