import React, { useEffect, useState } from "react";
import "./AppNavbar.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { FaAlignJustify } from "react-icons/fa";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";

const AppNavbar = ({ auth, setAuth, collectionForms, landingPagesArr }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    setAuth(token);
    //eslint-disable-next-line
  }, [token]);

  /*  handling responsive navbar */
  const [showNavbar, setShowNavbar] = useState("none");
  // eslint-disable-next-line
  const [navbarHidden, setNavbarHidden] = useState(true);
  //funtion to show or hide navbar on clicking menu icon
  const handleOpenNavbar = () => {
    setShowNavbar("block");
    setNavbarHidden(false);
  };
  const handleCloseNavbar = () => {
    setShowNavbar("none");
    setNavbarHidden(false);
  };
  /*   handling responsive navbar ends */

  return (
    <div className="app-bar" style={{ backgroundColor: " rgba(0,0,0,1)" }}>
      {/* desktop view navbar */}

      <div className="desktop-section">
        <section className="appbar-col-1">
          {/* dropdown for various landing pages */}
          <div className="dropdown " id="landing-pages-dropdown">
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
              {landingPagesArr.map((obj, index) => {
                const formName = Object.keys(obj)[0];
                const formLink = Object.values(obj)[0];

                return (
                  <div key={index + 1} onClick={() => navigate(formLink)}>
                    <p>{formName}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* dropdown for various landing pages ends */}
        </section>

        <section className="appbar-col-2">
          <Box className="col-2-box">
            <Button className="btn-item" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              className="btn-item"
              onClick={() => navigate("/how-it-works")}
            >
              How It Works
            </Button>
            <Button className="btn-item" onClick={() => navigate("/aboutus")}>
              About Us
            </Button>
            <Button className="btn-item" onClick={() => navigate("/faqs")}>
              FAQ
            </Button>

            {/* dropdown for varios property forms */}
            <div className="dropdown">
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
                  fontWeight: "bold",
                  letterSpacing: "3px",
                }}
              >
                POST PROPERTY
              </button>
              <div
                className="dropdown-menu"
                style={{ backgroundColor: "black" }}
              >
                {collectionForms.map((obj, index) => {
                  const formName = Object.keys(obj)[0];
                  const formLink = Object.values(obj)[0];

                  return (
                    <div key={index + 1} onClick={() => navigate(formLink)}>
                      <p>{formName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* dropdown for varios property forms end */}

            {auth ? (
              <Button
                className="btn-item"
                onClick={() => {
                  navigate("/my-profile");
                }}
              >
                MY PROFILE
              </Button>
            ) : null}
            {auth ? (
              <Button
                className="btn-item"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                LOGOUT
              </Button>
            ) : (
              <Button className="btn-item" onClick={() => navigate("/signin")}>
                LOGIN
              </Button>
            )}
          </Box>

          <div
            className="menu"
            onClick={handleOpenNavbar}
            style={{ color: "white" }}
          >
            <FaAlignJustify />
          </div>
        </section>
      </div>

      {/* mobile view navbar */}
      <div className="right-side-navbar" style={{ display: showNavbar }}>
        <Box
          className="col-2-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <Icon
              icon={cross}
              size={15}
              style={{ float: "right", paddingRight: "1rem" }}
              onClick={handleCloseNavbar}
            />
          </div>
          <Button
            className="btn-item"
            onClick={() => {
              navigate("/");
              handleCloseNavbar();
            }}
          >
            Home
          </Button>
          <Button
            className="btn-item"
            onClick={() => {
              navigate("/how-it-works");
              handleCloseNavbar();
            }}
          >
            How It Works
          </Button>
          <Button
            className="btn-item"
            onClick={() => {
              navigate("/aboutus");
              handleCloseNavbar();
            }}
          >
            About Us
          </Button>
          <Button
            className="btn-item"
            onClick={() => {
              navigate("/faqs");
              handleCloseNavbar();
            }}
          >
            FAQs
          </Button>

          <Button
            className="btn-item"
            onClick={() => {
              navigate("/apartment-form");
              handleCloseNavbar();
            }}
          >
            POST PROPERTY
          </Button>
          {auth ? (
            <Button
              className="btn-item"
              style={{ padding: "0rem", marginTop: "0.1rem" }}
              onClick={() => {
                navigate("/my-profile");
                handleCloseNavbar();
              }}
            >
              MY PROPERTY
            </Button>
          ) : null}
          {auth ? (
            <Button
              className="btn-item"
              onClick={() => {
                localStorage.clear();
                navigate("/");
                handleCloseNavbar();
              }}
              style={{
                padding: "0rem",
                marginTop: "0.4rem",
                marginBottom: "1rem",
              }}
            >
              LOGOUT
            </Button>
          ) : (
            <Button
              className="btn-item"
              onClick={() => {
                navigate("/signin");
                handleCloseNavbar();
              }}
              style={{ padding: "0rem", marginTop: "0rem" }}
            >
              LOGIN
            </Button>
          )}
        </Box>
      </div>

      {/* mobile view navbar ends */}
    </div>
  );
};

export default AppNavbar;