const router = require("express").Router();
const moment = require("moment");

const Land = require("../Model/landModel");
const userMiddleware = require("../midleware/userMiddlware");

//ADD NEW PRODUCT

router.post("/land-form", userMiddleware, async (req, resp) => {
  console.log("token is from post form", req.userId);
  console.log(req.body);
  try {
    const newLand = await Land.create({
      ...req.body,
      postedOn: date,
      userId: req.userId,
    });
    // image: req.files.map(file => file.filename)
    console.log(newLand);
    resp.json({
      success: true,
      message: "Data created successfully",
      land: newLand,
    });
  } catch (err) {
    resp.json({
      message: "something is wrong in positng complete form data",
      err,
    });
  }
});

// my Art login required
router.get("/my-lands", userMiddleware, async (req, res) => {
  console.log("thid is id", req.body.userId);
  let myList = await Land.find({ user: req.body.userId });

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
router.get("/listing-all-lands", async (req, resp) => {
  try {
    let allLandsList = await Land.find();
    if (allLandsList) {
      resp.json({ success: true, list: allLandsList });
    } else {
      resp.json({ success: false, message: "no data found" });
    }
  } catch (err) {
    console.log("err in listing-all-product server", err);
  }
});

module.exports = router;
