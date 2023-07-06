import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignIn from "./components/signin/Signin";
import Register from "./components/registration/Registration";

import Home from "./components/home/Home";
import AppNavbar from "./components/app-bar/AppNavbar";

//forms
import ApartmentForm from "./components/product-forms/apartment-form/ApartmentForm";
import Yachtform from "./components/product-forms/yacht-form/YachtForm";
import Carform from "./components/product-forms/car-form/CarForm";
import Landform from "./components/product-forms/land-form/LandForm";
import Jewelryform from "./components/product-forms/jewelry-form/JewelryForm";
import Artform from "./components/product-forms/art-form/ArtForm";
import ResortForm from "./components/product-forms/resort-form/ResortForm";
import VillaForm from "./components/product-forms/villa-form/VillaForm";
import ShopForm from "./components/product-forms/shop-form/ShopForm";

//products landing pages
import ApartmentPage from "./components/products-landingPages/apartment/Apartment";
import CarPage from "./components/products-landingPages/car/Car";
import YachtPage from "./components/products-landingPages/yacht/Yacht";
import ArtPage from "./components/products-landingPages/art/Art";
import VillaPage from "./components/products-landingPages/villa/Villa";
import JewelleryPage from "./components/products-landingPages/jewellery/Jewellery";
import ResortPage from "./components/products-landingPages/resort/ResortPage";
import WareHousePage from "./components/products-landingPages/warehouse/Warehouse";
import ShopPage from "./components/products-landingPages/shop/Shop";
import ParkingPage from "./components/products-landingPages/parking/Parking";
import StartUpPage from "./components/products-landingPages/startup/Startup";
import LandPage from "./components/products-landingPages/land/Land";

// products details page
import ResortVillaApartmentDetails from "./components/products-view-details/villa-resort-apartment-details/villa-resort-apartment-details";
import ArtGallery from "./components/products-landingPages/art/art-gallery/art-gallery";

//MY PROFILE SECTION
import MyProfile from "./components/my-profile-section/my-profile/MyProfile";

//my profile childs
import AdminDetails from "./components/my-profile-section/admin-details/AdminDetails";
import Listings from "./components/my-profile-section/listings/Listings";
import Notifications from "./components/my-profile-section/notification/Notifications";

//website details
import AboutUs from "./components/website-details/aboutus/AboutUs";
import FAQs from "./components/website-details/FaqPage/FAQs";
import EnquirySection from "./components/website-details/enquiryContactSection/EnquirySection";
import HowItWorks from "./components/website-details/how-it-works/HowItWorks";

//channel partner
import ChannelPartner from "./components/channel-partner/channel-partner";

import Footer from "./components/footer/Footer";

//reducer components
import Reducer from "./reducer/Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

//extra components
import axios from "./helpers/axios";
import PreLoader from "./pre-loaders/PreLoader";
import BecomeAChannelPartner from "./components/channel-partner/become-a-channel-partner/become-a-channel-partner";

//edit forms
import ApartmentEdit from "./components/edit-forms/apartment/Apartment";
import VillaEdit from "./components/edit-forms/villa/Villa";
import ResortEdit from "./components/edit-forms/resort/Resort";
import ShopEdit from "./components/edit-forms/shop/Shop";
import CarEdit from "./components/edit-forms/car/car";
//edit form ends

function App() {
  const [auth, setAuth] = useState("");
  const store = createStore(Reducer);

  //get collections from backend
  const [collectionNames, setCollectionNames] = useState([]);
  const [realEstateArr, setRealEstateArr] = useState([]);
  const [otherCategoryArr, setOtherCategoryArr] = useState([]);

  const getCollections = async () => {
    try {
      const response = await axios.get("/property-collections");
      // console.log(response);
      const arr = response.data.collectionList.map((name) => name.slice(0, -9));
      arr.sort();
      setCollectionNames(arr);

      const realestateArr = arr
        .filter((name) =>
          ["apartment", "villa", "shop", "resort", "land"].includes(name)
        )
        .sort();
      setRealEstateArr(realestateArr);

      const otherCategoryArr = arr.filter(
        (name) => !realestateArr.includes(name)
      );
      setOtherCategoryArr(otherCategoryArr);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getCollections();
    console.log("collection names=>", collectionNames);
  }, []);

  if (!collectionNames) {
    return <PreLoader />;
  }

  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <AppNavbar
          auth={auth}
          setAuth={setAuth}
          realEstateArr={realEstateArr}
          otherCategoryArr={otherCategoryArr}
          collectionNames={collectionNames}
        />
        <div className="component-wraps">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<Register />}></Route>

            {/* Product Form Routes */}
            {/* <Route element={<ProductFormRoute />}> */}
            <Route
              path="/apartment-form"
              element={<ApartmentForm auth={auth} setAuth={setAuth} />}
            ></Route>
            <Route path="/yacht-form" element={<Yachtform />}></Route>
            <Route path="/car-form" element={<Carform />}></Route>
            <Route path="/art-form" element={<Artform />}></Route>
            <Route path="/jewellery-form" element={<Jewelryform />}></Route>
            <Route path="/land-form" element={<Landform />}></Route>
            <Route path="/resort-form" element={<ResortForm />}></Route>
            <Route path="/villa-form" element={<VillaForm />}></Route>
            <Route path="/shop-form" element={<ShopForm />}></Route>
            {/* </Route> */}
            {/* Product Form Routes end*/}

            {/* landing pages */}
            <Route path="/apartment-page" element={<ApartmentPage />} />
            <Route path="/yacht-page" element={<YachtPage />}></Route>
            <Route path="/car-page" element={<CarPage />}></Route>
            <Route path="/villa-page" element={<VillaPage />}></Route>
            <Route path="/art-page" element={<ArtPage />}></Route>
            <Route path="/art-page/gallery" element={<ArtGallery />}></Route>
            <Route path="/jewellery-page" element={<JewelleryPage />}></Route>
            <Route path="/resort-page" element={<ResortPage />}></Route>
            <Route path="/warehouse-page" element={<WareHousePage />}></Route>
            <Route path="/shop-page" element={<ShopPage />}></Route>
            <Route path="/land-page" element={<LandPage />} />
            <Route path="/parking-page" element={<ParkingPage />}></Route>
            <Route path="/startup-page" element={<StartUpPage />}></Route>
            {/* landing pages  end*/}

            {/* my profile page roues */}
            <Route element={<MyProfile />}>
              <Route path="/my-profile" element={<AdminDetails />}></Route>
              <Route path="/listings" element={<Listings />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
            </Route>
            {/* my profile page routes end */}

            {/*Product Details*/}
            <Route
              path="/villa-resort-apartment-details/:propertyid"
              element={<ResortVillaApartmentDetails />}
            ></Route>
            {/*Product Details*/}

            {/* channel partner route */}
            <Route path="/channel-partner" element={<ChannelPartner />} />
            <Route
              path="/become-a-channel-partner"
              element={<BecomeAChannelPartner />}
            />
            {/* channel partner route */}

            {/*footer componenets */}
            <Route path="/enquiry" element={<EnquirySection />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />

            {/*  edit forms*/}
            <Route
              path="/apartment-edit/:id"
              element={<ApartmentEdit />}
            ></Route>
            <Route path="/villa-edit/:id" element={<VillaEdit />}></Route>
            <Route path="/resort-edit/:id" element={<ResortEdit />}></Route>
            <Route path="/shop-edit/:id" element={<ShopEdit />}></Route>
            <Route path="/car-edit/:id" element={<CarEdit />}></Route>

            {/*  edit forms ends*/}
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
