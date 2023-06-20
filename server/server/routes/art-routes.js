const router = require("express").Router();
const moment = require("moment");
const Art = require("../Model/artModel");
const userMiddleware = require("../midleware/userMiddlware");

//ADD NEW PRODUCT
router.post("/art-form", userMiddleware, async (req, resp) => {
  console.log(req.userId);
  const date = moment().format("DD/MM/YYYY");
  console.log(date);
  try {
    const newArt = await Art.create({
      ...req.body,
      postedOn: date,
      userId: req.userId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newArt);
    resp.json({
      success: true,
      message: "Data created successfully",
      art: newArt,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// my Art login required
router.get("/my-arts", userMiddleware, async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myList = await Art.find({ user: req.body.userId });

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
router.get("/all-arts", async (req, resp) => {
  try {
    let allArtListings = await Art.find();
    if (allArtListings) {
      resp.json({ success: true, list: allArtListings });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

module.exports = router;
