import React, { useEffect, useState } from "react";
import "./PropertyForm.css";
import axios from "../../../helpers/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { Button, Modal } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import PropertyDetails from "./propertyFormSteps/PropertyDetails";
import Amenities from "./propertyFormSteps/Amenities";
import Locality from "./propertyFormSteps/Locality";
import AdditionalInfo from "./propertyFormSteps/AdditionalInfo";

import { FaHandPointDown } from "react-icons/fa";

import Box from '@mui/material/Box';
import RealEstatePreviewPage from "../real-estate-previewpage/real-estate-previewpage";
import Swal from 'sweetalert2'

const ApartmentForm = () => {
  const navigate = useNavigate();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100vh',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //PROPERTY DETAILS
  const [propertyData, setPropertyData] = useState({
    apartmentName: "",
    propertyAdType: "sell",
    propertyId: "",
    propertyAge: "",
    area: "",
    floorNo: "",
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
    bedroom: 0,
    bathroom: 0,
    rentPrice: 0,
    totalShares: 0,
    availableShares: 0,
    perSharePrice: 0,
    sellerType: "",
    sellerName: "",
    reraId: "",
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

  //UPLOAD PHOTOS
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [finalImgArr, setFinalImgArr] = useState([]);
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState("");

  //HANDLE SUBMIT
  const token = localStorage.getItem("token");
  //HANDLE SUBMIT
  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      toast.error("No Image Chosen !");
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

    if (arr.length !== 0) {
      setImgUrl(true);
    }
  };

  const handlePost = async () => {
    const data = {
      ...propertyData,
      ...locality,
      aminities: aminities,
      imgArr: finalImgArr,
      additionalDetails: additionalDetails,
    };
    console.log("data before posting", data);

    try {
      toast.loading("Uploading images. Please wait");
      const response = await axios.post("/apartment-form", data, {
        headers: {
          authorization: token,
        },
      });

      if (response.data.success) {
        console.log("data saved in db", response);
        toast.dismiss();
        handleClose();
        // toast.success("Property posted successfully");
        Swal.fire({
          title: 'Your Property Advertisement is under screening! We will get back to you soon',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate("/my-profile");
      } else {
        toast.dismiss();
        toast.error("Please signin to your account to post your property");
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
          <Typography>APARTMENT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PropertyDetails
            propertyData={propertyData}
            setPropertyData={setPropertyData}
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
            <p style={{ opacity: "0.6" }}>You can upload upto 8 images only</p>
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

      {/* <Button type="submit" className="btn" onClick={handleUploadImages}>
        POST
      </Button> */}

      {/* </form> */}


      <Button onClick={handleOpen}>Preview</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RealEstatePreviewPage
            propertyData={propertyData}
            locality={locality}
            images={images}
            aminities={aminities}
            additionalDetails={additionalDetails}
            handleClose={handleClose}
            handleUploadImages={handleUploadImages}
          />
        </Box>
      </Modal>


    </div>
  );
};
export default ApartmentForm;
