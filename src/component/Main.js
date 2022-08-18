import * as React from "react";
// import memeData from "../memeData";
// import Data from "../memeData";
export default function Main(prop) {
  var url;
  var top = document.getElementById("top--input");
  var bot = document.getElementById("but--input");
  const [meme, setMeme] = React.useState({
    topText: "",
    botText: "",
    randomImage: "",
  });
  const [allMems, setAllMemes] = React.useState([]);
  function MemeGenerator() {
    var memeArray = allMems;
    // let randnum = Math.random;
    let randNum = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randNum].url;
    setMeme((x) => ({
      topText: top.value,
      botText: bot.value,
      randomImage: url,
    }));
  }
  function changeHandler(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((ans) => setAllMemes(ans.data.memes));
  }, []);

  return (
    <main className="container main">
      <div className="form--container">
        <from className="form">
          <input
            className="top--text"
            id="top--input"
            placeholder="top text"
            name="topText"
            value={meme.topText}
            onChange={changeHandler}
          />
          <input
            className="but--text"
            id="but--input"
            placeholder="button text"
            name="botText"
            value={meme.botText}
            onChange={changeHandler}
          />
          <button onClick={MemeGenerator}>Get new meme imgae</button>
        </from>
        <div className="container--img">
          <img src={meme.randomImage} className="meme--img" />
          <h1 className="top--title">{meme.topText}</h1>
          <h1 className="bottom--title">{meme.botText}</h1>
        </div>
      </div>
    </main>
  );
}
