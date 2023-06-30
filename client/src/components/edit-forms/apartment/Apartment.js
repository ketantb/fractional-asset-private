import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import "../allFormsCommonCSS.css";
import "./Apartment.css";
import { TiDelete } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ApartmentEdit = () => {
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

  //get data
  const getData = async () => {
    try {
      const response = await axios.get(`/property-data/${id}`);
      // console.log(response.data.propertyData);
      setData(response.data.propertyData);
      setAminityArr(response?.data?.propertyData?.aminities);
      setImgArr(response?.data?.propertyData?.imgArr);
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
      propertyAge: edit.propertyAge,
      area: edit.area,
      furnishing: edit.furnishing,
      street: edit.street,
      landmark: edit.landmark,
      city: edit.city,
      state: edit.state,
      pin: edit.pin,
      rentPrice: edit.rentPrice,
      totalShares: edit.totalShare,
      availableShares: edit.availableShares,
      perSharePrice: edit.perSharePrice,
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
        <h5>EDIT {data.propertyType} DATA</h5>
      </div>
      <div className="form-row">
        <h4>Details</h4>
        <section>
          <FormControl className="form-field">
            <FormLabel className="">Proporty Age</FormLabel>
            <select
              name="propertyAge"
              value={edit.propertyAge}
              onChange={handleInputs}
            >
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="1-2years">1-2years</option>
              <option value="2-4years">2-4years</option>
            </select>
          </FormControl>
          <FormControl className="form-field">
            <label>Property Area</label>
            <TextField
              type="number"
              id="standard-basic"
              variant="standard"
              name="area"
              value={edit.area}
              onChange={handleInputs}
            />
          </FormControl>

          <FormControl className="form-field">
            <FormLabel className="">Furnishing</FormLabel>
            <select
              name="furnishing"
              value={edit.furnishing}
              onChange={handleInputs}
            >
              <option value="">Select</option>
              <option value="fully-furnished">Fully furnished</option>
              <option value="semi-furnished">Semi furnished</option>
              <option value="unfurnished">Unfurnished</option>
            </select>
          </FormControl>
          <FormControl className="form-field">
            <label>Bedrooms</label>
            <TextField
              type="number"
              id="standard-basic"
              variant="standard"
              name="bedroom"
              value={edit.bedroom}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl className="form-field">
            <label>Bathrooms</label>
            <TextField
              type="number"
              id="standard-basic"
              variant="standard"
              name="bathroom"
              value={edit.bathroom}
              onChange={handleInputs}
            />
          </FormControl>

          {data.propertyAdType === "rent" ? (
            <FormControl className="form-field">
              <label>Rent Price</label>
              <TextField
                type="number"
                id="standard-basic"
                variant="standard"
                name="rentPrice"
                value={edit.rentPrice}
                onChange={handleInputs}
              />
            </FormControl>
          ) : (
            <>
              <FormControl className="form-field">
                <label>Total Shares</label>
                <TextField
                  type="number"
                  id="standard-basic"
                  variant="standard"
                  name="totalShares"
                  value={edit.totalShares}
                  onChange={handleInputs}
                />
              </FormControl>
              <FormControl className="form-field">
                <label>Available Shares</label>
                <TextField
                  type="number"
                  id="standard-basic"
                  variant="standard"
                  name="availableShares"
                  value={edit.availableShares}
                  onChange={handleInputs}
                />
              </FormControl>
              <FormControl className="form-field">
                <label>Price per share</label>
                <TextField
                  type="number"
                  id="standard-basic"
                  variant="standard"
                  name="perSharePrice"
                  value={edit.perSharePrice}
                  onChange={handleInputs}
                />
              </FormControl>
            </>
          )}
        </section>
      </div>
      <div className="form-row">
        <h4>Location details</h4>
        <section>
          <FormControl className="form-field">
            <label>Street</label>
            <TextField
              id="standard-basic"
              variant="standard"
              name="street"
              value={edit.street}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl className="form-field">
            <label>Landmark</label>
            <TextField
              id="standard-basic"
              variant="standard"
              name="landmark"
              value={edit.landmark}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl className="form-field">
            <label>City</label>
            <TextField
              id="standard-basic"
              variant="standard"
              name="city"
              value={edit.city}
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl className="form-field">
            <label>State</label>
            <TextField
              id="standard-basic"
              variant="standard"
              name="state"
              value={edit.state}
              onChange={handleInputs}
            />
          </FormControl>
        </section>
      </div>

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
            label="Add New Aminity"
            onChange={(e) => setAminity(e.target.value)}
          />
          <Button onClick={handleAminityArr}>Add</Button>
        </div>
      </div>

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

export default ApartmentEdit;
