const Music = require("../models/music");
const MusicData = require("./music.json");

const Recipe = require("../models/recipe");
const RecipeData = require("./recipe.json");

const Heroes = require("../models/heroes");
const HeroesData = require("./heroes.json");

/*
Music.deleteMany({}).then(() => {
  // console.log("music albums")
  Music.create(MusicData).then((res) => console.log(res));
});
*/

Recipe.deleteMany({}).then(() => {
  // console.log("what's cooking")
  Recipe.create(RecipeData).then((res) => console.log(res));
});

/*
Heroes.deleteMany({}).then(() => {
  // console.log("our heroes")
  Heroes.create(HeroesData).then((res) => console.log(res));
});
*/
