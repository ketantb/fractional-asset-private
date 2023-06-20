import React, { useState } from "react";
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

//products landing pages
import PropertyPage from "./components/products-landingPages/property/Property";
import CarPage from "./components/products-landingPages/car/Car";
// products details page

//MY PROFILE SECTION
import MyProfile from "./components/my-profile-section/my-profile/MyProfile";
//my profile childs
import AdminDetails from "./components/my-profile-section/admin-details/AdminDetails";
import Listings from "./components/my-profile-section/listings/Listings";

//website details
import AboutUs from "./components/website-details/aboutus/AboutUs";
import FAQs from "./components/website-details/FaqPage/FAQs";
import EnquirySection from "./components/website-details/enquiryContactSection/EnquirySection";
import HowItWorks from "./components/website-details/how-it-works/HowItWorks";

import Footer from "./components/footer/Footer";

//reducer components
import Reducer from "./reducer/Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import YachtPage from "./components/products-landingPages/yacht/Yacht";
import VillaPage from "./components/products-landingPages/villa/villa";
import VillaDetails from "./components/products-view-details/villa-details/villa-details";
import ArtPage from "./components/products-landingPages/art/art";
import ArtGallery from "./components/products-landingPages/art/art-gallery/art-gallery";
import JewelleryPage from "./components/products-landingPages/jewellery/jewellery";

function App() {
  const [auth, setAuth] = useState("");
  const store = createStore(Reducer);
  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <AppNavbar auth={auth} setAuth={setAuth} />
        <div className="component-wraps">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<Register />}></Route>

            {/* Product Form Routes */}
            {/* <Route element={<ProductFormRoute />}> */}
            <Route path="/apartment-form" element={<ApartmentForm />}></Route>
            <Route path="/yacht-form" element={<Yachtform />}></Route>
            <Route path="/car-form" element={<Carform />}></Route>
            <Route path="/art-form" element={<Artform />}></Route>
            <Route path="/jewelry-form" element={<Jewelryform />}></Route>
            <Route path="/land-form" element={<Landform />}></Route>
            {/* </Route> */}
            {/* Product Form Routes end*/}

            {/* landing pages */}
            <Route path="/property-page" element={<PropertyPage />}></Route>
            <Route path="/yacht-page" element={<YachtPage />}></Route>
            <Route path="/car-page" element={<CarPage />}></Route>
            <Route path="/villa-page" element={<VillaPage />}></Route>
            <Route path="/art-page" element={<ArtPage />}></Route>
            <Route path="/art-page/gallery" element={<ArtGallery />}></Route>
            <Route path="/jewellery-page" element={<JewelleryPage />}></Route>
            {/* landing pages  end*/}

            {/* my profile page roues */}
            <Route element={<MyProfile />}>
              <Route path="/my-profile" element={<AdminDetails />}></Route>
              <Route path="/listings" element={<Listings />}></Route>
            </Route>
            {/* my profile page routes end */}

            {/*Product Details*/}
            <Route path="/villa-details" element={<VillaDetails />}></Route>
            {/*Product Details*/}

            {/*footer componenets */}
            <Route path="/enquiry" element={<EnquirySection />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
