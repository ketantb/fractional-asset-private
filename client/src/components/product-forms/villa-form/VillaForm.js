import React, { useEffect, useState } from "react";
import "./PropertyForm.css";
import axios from "../../../helpers/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import VillaDetails from "./propertyFormSteps/VillaDetails";
import Amenities from "./propertyFormSteps/Amenities";
import Locality from "./propertyFormSteps/Locality";
import AdditionalInfo from "./propertyFormSteps/AdditionalInfo";

import { FaHandPointDown } from "react-icons/fa";
import { nanoid } from 'nanoid'
import WhyInvestInThisVilla from "./propertyFormSteps/WhyInvest";
import VillaApprovals from "./propertyFormSteps/Approvals";

const VillaForm = () => {
  const navigate = useNavigate();

  //PROPERTY DETAILS
  const [villaData, setVillaData] = useState({
    sellerType: "",
    sellerName: "",
    reraId: "",
    villaName: "",
    propertyId: "",
    propertyAdType: "",
    propertyAge: "",
    area: "",
    possessionStatus: "",
    totalFloors: "",
    totalLifts: "",
    facing: "",
    carpetArea: "",
    flooringType: "",
    waterAvailability: "",
    statusOfElectricity: "",
    totalBalconies: "",
    typeOfOwnership: "",
    bedroom: "",
    bathroom: "",
    rentPrice: "",
    totalShares: "",
    availableShares: "",
    perSharePrice: "",
  });
  //LOCATION DETAILS
  const [locality, setLocality] = useState({
    street: "",
    landmark: "",
    city: "",
    pin: "",
    state: "",
    nearbyPlaces: "",
  });

  //AMINTIES
  const [aminities, setAminities] = useState([]);
  const [newAminity, setNewAminity] = useState("");

  //WHY INVEST IN THIS PROJECT
  const [whyInvest, setWhyInvest] = useState([]);
  const [whyInvestFactors, setWhyInvestFactors] = useState("");

  //APPROVALS
  const [approvals, setApprovals] = useState([]);
  const [newApprovals, setNewApprovals] = useState("");

  //UPLOAD PHOTOS
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [finalImgArr, setFinalImgArr] = useState([]);
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  //UPLOAD 360 VIEW IMAGES
  const [view360images, setView360images] = useState([]);
  const [img360Url, setImg360Url] = useState(false);
  const [final360ImgArr, setFinal360ImgArr] = useState([]);
  const handleFile360Change = (e) => {
    setView360images([...view360images, ...e.target.files]);
  };

  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState("");

  //HANDLE SUBMIT
  const token = localStorage.getItem("token");
  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      toast.error("Add property images !");
      return;
    }
    if (view360images.length === 0) {
      toast.error("Add 360degree view image of property !");
      return;
    }
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", "insta_clone");
      imgData.append("file", images[i]);
      await axios
        .post(process.env.REACT_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          console.log(resp);
          arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }
    console.log(arr);
    setFinalImgArr(arr);

    // 360 view images
    let images360arr = [];
    for (let i = 0; i < view360images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", "insta_clone");
      imgData.append("file", view360images[i]);
      await axios
        .post(process.env.REACT_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          console.log(resp);
          images360arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }
    console.log(images360arr);
    setFinal360ImgArr(images360arr);
    if (arr.length !== 0) {
      setImgUrl(true);
      setImg360Url(true);
    }
  };

  const handlePost = async () => {
    toast.loading("Uploading images. Please wait");
    const uniqueId = nanoid(5)
    const data = {
      ...villaData,
      ...locality,
      aminities: aminities,
      imgArr: finalImgArr,
      additionalDetails: additionalDetails,
      view360ImgArr: final360ImgArr,
      uniqueId: uniqueId
    };
    console.log("data before posting", data);

    try {
      const response = await axios.post("/villa-form", data, {
        headers: {
          authorization: token,
        },
      });

      if (response.data.success) {
        console.log("data saved in db", response);
        toast.dismiss();
        navigate("/my-profile");
        toast.success("Property posted successfully");
      } else {
        toast.error();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (imgUrl) {
      handlePost();
    }
    // eslint-disable-next-line
  }, [imgUrl]);

  return (
    <div className="property-form-wrapper">
      {/* <form onSubmit={handlePost}> */}
      <div style={{ display: "flex" }}>
        <div>
          <FaHandPointDown />
        </div>
        <Typography className="title" style={{ marginLeft: "0.5rem" }}>
          SELL OR BUY YOUR PROPERTY HERE FOR FREE
        </Typography>
      </div>

      {/* section1 */}
      <Accordion>
        <AccordionSummary
          className="accordian"
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>VILLA DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VillaDetails
            villaData={villaData}
            setVillaData={setVillaData}
          />
        </AccordionDetails>
      </Accordion>
      {/* section 1 ends */}

      {/* section 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>AMINITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Amenities
            aminities={aminities}
            setAminities={setAminities}
            newAminity={newAminity}
            setNewAminity={setNewAminity}
          />
        </AccordionDetails>
      </Accordion>
      {/* section 2 ends */}

      {/* section 2.5 */}
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>AMINITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <WhyInvestInThisVilla
            whyInvest={whyInvest}
            setWhyInvest={setWhyInvest}
            whyInvestFactors={whyInvestFactors}
            setWhyInvestFactors={setWhyInvestFactors}
          />
        </AccordionDetails>
      </Accordion>
      {/* section 2.5 ends */}

      {/* section 2.6 */}
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>APPROVALS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VillaApprovals
            newApprovals={newApprovals}
            setNewApprovals={setNewApprovals}
            approvals={approvals}
            setApprovals={setApprovals}
          />
        </AccordionDetails>
      </Accordion>
      {/* section 2.6 ends */}

      {/* section 3 */}
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={"+"}
        >
          <Typography>LOCALITY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Locality locality={locality} setLocality={setLocality} />
        </AccordionDetails>
      </Accordion>
      {/* section 3 ends */}

      {/* section 4 */}
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={"+"}
        >
          <Typography>UPLOAD PROPERTY IMAGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="upload-image-form-wrapper">
            <form>
              <input
                type="file"
                name="images"
                multiple
                onChange={handleFileChange}
              />
            </form>
            <div className="images-wrapper">
              {images.map((image) => (
                <div className="uploaded-images" key={image}>
                  <img src={URL.createObjectURL(image)} alt="" width="100" />
                </div>
              ))}
            </div>
          </div>
        </AccordionDetails>

        {/* upload 360 view images */}
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={"+"}
        >
          <Typography>UPLOAD 360degree VIEW IMAGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="upload-image-form-wrapper">
            <form>
              <input
                type="file"
                name="view360images"
                multiple
                onChange={handleFile360Change}
              />
            </form>
            <div className="images-wrapper">
              {view360images.map((image) => (
                <div className="uploaded-images" key={image}>
                  <img src={URL.createObjectURL(image)} alt="" width="100" />
                </div>
              ))}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* section 4 ends */}

      {/* section 5 */}
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ADDITIONAL INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AdditionalInfo
            additionalDetails={additionalDetails}
            setAdditionalDetails={setAdditionalDetails}
          />
        </AccordionDetails>
      </Accordion>
      {/* section 5 ends */}

      <Button type="submit" className="btn" onClick={handleUploadImages}>
        POST
      </Button>

      {/* </form> */}
    </div>
  );
};
export default VillaForm;
