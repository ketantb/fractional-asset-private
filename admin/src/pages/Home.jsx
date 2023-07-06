import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded, BiLogOutCircle } from "react-icons/bi";
import { BsFillHousesFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import VerifyPropertyTable from "../components/VerifyPropertyTable";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationData, setVerificationData] = useState([]);

  const getVerificationData = async () => {
    await axios
      .get(`/data-sent-for-verification`)
      .then((data) => {
        setIsLoading(true);
        setVerificationData(data.data.list);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getVerificationData();
  }, []);

  const actions = [
    {
      icon: (
        <BiLogOutCircle
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="text-xl text-red-500"
        />
      ),
      name: "Logout",
    },
    {
      icon: (
        <BsFillHousesFill
          onClick={() => navigate("/site-visit")}
          className="text-xl text-red-500"
        />
      ),
      name: "Site Visit",
    },
    {
      icon: (
        <AiOutlineUsergroupAdd
          onClick={() => navigate("/seller-accounts")}
          className="text-xl text-red-500"
        />
      ),
      name: "Seller Accounts",
    },
    {
      icon: (
        <TiTickOutline
          onClick={() => navigate("/home")}
          className="text-xl text-red-500"
        />
      ),
      name: "Property Verifications",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header
            className="header-wrap"
            style={{ height: "2rem", margin: "2rem 1rem " }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "1.5rem",
                paddingLeft: "4rem",
                letterSpacing: ".5rem",
              }}
            >
              UNVERIFIED PROPERTIES
            </h1>
          </header>
          <div className="block 2xl:xl:hidden">
            <Cards data={verificationData} />
          </div>
          <div className="hidden 2xl:block">
            <VerifyPropertyTable data={verificationData} />
          </div>
        </>
      )}
      <SpeedDial
        ariaLabel=""
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<BiDotsVerticalRounded className="text-xl" />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Home;
