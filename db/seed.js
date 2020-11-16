const Music = require("../models/music");
const MusicData = require("./music.json");

Music.deleteMany({}).then(() => {
  // console.log("heyy")
  Music.create(MusicData).then((res) => console.log(res));
});
