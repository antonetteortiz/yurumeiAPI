const express = require("express");
const cors = require("cors");
const Router = express();
const Music = require("./models/music");
const parser = require("body-parser");
const { request, response } = require("express");
const Recipe = require("./models/recipe")

Router.use(cors());
Router.use(parser.json());

Router.get("/", (request, response) => {
  console.log("yerr");
  response.redirect("/Music");
});

Router.get("/Music/:artistName", (request, response) => {
  Music.findOne({ artistName: decodeURI(request.params.artistName) }).then(
    (Music) => {
      console.log(decodeURI(request.params.artistName));
      response.json(Music);
    }
  );
});

Router.get("/Music", (request, response) => {
  Music.find({}).then((Music) => {
    response.json(Music);
  });
});

Router.post("/Music", (request, response) => {
  Music.create(request.body).then((Music) => {
    response.json(Music);
  });
});

Router.put("/Music/:artist", (request, response) => {
  Music.findOneAndUpdate(
    { artistName: decodeURI(request.params.artist) },
    request.body,
    { new: true }
  ).then((Music) => response.json(Music));
});

Router.delete("/Music/:artist", (request, response) => {
  Music.findOneAndDelete({
    artistName: decodeURI(request.params.artist),
  }).then((Music) => {
    response.json(Music);
  });
});


// 
// 
// 

Router.get("/", (request, response) => {
  console.log("yerr");
  response.redirect("/Recipe");
});

Router.get("/Recipe/:recipeName", (request, response) => {
  Recipe.findOne({ recipeName: decodeURI(request.params.recipeName) }).then(
    (Recipe) => {
      console.log(decodeURI(request.params.recipeName));
      response.json(Recipe);
    }
  );
});

Router.get("/Recipe", (request, response) => {
  Recipe.find({}).then((Recipe) => {
    response.json(Recipe);
  });
});

Router.post("/Recipe", (request, response) => {
  Recipe.create(request.body).then((Recipe) => {
    response.json(Recipe);
  });
});

Router.put("/Recipe/:name", (request, response) => {
  Recipe.findOneAndUpdate(
    { recipeName: decodeURI(request.params.name) },
    request.body,
    { new: true }
  ).then((Recipe) => response.json(Recipe));
});

Router.delete("/Recipe/:name", (request, response) => {
  Recipe.findOneAndDelete({
    recipeName: decodeURI(request.params.recipe),
  }).then((Recipe) => {
    response.json(Recipe);
  });
});




Router.set("port", process.env.PORT || 8080);

Router.listen(Router.get("port"), () => {
  console.log(`✅ PORT: ${Router.get("port")} 🌟`);
});

// Router.listen(9000, () => {
//   console.log("Garifuna Nuguya");
// });
