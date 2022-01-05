const router = require("express").Router();
const postmark = require("postmark");
const dotenv = require("dotenv");

dotenv.config();

router.post("/", (req, res) => {
  console.log(req.body);

  try {
    // console.log(process.env.postmark);
    const postmarkClient = new postmark.ServerClient(process.env.postmark);

    const mailOptions = {
      From: "annie@thelazycompany.com", // sender address
      To: process.env.email, // list of receivers
      Subject: "Thank You for subscribing!", // Subject line
      HTMLBody: "<p>Messgae from Yurumei</p>",
      TextBody:
        " <h3> New Inquiry From Yurumei </h3> <ul> <li>Name: ${req.body.name}</li> <li>Email: ${req.body.emailAddress}</li> <li>Subject: ${req.body.subject}</li> <li>Message: ${req.body.message}</li> </ul>",
    };

    return postmarkClient.sendEmail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return res.status(500).send({
          success: false,
          message: "Something went wrong, please try again!",
        });
      } else {
        return res.send({
          success: true,
          message: "Thanks for subscribing!",
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong, please try again!",
    });
  }
});

module.exports = router;
