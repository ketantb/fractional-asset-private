import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded, BiLogOutCircle } from "react-icons/bi";
import { BsFillHousesFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiHandshakeFill } from "react-icons/pi";

import ReservedSharesDataTable from "../components/ReservedSharesDataTable";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const ReservedSharesData = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [sharesData, setSharesData] = useState([]);

  const getVerificationData = async () => {
    await axios
      .get(`/reserve-share-data`)
      .then((data) => {
        setIsLoading(true);
        setSharesData(data.data.list);
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
          className="text-xl text-blue-500"
        />
      ),
      name: "Site Visit",
    },
    {
      icon: (
        <AiOutlineUsergroupAdd
          onClick={() => navigate("/seller-accounts")}
          className="text-xl text-blue-500"
        />
      ),
      name: "Seller Accounts",
    },
    {
      icon: (
        <PiHandshakeFill
          onClick={() => navigate("/reserved-shares")}
          className="text-xl text-orange-500"
        />
      ),
      name: "Reserved Shares",
    },
    {
      icon: (
        <TiTickOutline
          onClick={() => navigate("/home")}
          className="text-xl text-green-500"
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
          {/* <div className="block 2xl:xl:hidden">
            <Cards data={sharesData} />
          </div> */}
          <div>
            <ReservedSharesDataTable data={sharesData} />
          </div>
        </>
      )}
      <span className="fixed bottom-[31px] right-20 text-blue-500 font-serif">
        RESERVED SHARES
      </span>
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

export default ReservedSharesData;
