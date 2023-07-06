import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import { Button } from "@mui/material";
import { TextField, MenuItem } from "@mui/material";
import "../allFormsCommonCSS.css";
import "./resort.css";
import { TiDelete } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import resortImg from "../../../assets/hotel-resort.png";
import { sellerType, propertyAge, furnishing } from "../data";

const ResortEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //get individual data data
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");
  const [aminity, setAminity] = useState("");
  const [aminityArr, setAminityArr] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [images, setImages] = useState("");
  const [imgArr, setImgArr] = useState([]);
  const [img360Arr, setImg360Arr] = useState([]);

  //get data
  const getData = async () => {
    try {
      const response = await axios.get(`/property-data/${id}`);
      // console.log(response.data.propertyData);
      setData(response.data.propertyData);
      setAminityArr(response?.data?.propertyData?.aminities);
      setImgArr(response?.data?.propertyData?.imgArr);
      setImg360Arr(response?.data?.propertyData?.view360ImgArr);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      const editData = {
        propertyAge: data.propertyAge,
        area: data.area,
        furnishing: data.furnishing,
        street: data.street,
        landmark: data.landmark,
        city: data.city,
        state: data.state,
        pin: data.pin,
        rentPrice: data.rentPrice,
        totalShares: data.totalShare,
        availableShares: data.availableShares,
        perSharePrice: data.perSharePrice,
        aminities: data.aminities,
        imgArr: data.imgArr,
      };
      setEdit(editData);
    }
  }, [data]);

  //handle Inputs
  const handleInputs = (e) => {
    setEdit((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  //handle aminity arr
  //add new aminity
  const handleAminityArr = () => {
    // console.log(aminityArr);
    if (aminity.length) {
      setAminityArr([...aminityArr, aminity]);
      setAminity("");
    }
  };
  //delete aminity
  const deleteAminity = (i) => {
    const arr = aminityArr
      .filter((aminity, index) => {
        if (i !== index) {
          return aminity;
        }
      })
      .map((aminity) => aminity);
    setAminityArr(arr);
  };
  //handle aminity arr ends

  //handle img arr
  //delete aminity
  const handleDeleteImg = (i) => {
    const arr = imgArr
      .filter((img, index) => {
        if (i !== index) {
          return img;
        }
      })
      .map((img) => img);
    setImgArr(arr);
  };
  //handle img arr ends

  //add new img
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleUploadImages = async (e) => {
    e.preventDefault();

    let arr = [];
    for (let i = 0; i < images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", "insta_clone");
      imgData.append("file", images[i]);
      await axios
        .post(process.env.REACT_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          // console.log(resp);
          arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }

    const updatedArr = [...imgArr, ...arr];
    setImgArr(updatedArr);

    if (updatedArr.length !== 0) {
      setImgUrl(true);
    } else {
      toast.error("please upload images");
    }
  };

  useEffect(() => {
    if (imgUrl) {
      handleUpdateData();
    }
  }, [imgUrl]);

  // handle Update Data
  const handleUpdateData = async () => {
    const updatedImgArr = imgArr;
    const editData = {
      sellerType: data.sellerType,
      sellerName: data.sellerName,
      reraId: data.reraId,
      propertyAge: data.propertyAge,
      apartmentName: data.apartmentName,
      area: data.area,
      carpetArea: data.carpetArea,
      bedroom: data.bedroom,
      bathroom: data.bathroom,
      totalBalconies: data.totalBalconies,
      totalFloors: data.totalFloors,
      floorNo: data.floorNo,
      totalLifts: data.totalLifts,
      possessionStatus: data.possessionStatus,
      furnishing: data.furnishing,
      overlooking: data.overlooking,
      facing: data.facing,
      flooringType: data.flooringType,
      street: data.street,
      landmark: data.landmark,
      city: data.city,
      state: data.state,
      pin: data.pin,
      nearbyPlaces: data.nearbyPlaces,
      rentPrice: data.rentPrice,
      totalShares: data.totalShare,
      availableShares: data.availableShares,
      perSharePrice: data.perSharePrice,
      aminities: aminityArr,
      imgArr: updatedImgArr,
    };

    try {
      toast.loading("Uploading Images..");
      const response = await axios.put(`/edit/${id}`, editData);
      if (response.data.success) {
        console.log(response);
        toast.dismiss();
        navigate("/listings");
        toast.success("Data updated successfully..");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) {
    return <PreLoader />;
  }

  return (
    <div className="edit-form-wrap container">
      <div className="row1">
        <div>
          <img src={resortImg} alt="" />
        </div>
        <h6>
          Hello {data.sellerName}
          <br />
          Update your {data.propertyType} data
        </h6>
      </div>
      <div className="form-row">
        <h4>Details</h4>
        {/* property details */}
        <section>
          <TextField
            select
            size="small"
            spellCheck="false"
            name="sellerType"
            sx={{ width: "250px" }}
            helperText="Please select seller type"
            value={edit.sellerType}
            onChange={handleInputs}
          >
            {sellerType.map((i) => (
              <MenuItem key={i.value} value={i.value}>
                {i.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            spellCheck="false"
            name="sellerName"
            sx={{ width: "250px" }}
            helperText="Please enter seller name"
            value={edit.sellerName}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="area"
            sx={{ width: "250px" }}
            helperText="Please enter property area"
            value={edit.area}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="bedroom"
            sx={{ width: "250px" }}
            helperText="Please enter bedrooms"
            value={edit.bedroom}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="bathroom"
            sx={{ width: "250px" }}
            helperText="Please enter bathrooms"
            value={edit.bathroom}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="carpetArea"
            sx={{ width: "250px" }}
            helperText="Please enter carpet area"
            value={edit.carpetArea}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="totalBalconies"
            sx={{ width: "250px" }}
            helperText="Please enter total balconies"
            value={edit.totalBalconies}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="totalFloors"
            sx={{ width: "250px" }}
            helperText="Please enter total floors"
            value={edit.totalFloors}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="floorNo"
            sx={{ width: "250px" }}
            helperText="Please enter floor number"
            value={edit.floorNo}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="number"
            name="totalLifts"
            sx={{ width: "250px" }}
            helperText="Please enter total lifts"
            value={edit.totalLifts}
            onChange={handleInputs}
          />
          <TextField
            select
            size="small"
            spellCheck="false"
            name="furnishing"
            sx={{ width: "250px" }}
            helperText="Please select furnishing"
            value={edit.furnishing}
            onChange={handleInputs}
          >
            {furnishing.map((i) => (
              <MenuItem key={i.value} value={i.value}>
                {i.label}
              </MenuItem>
            ))}
          </TextField>
          {data.propertyAdType === "rent" ? (
            <TextField
              size="small"
              spellCheck="false"
              type="number"
              name="rentPrice"
              sx={{ width: "250px" }}
              helperText="Please enter rent price / month"
              value={edit.rentPrice}
              onChange={handleInputs}
            />
          ) : (
            <>
              <TextField
                size="small"
                spellCheck="false"
                type="number"
                name="totalShares"
                sx={{ width: "250px" }}
                helperText="Please enter total shares"
                value={edit.totalShares}
                onChange={handleInputs}
              />
              <TextField
                size="small"
                spellCheck="false"
                type="number"
                name="availableShares"
                sx={{ width: "250px" }}
                helperText="Please enter available shares"
                value={edit.availableShares}
                onChange={handleInputs}
              />
              <TextField
                size="small"
                spellCheck="false"
                type="number"
                name="perSharePrice"
                sx={{ width: "250px" }}
                helperText="Please enter per share price"
                value={edit.perSharePrice}
                onChange={handleInputs}
              />
            </>
          )}
        </section>
      </div>
      {/* location details */}
      <div className="form-row">
        <h4>Location details</h4>
        <section>
          <TextField
            size="small"
            spellCheck="false"
            type="text"
            name="street"
            sx={{ width: "250px" }}
            helperText="Please enter street"
            value={edit.street}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="text"
            name="landmark"
            sx={{ width: "250px" }}
            helperText="Please enter landmark"
            value={edit.landmark}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="text"
            name="city"
            sx={{ width: "250px" }}
            helperText="Please enter city"
            value={edit.city}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="text"
            name="state"
            sx={{ width: "250px" }}
            helperText="Please enter state"
            value={edit.state}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="text"
            name="pin"
            sx={{ width: "250px" }}
            helperText="Please enter pincode"
            value={edit.pin}
            onChange={handleInputs}
          />
          <TextField
            size="small"
            spellCheck="false"
            type="text"
            name="nearbyPlaces"
            sx={{ width: "250px" }}
            helperText="Please enter nearbyPlaces"
            value={edit.nearbyPlaces}
            onChange={handleInputs}
          />
        </section>
      </div>
      {/* aminities */}
      <div className="form-row">
        <h4>Aminities</h4>
        <section>
          {aminityArr.map((aminity, i) => {
            return (
              <p>
                <span style={{ marginRight: "1rem" }}>
                  <TiDelete
                    style={{ width: "2rem", height: "2rem" }}
                    onClick={() => deleteAminity(i)}
                  />
                </span>
                {aminity}
              </p>
            );
          })}
        </section>
        <div style={{ padding: "1rem" }}>
          <TextField
            type="text"
            size="small"
            name="aminity"
            value={aminity}
            onChange={(e) => setAminity(e.target.value)}
          />
          <Button onClick={handleAminityArr}>Add</Button>
        </div>
      </div>
      {/* images */}
      <div className="images-wrap">
        <h4>Images</h4>
        <section>
          {imgArr?.map((img, i) => {
            return (
              <div>
                <div className="imgwrap">
                  <img src={img} alt=""></img>
                  <RiDeleteBin6Fill
                    className="icon"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      color: "#FFC300 ",
                    }}
                    onClick={() => handleDeleteImg(i)}
                  />
                </div>
              </div>
            );
          })}
          {img360Arr?.map((img, i) => {
            return (
              <div>
                <div className="imgwrap">
                  <img src={img} alt=""></img>
                  <RiDeleteBin6Fill
                    className="icon"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      color: "#FFC300 ",
                    }}
                    onClick={() => handleDeleteImg(i)}
                  />
                </div>
              </div>
            );
          })}
        </section>
        <div
          className="upload-image-form-wrapper"
          style={{ marginTop: "1rem" }}
        >
          <p style={{ opacity: "0.6" }}>You can upload upto 8 images only</p>
          <form>
            <input
              type="file"
              name="images"
              onChange={handleFileChange}
              multiple
            />
          </form>
        </div>
      </div>

      <div className="update-btn">
        <button className="btn btn-danger" onClick={handleUploadImages}>
          UPDATE DATA
        </button>
      </div>
    </div>
  );
};

export default ResortEdit;
