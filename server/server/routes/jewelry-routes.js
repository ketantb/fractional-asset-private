const router = require("express").Router();
const moment = require("moment");

const Jewellery = require("../Model/jewelryModel");
const userMiddleware = require("../midleware/userMiddlware");

//ADD NEW PRODUCT
router.post("/jewellery-form", userMiddleware, async (req, resp) => {
  console.log("token is from post form", req.userId);
  // console.log(req.body)
  const date = moment().format("DD/MM/YYYY");
  try {
    const newJewellery = await Jewellery.create({
      ...req.body,
      postedOn: date,
      userId: req.userId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newJewellery);
    resp.json({
      success: true,
      message: "Data created successfully",
      jewelry: newJewellery,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

//my jewellery login required
router.get("/my-jewellery", userMiddleware, async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myList = await Jewellery.find({ user: req.body.userId });

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

// all jewellery  required
router.get("/all-jewelry", async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myJewelryList = await Jewelry.find({ userId: req.body.userId });

  try {
    if (myJewelryList) {
      res.json({ success: true, list: myJewelryList });
    } else {
      res.json({ success: false, msg: "No Data Found" });
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});

module.exports = router;
