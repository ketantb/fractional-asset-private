import React, { useState, useEffect, useRef } from "react";
import "./AppNavbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ImMenu3 } from "react-icons/im"; //down
import { ImMenu4 } from "react-icons/im"; //up

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
    setOpenMobileNav(false);
  };
  const handleRealEstateForm = (name) => {
    // navigate(`/nested-next-page/${option}`); // Replace "/nested-next-page" with the actual route for the nested dropdown option
    navigate(`${name}-form`); // Replace "/nested-next-page" with the actual route for the nested dropdown option
    setShowDropdown(false);
    setShowNestedDropdown(false);
    setOpenMobileNav(false);
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

  // mobile view navbar
  const [openMobileNav, setOpenMobileNav] = useState(false);
  // mobile view navbar ends

  return (
    <div className="app-navbar-wrap">
      {/* LANDING PAGE DROPDOWN */}
      <div className="col1" ref={landingDropdownRef}>
        <button onClick={() => setShowLandingDropdown(!showLandingDropdown)}>
          <span>
            Fractional Properties
            <MdKeyboardArrowDown />
          </span>
        </button>
        {showLandingDropdown && (
          <ul className="landing-page-submenu">
            <li
              onClick={() =>
                setShowNestedLandingDropdown(!showNestedLandingDropdown)
              }
            >
              <span>
                Real Estate
                <MdKeyboardArrowRight />
              </span>
              {showNestedLandingDropdown && (
                <ul className="landing-page-nested-submenu">
                  {realEstateArr.map((name, i) => {
                    return (
                      <li onClick={() => naviagteToRealEstatePages(name)}>
                        {name}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            {otherCategoryArr.map((name, i) => {
              return (
                <li onClick={() => naviagteToNonRealEstatePages(name)}>
                  {name}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* DESKTOP VIEW */}
      {/* LANDING PAGE DROPDOWN ENDS */}
      <div className="col2" ref={dropdownRef}>
        <div
          className="subcol2-1 navbar-item"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="subcol2-2 navbar-item"
          onClick={() => {
            navigate("/how-it-works");
          }}
        >
          How It Works
        </div>
        <div
          className="subcol2-3 navbar-item"
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          About Us
        </div>
        {/* <div
          className="subcol2-3 navbar-item"
          onClick={() => {
            navigate("/channel-partner");
          }}
        >
          Channel Partner
        </div> */}
        {/* <div
          className="subcol2-4 navbar-item"
          onClick={() => {
            navigate("/faq");
          }}
        >
          Faq
        </div> */}
        <div className="subcol2-5 navbar-item" style={{ marginTop: "1rem" }}>
          <p onClick={() => setShowDropdown(!showDropdown)}>
            List Property
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
            onClick={() => {
              navigate("/my-profile");
            }}
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
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login
          </div>
        )}
      </div>
      {/* DESKTOP VIEW ENDS*/}

      {/* mobile view col2 */}
      <div className="mobile-view-navbar">
        {!openMobileNav ? (
          <section className="menu-icon">
            <ImMenu3
              className="hamburger-menu"
              onClick={() => setOpenMobileNav(true)}
            />
          </section>
        ) : (
          <section className="menu-icon">
            <ImMenu4
              className="hamburger-menu"
              onClick={() => setOpenMobileNav(false)}
            />
          </section>
        )}

        {openMobileNav && (
          <section className="mobile-navbar">
            <div ref={dropdownRef}>
              {auth ? (
                <div
                  className="subcol2-7 mob-navbar-item"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                    setOpenMobileNav(false);
                  }}
                >
                  Logout
                </div>
              ) : (
                <div
                  className="subcol2-7 mob-navbar-item"
                  onClick={() => {
                    navigate("/signin");
                    setOpenMobileNav(false);
                  }}
                >
                  Login
                </div>
              )}
              <div
                className="subcol2-1 mob-navbar-item"
                onClick={() => {
                  navigate("/");
                  setOpenMobileNav(false);
                }}
              >
                Home
              </div>
              <div
                className="subcol2-2 mob-navbar-item"
                onClick={() => {
                  navigate("/how-it-works");
                  setOpenMobileNav(false);
                }}
              >
                How It Works
              </div>
              <div
                className="subcol2-3 mob-navbar-item"
                onClick={() => {
                  navigate("/aboutus");
                  setOpenMobileNav(false);
                }}
              >
                About Us
              </div>
              <div
                className="subcol2-3 mob-navbar-item"
                onClick={() => {
                  navigate("/channel-partner");
                  setOpenMobileNav(false);
                }}
              >
                Channel Partner
              </div>
              <div
                className="subcol2-4 mob-navbar-item"
                onClick={() => {
                  navigate("/faq");
                  setOpenMobileNav(false);
                }}
              >
                Faq
              </div>
              <div className="subcol2-5 mob-navbar-item">
                <p onClick={() => setShowDropdown(!showDropdown)}>
                  Post Property
                  <MdKeyboardArrowDown />
                </p>
                {showDropdown && (
                  <ul className="mob-submenu">
                    <li
                      onClick={() => setShowNestedDropdown(!showNestedDropdown)}
                    >
                      <span style={{ borderBottom: "1px solid lightgrey" }}>
                        REAL ESTATE
                        <MdKeyboardArrowRight />
                      </span>
                      {showNestedDropdown && (
                        <ul className="mob-nested-submenu">
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
                        <li onClick={() => handleNonRealEstateForms(name)}>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              {auth ? (
                <div
                  className="subcol2-6 mob-navbar-item"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </div>
              ) : null}
            </div>
          </section>
        )}
      </div>
      {/* mobile view menu items */}
    </div>
  );
};

export default AppNavbar;
