const router = require("express").Router();
const Heroes = require('../models/heroes');

router.get("/", (request, response) => {
  Heroes.find({}).then((Heroes) => {
    response.json(Heroes);
  });
});

router.post("/", (request, response) => {
  Heroes.create(request.body).then((Heroes) => {
    response.json(Heroes);
  });
});

router.get("/:name", (request, response) => {
  Heroes.findOne({ heroName: decodeURI(request.params.heroName) }).then(
    (Heroes) => {
      // console.log(decodeURI(request.params.heroName));
      response.json(Heroes);
    }
  );
});


router.put("/:name", (request, response) => {
  Heroes.findOneAndUpdate(
    { heroName: decodeURI(request.params.name) },
    request.body,
    { new: true }
  ).then((Heroes) => response.json(Heroes));
});

router.delete("/:name", (request, response) => {
  Heroes.findOneAndDelete({
    heroName: decodeURI(request.params.hero),
  }).then((Hero) => {
    response.json(Hero);
  });
});

module.exports = router;
