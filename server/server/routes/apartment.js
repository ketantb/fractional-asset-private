const router = require("express").Router();
const moment = require("moment");

const Apartment = require("../Model/apartment");
const userMiddleware = require("../midleware/userMiddlware");

//ADD NEW PRODUCT
router.post("/apartment-form", userMiddleware, async (req, resp) => {
  console.log("token is from post form", req.body.userId);
  console.log(req.body);
  const date = moment().format("DD/MM/YYYY");
  try {
    //images
    const newApartment = await Apartment.create({
      ...req.body,
      postedOn: date,
      userId: req.userId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newApartment);
    resp.json({
      success: true,
      message: "Data created successfully",
      Apartment: newApartment,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// MY PROPERTIES login required
router.get("/my-Apartment", userMiddleware, async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myList = await Apartment.find({ user: req.body.userId });

  try {
    if (myList) {
      res.json({ success: true, list: myList });
    } else {
      res.json({ success: false, msg: "No Data Found" });
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});

//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-Apartment", async (req, resp) => {
  try {
    let allApartmentsList = await Apartment.find();
    if (allApartmentsList) {
      resp.json({ success: true, list: allApartmentsList });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

//GET Apartment LIST BY CITY
router.get("/city/Apartment/:id", async (req, resp) => {
  const { id } = req.params;
  console.log(id);
  try {
    const ApartmentList = await Apartment.find({ city: id });

    if (ApartmentList) {
      console.log("specific Apartment details", ApartmentList);
      resp.json({ success: true, ApartmentList: ApartmentList });
    } else {
      resp.json({ success: false, message: "NO DATA FOUND" });
    }
  } catch (err) {
    console.log(err);
    resp.json({ success: false, message: err });
  }
});

module.exports = router;
