import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiAccordion from "@mui/material/Accordion";
import { Box, Button, Modal } from "@mui/material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import "./ResortForm.css";
import Locality from "./FormSteps/Locality";
import Amenities from "./FormSteps/Aminities";
import WhyInvest from "./FormSteps/WhyInvest";
import Approvals from "./FormSteps/Approvals";
import AdditionalInfo from "./FormSteps/AdditiionalInfo";
import PropertyDetails from "./FormSteps/PropertyDetails";
import AdditionalRooms from "./FormSteps/AdditionalRooms";

import RealEstatePreviewPage from "../real-estate-previewpage/real-estate-previewpage";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
    backgroundColor: "transparent",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  backgroundColor: "transparent",
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "transparent",
}));

const ResortForm = ({ auth, setAuth }) => {
  // message to login
  const [loginMsg, setLoginMsg] = useState(false);
  // store token
  const token = localStorage.getItem("token");
  useEffect(() => {
    setAuth(token);
  }, []);
  // {{{{{{{{{{ HOOKS START
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState("panel1");
  //PROPERTY DETAILS
  const [propertyData, setPropertyData] = useState({
    resortName: "",
    propertyAdType: "sell",
    propertyId: "",
    propertyAge: "",
    area: "",
    floorNo: "",
    possessionStatus: "",
    totalFloors: "",
    totalLifts: "",
    facing: "",
    overlooking: "",
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
  //LOCALITY
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
  //APPROVALS
  const [approvals, setApprovals] = useState([]);
  const [newApprovals, setNewApprovals] = useState("");
  //ADDITIONAL ROOMS
  const [additionalRooms, setAdditionalRooms] = useState([]);
  const [newAdditionalRooms, setNewAdditionalRooms] = useState("");
  //WHY INVEST IN THIS PROJECT
  const [whyInvest, setWhyInvest] = useState([]);
  const [whyInvestFactors, setWhyInvestFactors] = useState("");
  //UPLOAD PROPERTY IMAGES
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [finalImgArr, setFinalImgArr] = useState([]);
  //UPLOAD 360 VIEW IMAGES
  const [img360Url, setImg360Url] = useState(false);
  const [view360images, setView360images] = useState([]);
  const [final360ImgArr, setFinal360ImgArr] = useState([]);
  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState("");
  // HOOKS END }}}}}}}}}}

  // {{{{{{{{{{ HANDLERS START
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };
  const handleFile360Change = (e) => {
    setView360images([...view360images, ...e.target.files]);
  };
  //HANDLE SUBMIT
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
    const uniqueId = nanoid(5);
    const data = {
      ...propertyData,
      ...locality,
      aminities: aminities,
      additionalRooms: additionalRooms,
      approvals: approvals,
      whyInvestHere: whyInvest,
      imgArr: finalImgArr,
      additionalDetails: additionalDetails,
      view360ImgArr: final360ImgArr,
      uniqueId: uniqueId,
    };
    console.log("data before posting", data);
    try {
      toast.loading("Uploading images. Please wait");
      const response = await axios.post("/resort-form", data, {
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
          title:
            "Your Property Advertisement is under screening! We will get back to you soon",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
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
    } // eslint-disable-next-line
  }, [imgUrl]);
  // HANDLERS END }}}}}}}}}}

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100vh",
    width: "75%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <>
      <main className="resort-form-wrapper">
        <main className="resort-form-container">
          <section>
            <span>Sell or Buy Property for Free</span>
            <br />
            {!auth ? (
              <span
                style={{
                  fontSize: "1rem",
                  color: "red",
                  letterSpacing: ".2rem",
                }}
              >
                Please login to your seller account to list property.
              </span>
            ) : null}
          </section>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>resort Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PropertyDetails
                propertyData={propertyData}
                setPropertyData={setPropertyData}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Locality</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Locality locality={locality} setLocality={setLocality} />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Aminities</Typography>
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
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>Why Invest</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <WhyInvest
                whyInvest={whyInvest}
                setWhyInvest={setWhyInvest}
                whyInvestFactors={whyInvestFactors}
                setWhyInvestFactors={setWhyInvestFactors}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography>Approvals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Approvals
                newApprovals={newApprovals}
                setNewApprovals={setNewApprovals}
                approvals={approvals}
                setApprovals={setApprovals}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography>Additional Rooms</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AdditionalRooms
                newAdditionalRooms={newAdditionalRooms}
                setNewAdditionalRooms={setNewAdditionalRooms}
                additionalRooms={additionalRooms}
                setAdditionalRooms={setAdditionalRooms}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
            >
              <Typography>Upload Property Images</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="upload-image-form-wrapper">
                {/* <p style={{ color: "#64748b", marginBottom: "20px" }}>
                You can upload upto 8 images only
              </p> */}
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
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        width="100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            {/* upload 360 view images */}
            <AccordionSummary
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <Typography>Upload 360degree View Image</Typography>
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
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        width="100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>Additional Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AdditionalInfo
                additionalDetails={additionalDetails}
                setAdditionalDetails={setAdditionalDetails}
              />
            </AccordionDetails>
          </Accordion>
          <div className="preview-button">
            <Button onClick={handleOpen}>Preview</Button>
          </div>
        </main>
      </main>
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
    </>
  );
};

export default ResortForm;
