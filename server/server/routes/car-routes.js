const moment = require("moment");
const router = require("express").Router();

const Car = require("../Model/carModel");
const userMiddleware = require("../midleware/userMiddlware");

//ADD NEW PRODUCT
router.post("/car-form", userMiddleware, async (req, resp) => {
  console.log("token is from post form", req.userId);
  // console.log(req.body)
  const date = moment().format("DD/MM/YYYY");
  try {
    const newCar = await Car.create({
      ...req.body,
      postedOn: date,
      userId: req.userId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newCar);
    resp.json({
      success: true,
      message: "Data created successfully",
      car: newCar,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// MY PROPERTIES login required
// my Art login required
router.get("/my-cars", userMiddleware, async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myList = await Car.find({ user: req.body.userId });

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
router.get("/listing-all-cars", async (req, resp) => {
  try {
    let allCarListings = await Car.find();
    if (allCarListings) {
      resp.json({ success: true, list: allCarListings });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

module.exports = router;
