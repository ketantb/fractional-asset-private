const router = require("express").Router();
const userMiddlware = require("../midleware/userMiddlware");

const Car = require("../Model/carModel");
const Art = require("../Model/artModel");
const Yacht = require("../Model/yachtModel");
const Land = require("../Model/landModel");
const Jewellery = require("../Model/jewelryModel");

router.get("/get-data", userMiddlware, async (req, resp) => {
  console.log(req.userId);
  try {
    const cardata = await Car.find({ userId: req.userId });
    const artdata = await Art.find({ userId: req.userId });
    const yachtdata = await Yacht.find({ userId: req.userId });
    const landdata = await Land.find({ userId: req.userId });
    const jewellerydata = await Jewellery.find({ userId: req.userId });

    const data = [
      ...cardata,
      ...artdata,
      ...yachtdata,
      ...landdata,
      ...jewellerydata,
    ];
    console.log(data.length);
    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err });
  }
});

module.exports = router;
