const router = require("express").Router();
const Music = require("../models/music");



router.get("/", (request, response) => {
    Music.find({}).then((music) => {
        response.json(music);
    });
});

router.post("/", (request, response) => {
    Music.create(request.body).then((music) => {
        response.json(music);
    });
});

router.get("/:artistName", (request, response) => {
  Music.findOne({ artistName: decodeURI(request.params.artistName) }).then(
    (music) => {
      console.log(decodeURI(request.params.artistName));
      response.json(music);
    }
  );
});

router.put("/:artist", (request, response) => {
  Music.findOneAndUpdate(
    { artistName: decodeURI(request.params.artist) },
    request.body,
    { new: true }
  ).then((music) => response.json(music));
});

router.delete("/:artist", (request, response) => {
  Music.findOneAndDelete({
    artistName: decodeURI(request.params.artist),
  }).then((music) => {
    response.json(music);
  });
});


module.exports = router;
