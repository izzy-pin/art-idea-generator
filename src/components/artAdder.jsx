import { useState } from "react";
import artComponents from "./artComponents";

const ArtAdder = ({ setWorkType, setArtpieces }) => {
  const [artStyle, setArtStyle] = useState("light");

  const makeArtPiece = (artStyle) => {
    const artMedia = artComponents[artStyle].artObject;
    const artSubj = artComponents[artStyle].naturalElement;
    const newArtObjIndex = getRndInteger(0, artMedia.length);
    const newNaturalElIndex = getRndInteger(0, artSubj.length);
    const piece = `${artMedia[newArtObjIndex]} ${artSubj[newNaturalElIndex]}`;
    const newArt = { piece, dislike: false };

    setArtpieces((currArtpieces) => {
      if (
        currArtpieces[0].piece === "Something new?..." ||
        currArtpieces[0].piece === "Your first idea..."
      ) {
        localStorage.setItem("art-ideas", JSON.stringify([{ ...newArt }]));
        return [{ ...newArt }];
      }
      localStorage.setItem(
        "art-ideas",
        JSON.stringify([...currArtpieces, { ...newArt }])
      );
      return [...currArtpieces, { ...newArt }];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWorkType(artStyle);
    makeArtPiece(artStyle);
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select
          defaultValue={"light"}
          className="choose"
          name="artwork"
          onChange={(event) => {
            const selectedArtType = event.target.value;
            setArtStyle(selectedArtType);
          }}
        >
          <option value="light">Light</option>
          <option value="sound">Audio</option>
          <option value="time">Time Piece</option>
          <option value="video">Video</option>
        </select>
        <button className="createOrClear"> Create ・ﾟ✧</button>
      </form>
    </>
  );
};

export default ArtAdder;
