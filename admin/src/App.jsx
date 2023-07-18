import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import View from "./pages/View";
import SiteVisit from "./pages/SiteVisit";
import SellerAccounts from "./pages/SellerAccounts";
import ReservedSharesData from "./pages/ReservedSharesData";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/view/:id" element={<View />}></Route>
          <Route path="/site-visit" element={<SiteVisit />}></Route>
          <Route path="/seller-accounts" element={<SellerAccounts />}></Route>
          <Route
            path="/reserved-shares"
            element={<ReservedSharesData />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
