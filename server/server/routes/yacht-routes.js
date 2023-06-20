const router = require("express").Router();
const moment = require("moment");

const Yacht = require("../Model/yachtModel");
const userMiddleware = require("../midleware/userMiddlware");

//ADD NEW PRODUCT
router.post("/yacht-form", userMiddleware, async (req, resp) => {
  console.log("token is from post form", req.userId);
  console.log(req.body);
  const date = moment().format("DD/MM/YYYY");
  try {
    const newYacht = await Yacht.create({
      ...req.body,
      postedOn: date,
      userId: req.userId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newYacht);
    resp.json({
      success: true,
      message: "Data created successfully",
      yacht: newYacht,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// MY PROPERTIES login required
router.get("/my-yachts", userMiddleware, async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myYachtList = await Yacht.find({ user: req.body.userId });

  try {
    if (myYachtList) {
      res.json({ success: true, list: myYachtList });
    } else {
      res.json({ success: false, msg: "No Data Found" });
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});

//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-yachts", async (req, resp) => {
  try {
    let allYachtListings = await Yacht.find();
    if (allYachtListings) {
      resp.json({ success: true, list: allYachtListings });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

module.exports = router;
