import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded, BiLogOutCircle } from "react-icons/bi";
import { BsFillHousesFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import SellerAccountsTable from "../components/SellerAccountsTable";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const SellerAccounts = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [sellerAccounts, setSellerAccounts] = useState([]);

  const getSellerAccountsData = async () => {
    await axios
      .get(`/seller-accounts`)
      .then((resp) => {
        console.log("result", resp.data);
        setIsLoading(true);
        setSellerAccounts(resp.data.list);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getSellerAccountsData();
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
          <div className="block 2xl:xl:hidden">
            <Cards data={sellerAccounts} />
          </div>
          <div className="hidden 2xl:block">
            <SellerAccountsTable data={sellerAccounts} />
          </div>
        </>
      )}
      <span className="fixed bottom-[31px] right-20 text-blue-500 font-serif">
        SELLER ACCOUNTS
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

export default SellerAccounts;
