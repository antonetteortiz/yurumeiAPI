const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const dotenv = require("dotenv");
// const models = require("./models")
const router = express();

dotenv.config();
router.use(cors());
router.use(parser.json());
router.options("*", cors());

router.get("/", (request, response) => {
  // console.log("yerr");
  response.redirect("/");
});

// a possible way to require models once without opening a new db connection everytime

// router.use( function(req, res, next) {
//   req.models = models;
//   next();
// });

// Routes
router.use('/contact', require('./routes/contact'))
router.use('/heroes', require('./routes/hero'))
router.use('/recipe', require('./routes/recipe'))
router.use('/music', require('./routes/music'))


router.set("port", process.env.PORT || 8080);

router.listen(router.get("port"), () => {
  console.log(`✅ PORT: ${router.get("port")} 🌟`);
});

// router.listen(9000, () => {
//   console.log("Garifuna Nuguya");
// });
