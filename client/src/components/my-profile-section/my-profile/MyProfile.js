import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import userImg from "../../../assets/man.png";
import { AiOutlineUser } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";

const MyProfile = () => {
  const store = useSelector((state) => state);
  useEffect(() => {
    console.log(store);
  });
  return (
    <div className="myprofile-wrap" style={{ height: "100vh" }}>
      <div className="navbar-wrap">
        <h4>DASHBOARD</h4>
        <div className="userimg-wrap">
          <img src={userImg} alt="userImage" />
        </div>
        <navbar className="navbar-container">
          <Link to="/my-profile">
            <button>
              <AiOutlineUser className="icon" />
              <p>SELLER DETAILS</p>
            </button>
          </Link>
          <Link to="/listings">
            <button>
              <FaClipboardList className="icon" />
              <p>PROPERTY LISTINGS</p>
            </button>
          </Link>
          <Link to="/notifications">
            <button>
              <MdNotifications className="icon" />
              <p>NOTIFICATIONS </p>
            </button>
          </Link>
          <Link to="/listings">
            <button>
              <IoMdAnalytics className="icon" />
              <p>REPORTNG & PERFORMANCE</p>
            </button>
          </Link>
          <Link to="/listings">
            <button>
              <MdSupportAgent className="icon" />
              <p>SUPPORT & HELPDESK</p>
            </button>
          </Link>
        </navbar>
      </div>

      <div className="outlet-wrap">
        <Outlet />
      </div>
    </div>
  );
};

export default MyProfile;
