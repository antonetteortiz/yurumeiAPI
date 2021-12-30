const router = require("express").Router();
const Recipe = require("../models/recipe");


router.get("/", (request, response) => {
    Recipe.find({}).then((recipe) => {
        response.json(recipe);
    });
});

router.post("/", (request, response) => {
    Recipe.create(request.body).then((recipe) => {
        response.json(recipe);
    });
});

router.get("/:name", (request, response) => {
  Recipe.findOne({ recipeName: decodeURI(request.params.recipeName) }).then(
    (recipe) => {
      // console.log(decodeURI(request.params.recipeName));
      response.json(recipe);
    }
  );
});

router.put("/:name", (request, response) => {
  Recipe.findOneAndUpdate(
    { recipeName: decodeURI(request.params.name) },
    request.body,
    { new: true }
  ).then((recipe) => response.json(recipe));
});

router.delete("/:name", (request, response) => {
  Recipe.findOneAndDelete({
    recipeName: decodeURI(request.params.recipe),
  }).then((recipe) => {
    response.json(recipe);
  });
});


module.exports = router;
